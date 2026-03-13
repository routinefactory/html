from dataclasses import dataclass
from datetime import date, datetime, timedelta
import json
import re
from pathlib import Path
from typing import Any


class SearchAdvisorReportMerger:
    FILE_PATTERN = re.compile(
        r"^searchadvisor-(?P<naver_id>.+)-(?P<date>\d{8})-(?P<time>\d{6})\.html$",
    )
    MERGED_FILE_PATTERN = re.compile(r"^searchadvisor-MERGED-(?P<date>\d{8})\.html$")
    PAYLOAD_MARKER = "const EXPORT_PAYLOAD = "
    PAYLOAD_CONTRACT_MARKER = 'version: "20260314-payload-contract-v1"'
    REPORT_DECORATION_HOOK_MARKER = (
        "window.__SEARCHADVISOR_APPLY_REPORT_DECORATIONS__ = applySnapshotReportDecorations;"
    )

    @dataclass(frozen=True)
    class ReportFile:
        path: Path
        naver_id: str
        yyyymmdd: str
        hhmmss: str

        @property
        def sort_key(self) -> tuple[str, str]:
            return self.yyyymmdd, self.hhmmss

    def __init__(self, root_dir: str | Path) -> None:
        self.root_dir = Path(root_dir)

    def generate_merged_html(
        self,
        target_date: date | None = None,
        cleanup_originals: bool = True,
        retention_days: int = 30,
    ) -> Path | None:
        base_date = target_date or date.today()
        self._cleanup_expired_searchadvisor_files(
            base_date=base_date,
            retention_days=retention_days,
        )

        output_date = self._date_to_key(base_date)
        output_path = self.root_dir / f"searchadvisor-MERGED-{output_date}.html"
        if output_path.exists():
            return output_path

        report_files = self.scan_report_files()
        if not report_files:
            return None

        selected_files = self.select_latest_files(target_date=target_date)
        merged_payload, template_file = self._merge_payloads(
            selected_files=selected_files,
            target_date_key=output_date,
        )
        merged_html = self._render_merged_html(
            template_file=template_file,
            merged_payload=merged_payload,
            selected_files=selected_files,
        )
        output_path.write_text(merged_html, encoding="utf-8")

        if cleanup_originals:
            self._cleanup_original_html_files(
                output_path=output_path,
                selected_files=selected_files,
            )

        return output_path

    def scan_report_files(self) -> list["SearchAdvisorReportMerger.ReportFile"]:
        report_files: list["SearchAdvisorReportMerger.ReportFile"] = []
        for path in sorted(self.root_dir.glob("searchadvisor-*.html")):
            match = self.FILE_PATTERN.match(path.name)
            if not match:
                continue
            report_files.append(
                self.ReportFile(
                    path=path,
                    naver_id=match.group("naver_id"),
                    yyyymmdd=match.group("date"),
                    hhmmss=match.group("time"),
                ),
            )
        return report_files

    def select_latest_files(
        self,
        target_date: date | None = None,
    ) -> dict[str, "SearchAdvisorReportMerger.ReportFile"]:
        target_key = self._date_to_key(target_date or date.today())
        latest_today_by_id: dict[str, "SearchAdvisorReportMerger.ReportFile"] = {}
        latest_any_by_id: dict[str, "SearchAdvisorReportMerger.ReportFile"] = {}

        for report_file in self.scan_report_files():
            existing_any = latest_any_by_id.get(report_file.naver_id)
            if existing_any is None or report_file.sort_key > existing_any.sort_key:
                latest_any_by_id[report_file.naver_id] = report_file

            if report_file.yyyymmdd != target_key:
                continue

            existing_today = latest_today_by_id.get(report_file.naver_id)
            if existing_today is None or report_file.sort_key > existing_today.sort_key:
                latest_today_by_id[report_file.naver_id] = report_file

        if not latest_any_by_id:
            raise FileNotFoundError(
                f"No SearchAdvisor HTML snapshots were found in {self.root_dir}",
            )

        selected_by_id = {
            naver_id: latest_today_by_id.get(naver_id, latest_any_by_id[naver_id])
            for naver_id in latest_any_by_id
        }
        return dict(sorted(selected_by_id.items()))

    def _merge_payloads(
        self,
        selected_files: dict[str, "SearchAdvisorReportMerger.ReportFile"],
        target_date_key: str,
    ) -> tuple[dict[str, Any], "SearchAdvisorReportMerger.ReportFile"]:
        payloads: list[tuple["SearchAdvisorReportMerger.ReportFile", dict[str, Any]]] = []
        for report_file in selected_files.values():
            payloads.append((report_file, self._extract_payload_from_file(report_file.path)))

        template_file = max(payloads, key=lambda item: item[0].sort_key)[0]
        data_by_site: dict[str, Any] = {}
        data_source_by_site: dict[str, "SearchAdvisorReportMerger.ReportFile"] = {}
        summary_rows_by_site: dict[str, dict[str, Any]] = {}
        summary_source_by_site: dict[str, "SearchAdvisorReportMerger.ReportFile"] = {}
        site_meta_by_site: dict[str, dict[str, Any]] = {}
        saved_at_values: list[str] = []

        for report_file, payload in payloads:
            saved_at = payload.get("savedAt")
            if isinstance(saved_at, str) and saved_at:
                saved_at_values.append(saved_at)

            payload_site_meta = payload.get("siteMeta") or {}

            for row in payload.get("summaryRows") or []:
                site = row.get("site")
                if not isinstance(site, str) or not site:
                    continue
                existing_source = summary_source_by_site.get(site)
                if existing_source and not self._is_preferred_report(report_file, existing_source):
                    continue

                merged_row = dict(row)
                merged_row["naverId"] = report_file.naver_id
                summary_rows_by_site[site] = merged_row
                summary_source_by_site[site] = report_file

            for site, site_payload in (payload.get("dataBySite") or {}).items():
                if not isinstance(site, str) or not site:
                    continue
                existing_source = data_source_by_site.get(site)
                if existing_source and not self._is_preferred_report(report_file, existing_source):
                    continue

                merged_site_payload = dict(site_payload)
                merged_site_payload["naverId"] = report_file.naver_id
                data_by_site[site] = merged_site_payload
                data_source_by_site[site] = report_file

                existing_meta = payload_site_meta.get(site)
                if isinstance(existing_meta, dict):
                    site_meta_by_site[site] = dict(existing_meta)

        summary_rows = list(summary_rows_by_site.values())
        summary_rows.sort(
            key=lambda row: (
                -(row.get("totalC") or 0),
                -(row.get("totalE") or 0),
                row.get("site") or "",
            ),
        )

        site_meta: dict[str, dict[str, Any]] = {}
        for site in set(summary_source_by_site) | set(data_source_by_site):
            summary_source = summary_source_by_site.get(site)
            data_source = data_source_by_site.get(site)
            chosen_source = summary_source
            if data_source and (chosen_source is None or self._is_preferred_report(data_source, chosen_source)):
                chosen_source = data_source
            if chosen_source is None:
                continue

            base_meta = dict(site_meta_by_site.get(site) or {})
            short_name = base_meta.get("shortName") or self._site_short_name(site)
            display_label = base_meta.get("displayLabel") or f"{short_name} [{chosen_source.naver_id}]"
            site_meta[site] = {
                **base_meta,
                "naverId": chosen_source.naver_id,
                "shortName": short_name,
                "displayLabel": display_label,
            }

        all_sites = [row["site"] for row in summary_rows if row.get("site") in data_by_site]
        cur_site = all_sites[0] if all_sites else None
        saved_at = max(saved_at_values) if saved_at_values else datetime.now().isoformat(timespec="seconds")
        naver_ids = list(selected_files.keys())

        merged_payload = {
            "savedAt": saved_at,
            "curMode": "all",
            "curSite": cur_site,
            "curTab": "overview",
            "allSites": all_sites,
            "summaryRows": summary_rows,
            "dataBySite": data_by_site,
            "siteMeta": site_meta,
            "mergedMeta": {
                "isMerged": True,
                "targetDate": target_date_key,
                "naverIds": naver_ids,
                "fileNames": [report_file.path.name for report_file in selected_files.values()],
                "selectedFilesById": {
                    naver_id: report_file.path.name
                    for naver_id, report_file in selected_files.items()
                },
                "selectedDatesById": {
                    naver_id: report_file.yyyymmdd
                    for naver_id, report_file in selected_files.items()
                },
                "siteCount": len(all_sites),
            },
        }

        return merged_payload, template_file

    def _render_merged_html(
        self,
        template_file: "SearchAdvisorReportMerger.ReportFile",
        merged_payload: dict[str, Any],
        selected_files: dict[str, "SearchAdvisorReportMerger.ReportFile"],
    ) -> str:
        html_text = template_file.path.read_text(encoding="utf-8")
        payload_start, payload_end = self._locate_payload_span(html_text)
        payload_json = json.dumps(merged_payload, ensure_ascii=False, separators=(",", ":"))
        supports_payload_contract = self._supports_payload_contract(html_text)

        helper_script = ""
        if not supports_payload_contract:
            helper_script = self._build_helper_script()

        merged_patch_script = self._build_merged_patch_script(
            merged_payload=merged_payload,
            selected_files=selected_files,
            template_supports_contract=supports_payload_contract,
        )

        html_text = (
            html_text[:payload_start]
            + f"{self.PAYLOAD_MARKER}{payload_json};\n{helper_script}\n{merged_patch_script}"
            + html_text[payload_end:]
        )

        if supports_payload_contract:
            return html_text
        return self._patch_runtime_labels(html_text)

    def _supports_payload_contract(self, html_text: str) -> bool:
        return (
            self.PAYLOAD_CONTRACT_MARKER in html_text
            and self.REPORT_DECORATION_HOOK_MARKER in html_text
        )

    def _patch_runtime_labels(self, html_text: str) -> str:
        literal_replacements = {
            'shortName.split("/")[0]': "getSiteLabel(s)",
            'document.getElementById("sadv-combo-label").textContent = shortName;': (
                'document.getElementById("sadv-combo-label").textContent = getSiteLabel(site);'
            ),
            'const shortName = r.site.replace(/^https?:\\/\\//, ""),': (
                'const shortName = r.site.replace(/^https?:\\/\\//, ""),\n'
                '        displayName = getSiteLabel(r.site),'
            ),
            '${shortName}</span>${prevBadge}': '${displayName}</span>${prevBadge}',
            'labelEl.innerHTML = `<span>${site.replace(/^https?:\\/\\//, "")}</span>`;': (
                'labelEl.innerHTML = `<span>${getSiteLabel(site)}</span>`;'
            ),
            "button.dataset.active = site.replace(/^https?:\\/\\//, '') === activeSite ? 'true' : 'false';": (
                "button.dataset.active = "
                "getSiteLabel(site) === activeSite || getSiteShortName(site) === activeSite "
                "? 'true' : 'false';"
            ),
            "button.style.display = !query || site.toLowerCase().includes(query) ? 'flex' : 'none';": (
                "const searchTarget = (site + ' ' + getSiteLabel(site)).toLowerCase();\n"
                "        button.style.display = !query || searchTarget.includes(query) ? 'flex' : 'none';"
            ),
            'el.style.display = !q || el.dataset.site.toLowerCase().includes(q) ? "flex" : "none";': (
                'const searchTarget = ((el.dataset.site || "") + " " + getSiteLabel(el.dataset.site || "")).toLowerCase();\n'
                '                el.style.display = !q || searchTarget.includes(q) ? "flex" : "none";'
            ),
        }

        for old, new in literal_replacements.items():
            if old in html_text:
                html_text = html_text.replace(old, new, 1)

        return html_text

    def _extract_payload_from_file(self, path: Path) -> dict[str, Any]:
        html_text = path.read_text(encoding="utf-8")
        payload_start, payload_end = self._locate_payload_span(html_text)
        json_start = payload_start + len(self.PAYLOAD_MARKER)
        json_end = payload_end - 1
        return json.loads(html_text[json_start:json_end])

    def _locate_payload_span(self, html_text: str) -> tuple[int, int]:
        marker_index = html_text.find(self.PAYLOAD_MARKER)
        if marker_index == -1:
            raise ValueError("EXPORT_PAYLOAD marker was not found.")

        json_start = marker_index + len(self.PAYLOAD_MARKER)
        if json_start >= len(html_text) or html_text[json_start] != "{":
            raise ValueError("EXPORT_PAYLOAD JSON start was not found.")

        depth = 0
        in_string = False
        escaped = False
        for index in range(json_start, len(html_text)):
            char = html_text[index]
            if in_string:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == '"':
                    in_string = False
                continue

            if char == '"':
                in_string = True
            elif char == "{":
                depth += 1
            elif char == "}":
                depth -= 1
                if depth == 0:
                    if index + 1 >= len(html_text) or html_text[index + 1] != ";":
                        raise ValueError("EXPORT_PAYLOAD JSON terminator was not found.")
                    return marker_index, index + 2

        raise ValueError("EXPORT_PAYLOAD JSON end was not found.")

    def _build_helper_script(self) -> str:
        return """
    const SITE_META_MAP = EXPORT_PAYLOAD.siteMeta || {};
    const MERGED_META = EXPORT_PAYLOAD.mergedMeta || null;
    function getSiteShortName(site) {
      return String(site || "").replace(/^https?:\\/\\//, "");
    }
    function getSiteLabel(site) {
      const meta = SITE_META_MAP[site] || {};
      return meta.displayLabel || getSiteShortName(site);
    }
    function isMergedReport() {
      return Boolean(MERGED_META && MERGED_META.isMerged);
    }
"""

    def _build_merged_patch_script(
        self,
        merged_payload: dict[str, Any],
        selected_files: dict[str, "SearchAdvisorReportMerger.ReportFile"],
        template_supports_contract: bool,
    ) -> str:
        site_count = len(merged_payload["allSites"])
        naver_ids = list(selected_files.keys())
        source_names = [report_file.path.name for report_file in selected_files.values()]
        patch_data = {
            "title": f"SearchAdvisor Merged Report - {site_count} sites",
            "snapshotTitle": "SearchAdvisor Merged Report",
            "snapshotLines": [
                f"Saved at: {self._format_saved_at(merged_payload['savedAt'])}",
                f"Merged accounts: {len(naver_ids)} / sites: {site_count}",
                f"Sources: {', '.join(source_names)}",
            ],
            "accountBadge": f"MERGED {len(naver_ids)} IDs",
            "accountTitle": ", ".join(naver_ids),
            "siteStatus": f"{site_count} sites loaded",
            "siteSummary": f"All {site_count} sites sorted by clicks",
            "currentSite": merged_payload.get("curSite") or "",
        }
        patch_json = json.dumps(patch_data, ensure_ascii=False, separators=(",", ":"))

        if template_supports_contract:
            return f"""
    const MERGED_REPORT_DECORATION = {patch_json};
    window.__SEARCHADVISOR_REPORT_DECORATION__ = MERGED_REPORT_DECORATION;
    function applyMergedReportDecorationViaContract() {{
      if (typeof window.__SEARCHADVISOR_APPLY_REPORT_DECORATIONS__ === "function") {{
        window.__SEARCHADVISOR_APPLY_REPORT_DECORATIONS__(MERGED_REPORT_DECORATION);
      }}
    }}
    if (document.readyState === "loading") {{
      document.addEventListener("DOMContentLoaded", applyMergedReportDecorationViaContract, {{ once: true }});
    }}
    setTimeout(applyMergedReportDecorationViaContract, 0);
"""

        return f"""
    const MERGED_PATCH = {patch_json};
    function applyMergedSnapshotDecorations() {{
      if (!isMergedReport()) return;
      document.title = MERGED_PATCH.title;

      const snapshotTitleEl = document.querySelector(".snapshot-meta-title");
      if (snapshotTitleEl) snapshotTitleEl.textContent = MERGED_PATCH.snapshotTitle;

      const snapshotCopyEl = document.querySelector(".snapshot-meta-copy");
      if (snapshotCopyEl) {{
        snapshotCopyEl.replaceChildren();
        MERGED_PATCH.snapshotLines.forEach(function (line, index) {{
          if (index > 0) snapshotCopyEl.appendChild(document.createElement("br"));
          snapshotCopyEl.appendChild(document.createTextNode(line));
        }});
      }}

      const accountBadgeEl = document.getElementById("sadv-account-badge");
      if (accountBadgeEl) {{
        accountBadgeEl.textContent = MERGED_PATCH.accountBadge;
        accountBadgeEl.title = MERGED_PATCH.accountTitle;
      }}

      const siteLabelEl = document.querySelector("#sadv-site-label span");
      if (siteLabelEl) siteLabelEl.textContent = MERGED_PATCH.siteStatus;

      const comboLabelEl = document.getElementById("sadv-combo-label");
      if (comboLabelEl && MERGED_PATCH.currentSite) {{
        comboLabelEl.textContent = getSiteLabel(MERGED_PATCH.currentSite);
      }}

      const statusTextEl = document.querySelector('[data-sadvx="status-text"] span');
      if (statusTextEl) statusTextEl.textContent = MERGED_PATCH.siteStatus;

      const currentSiteEl = document.querySelector('[data-sadvx="current-site"]');
      if (currentSiteEl) {{
        currentSiteEl.textContent = MERGED_PATCH.currentSite
          ? getSiteLabel(MERGED_PATCH.currentSite)
          : "Select site";
      }}

      const siteSummaryEl = document.querySelector('[data-sadvx="site-summary"]');
      if (siteSummaryEl) siteSummaryEl.textContent = MERGED_PATCH.siteSummary;

      document.querySelectorAll("[data-sadvx-site]").forEach(function (button) {{
        const site = button.getAttribute("data-sadvx-site") || "";
        const labelWrap = button.children[1];
        const titleEl = labelWrap ? labelWrap.firstElementChild : null;
        if (titleEl) titleEl.textContent = getSiteLabel(site);
        button.dataset.active = site === MERGED_PATCH.currentSite ? "true" : "false";
      }});
    }}
    if (document.readyState === "loading") {{
      document.addEventListener("DOMContentLoaded", applyMergedSnapshotDecorations, {{ once: true }});
    }}
    setTimeout(applyMergedSnapshotDecorations, 0);
"""

    @staticmethod
    def _site_short_name(site: str) -> str:
        return re.sub(r"^https?://", "", site)

    @staticmethod
    def _date_to_key(target_date: date) -> str:
        return target_date.strftime("%Y%m%d")

    @staticmethod
    def _format_saved_at(saved_at: str) -> str:
        dt = datetime.fromisoformat(saved_at)
        return dt.strftime("%Y.%m.%d %H:%M:%S")

    @staticmethod
    def _is_preferred_report(
        candidate: "SearchAdvisorReportMerger.ReportFile",
        current: "SearchAdvisorReportMerger.ReportFile",
    ) -> bool:
        return (candidate.sort_key, candidate.naver_id) > (current.sort_key, current.naver_id)

    def _cleanup_original_html_files(
        self,
        output_path: Path,
        selected_files: dict[str, "SearchAdvisorReportMerger.ReportFile"],
    ) -> None:
        preserved_paths = {output_path, *(report_file.path for report_file in selected_files.values())}
        for path in self.root_dir.glob("searchadvisor-*.html"):
            if path in preserved_paths:
                continue
            if path.name.startswith("searchadvisor-MERGED-"):
                continue
            path.unlink()

    def _cleanup_expired_searchadvisor_files(
        self,
        base_date: date,
        retention_days: int,
    ) -> None:
        cutoff_date = base_date - timedelta(days=retention_days)
        preserved_report_paths = {
            report_file.path
            for report_file in self.select_latest_files_by_id().values()
        }
        for path in self.root_dir.glob("searchadvisor-*.html"):
            file_date = self._extract_searchadvisor_file_date(path.name)
            if file_date is None:
                continue
            if path in preserved_report_paths:
                continue
            if file_date <= cutoff_date:
                path.unlink()

    def select_latest_files_by_id(self) -> dict[str, "SearchAdvisorReportMerger.ReportFile"]:
        latest_any_by_id: dict[str, "SearchAdvisorReportMerger.ReportFile"] = {}
        for report_file in self.scan_report_files():
            existing_any = latest_any_by_id.get(report_file.naver_id)
            if existing_any is None or report_file.sort_key > existing_any.sort_key:
                latest_any_by_id[report_file.naver_id] = report_file
        return dict(sorted(latest_any_by_id.items()))

    def _extract_searchadvisor_file_date(self, file_name: str) -> date | None:
        merged_match = self.MERGED_FILE_PATTERN.match(file_name)
        if merged_match:
            return datetime.strptime(merged_match.group("date"), "%Y%m%d").date()

        report_match = self.FILE_PATTERN.match(file_name)
        if report_match:
            return datetime.strptime(report_match.group("date"), "%Y%m%d").date()

        return None


if __name__ == "__main__":
    merger = SearchAdvisorReportMerger(r"C:\루틴팩토리 종합 자동 색인 프로그램\temp")
    output_path = merger.generate_merged_html()
    print(output_path or "None")
