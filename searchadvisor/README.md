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

## Repeated Failure Modes

- `HTTP 200` does not mean the diagnosis request is valid. The payload can still return an internal failure code.
- `HTTP 200 / code 193` is more likely a request-window or request-context mismatch than a transport failure.
- If the diagnosis tab is empty, showing `HTTP`, `code`, and `period` makes debugging much faster.
- If a test runtime changes but the visible version string does not change, it becomes hard to know what build is actually loaded.

## Recommended Workflow

1. Implement in `_tmp`.
2. Bump the `_tmp` version string.
3. Run `node --check`.
4. Reload the page and rerun the test bookmarklet.
5. Verify the visible version chip.
6. Compare the request with live network traffic if behavior is still off.
7. Only then consider promoting the change to production.

## Related Files

- Production runtime: `searchadvisor/runtime.20260312-48.js`
- Diagnosis meta test runtime: `searchadvisor/_tmp/diagnosis-meta-tab/runtime.20260313-diagnosis-meta-tab.js`
- Diagnosis meta test note: `searchadvisor/_tmp/diagnosis-meta-tab/README.md`
