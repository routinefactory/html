# SearchAdvisor Diagnosis Meta Tab Test

- Bookmarklet: `searchadvisor/_tmp/diagnosis-meta-tab/bookmarklet.txt`
- Loader: `searchadvisor/_tmp/diagnosis-meta-tab/loader.js`
- Runtime: `searchadvisor/_tmp/diagnosis-meta-tab/runtime.20260313-diagnosis-meta-tab.js`

This path is isolated for temporary verification of the diagnosis meta tab and does not change `searchadvisor/latest.json`.

See `searchadvisor/README.md` for the shared runtime rules, deployment split, and the diagnosis meta date-window rule.

## Local Docs

All local planning, architecture, merge, and verification documents now live under:

- `searchadvisor/_tmp/diagnosis-meta-tab/docs/`

This `docs/` folder is intentionally local-only and git-ignored.

If an AI session resumes work in this folder, read these in order:

1. `searchadvisor/_tmp/diagnosis-meta-tab/docs/AI-CONTROL-CENTER.20260314.md`
2. `searchadvisor/_tmp/diagnosis-meta-tab/docs/ARCHITECTURE.20260314-cache-bootstrap.md`
3. `searchadvisor/_tmp/diagnosis-meta-tab/docs/ARCHITECTURE.20260314-html-snapshot-contract.md`
4. `searchadvisor/_tmp/diagnosis-meta-tab/docs/searchadvisor_merge_hook_design.md`
5. `searchadvisor/_tmp/diagnosis-meta-tab/docs/WORKING-GUIDE.20260314.md`

Other local references:

- `searchadvisor/_tmp/diagnosis-meta-tab/docs/CHECKPOINT.20260313-r36.md`
- `searchadvisor/_tmp/diagnosis-meta-tab/docs/console-checks-r60-payload-contract.txt`

Important direct-edit rule for this runtime:

- keep `Ho(...)` patch anchors ASCII-only
- do not insert raw Korean text into patch target strings
- use `\uXXXX` escapes for Korean labels inside replacement strings
