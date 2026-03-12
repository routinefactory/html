# SearchAdvisor Diagnosis Meta Tab Test

- Bookmarklet: `searchadvisor/_tmp/diagnosis-meta-tab/bookmarklet.txt`
- Loader: `searchadvisor/_tmp/diagnosis-meta-tab/loader.js`
- Runtime: `searchadvisor/_tmp/diagnosis-meta-tab/runtime.20260313-diagnosis-meta-tab.js`

This path is isolated for temporary verification of the diagnosis meta tab and does not change `searchadvisor/latest.json`.

See `searchadvisor/README.md` for the shared runtime rules, deployment split, and the diagnosis meta date-window rule.

Important direct-edit rule for this runtime:

- keep `Ho(...)` patch anchors ASCII-only
- do not insert raw Korean text into patch target strings
- use `\uXXXX` escapes for Korean labels inside replacement strings
