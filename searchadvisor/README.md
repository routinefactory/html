# SearchAdvisor Runtime Notes

This folder stores deployed SearchAdvisor bookmarklet artifacts. It is not the source project. The important files here are the runtime loader, the active runtime pointer, versioned runtime bundles, and isolated `_tmp` test paths.

## Active Production Path

- Bookmarklet: `searchadvisor/bookmarklet.txt`
- Loader: `searchadvisor/loader.js`
- Active runtime pointer: `searchadvisor/latest.json`
- Current production runtime: `searchadvisor/runtime.20260312-48.js`

Production behavior changes only when `latest.json` is pointed at a different runtime file. Adding extra runtime files alone does not affect existing users.

## Isolated Test Path

- Test root: `searchadvisor/_tmp/diagnosis-meta-tab/`
- Test bookmarklet: `searchadvisor/_tmp/diagnosis-meta-tab/bookmarklet.txt`
- Test loader: `searchadvisor/_tmp/diagnosis-meta-tab/loader.js`
- Test pointer: `searchadvisor/_tmp/diagnosis-meta-tab/latest.json`

The `_tmp` path is intentionally isolated from production. Use it first for runtime surgery, UI experiments, and behavior verification. Do not change the production pointer until the `_tmp` path is verified.

## Working Rules

1. Do not confuse the production path with the `_tmp` path.
2. Put experimental changes into `_tmp` first.
3. If test runtime behavior changes, bump the version string in `_tmp/.../latest.json`.
4. Confirm the loaded build from the UI version chip, not by assumption.
5. After editing a runtime file, run at least `node --check` on that file.
6. Do not change the production `latest.json` casually. That file changes what existing users load.

## Runtime Patch Safety Rules

The versioned runtime bundles in this folder are not normal source files. They contain embedded legacy code strings and then patch those strings again with `Ho(...)`.

That means small text differences can break runtime patching:

- newline style differences such as `\r`, `\n`, or `\r\n`
- Windows codepage corruption when raw Korean text is inserted from a terminal edit path
- fragile patch anchors that depend on long UI strings instead of stable structural code

When editing a runtime bundle directly:

1. Use ASCII-only patch anchors whenever possible.
2. Do not use raw Korean text inside patch target strings.
3. For UI labels inside patched strings, prefer Unicode escapes such as `\uC0C9\uC778`.
4. Anchor patches to short structural lines like `card.appendChild(mini);`, not to long localized HTML.
5. If a patch needs Korean text, keep the anchor ASCII-only and put the Korean only in the replacement body.
6. If a `Legacy patch point not found` popup appears, compare the exact target string before changing behavior logic.

These rules exist specifically to prevent repeat failures like:

- raw Korean being rewritten to `??`
- a patch target matching on disk but failing in the browser
- cache confusion caused by runtime edits without a version bump

## Diagnosis Meta Tab Rules

`report/diagnosis/meta` does not follow the same assumptions as the wider `expose`, `crawl`, or `backlink` flows.

- Do not assume it uses a 90-day window.
- Do not assume it should inherit the full `expose` log range.
- Do not assume it should use "yesterday" as the end date.

Live page capture is the source of truth for this endpoint.

Observed rule from live traffic on 2026-03-13 01:18 KST:

- `startDate=20260201`
- `endDate=20260313`

That means the diagnosis meta request is using a KST-based window that includes today and covers the trailing 41 days.

When touching the diagnosis meta tab:

1. Match the live diagnosis page request window.
2. Do not copy the `crawl/backlink` date rule without verification.
3. Prefer real network capture over inference.

## All-Mode Meta Prefetch Rules

If the all-sites dashboard needs diagnosis meta data, do not turn the initial load into a burst of full-detail calls.

- `전체 현황` should still fetch `expose` first for every site.
- If index-count data is needed there, prefetch only `diagnosis/meta` with low concurrency.
- Treat `diagnosis/meta` as a separate cache layer from `crawl/backlink`.
- Reuse the prefetched diagnosis meta snapshot when the user later opens `사이트별` or the `메타` tab.
- Do not re-request `diagnosis/meta` for the same site in the same session unless the user refreshes or the cache expires.

Recommended behavior:

1. Batch `expose` first.
2. Fetch `diagnosis/meta` slowly, for example 2 sites at a time.
3. Show progress explicitly while the extra diagnosis pass is running.
4. Keep `crawl/backlink` as site-detail requests, not all-sites default requests.

## Repeated Failure Modes

- `HTTP 200` does not mean the diagnosis request is valid. The payload can still return an internal failure code.
- `HTTP 200 / code 193` is more likely a request-window or request-context mismatch than a transport failure.
- If the diagnosis tab is empty, showing `HTTP`, `code`, and `period` makes debugging much faster.
- If a test runtime changes but the visible version string does not change, it becomes hard to know what build is actually loaded.

## Recommended Workflow

1. Implement in `_tmp`.
2. Bump the `_tmp` version string.
3. Run `node --check`.
4. Review every new `Ho(...)` anchor for ASCII-only safety.
5. Reload the page and rerun the test bookmarklet.
6. Verify the visible version chip.
7. Compare the request with live network traffic if behavior is still off.
8. Only then consider promoting the change to production.

## Related Files

- Production runtime: `searchadvisor/runtime.20260312-48.js`
- Diagnosis meta test runtime: `searchadvisor/_tmp/diagnosis-meta-tab/runtime.20260313-diagnosis-meta-tab.js`
- Diagnosis meta test note: `searchadvisor/_tmp/diagnosis-meta-tab/README.md`
