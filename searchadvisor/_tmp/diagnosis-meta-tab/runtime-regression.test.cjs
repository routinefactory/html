const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtimePath = path.join(
  __dirname,
  "runtime.20260313-diagnosis-meta-tab.js",
);
const runtime = fs.readFileSync(runtimePath, "utf8");

test("site view render guard blocks stale responses after mode switch", () => {
  assert.match(
    runtime,
    /if \(requestId !== siteViewReqId \|\| site !== curSite \|\| curMode !== "site"\) return;/,
  );
});

test("runtime does not keep half-warm shortcuts that bypass normal render flow", () => {
  assert.doesNotMatch(runtime, /const warmData =/);
  assert.doesNotMatch(runtime, /const allWarm =/);
  assert.doesNotMatch(runtime, /if \(!allWarm\)/);
});

test("runtime does not keep identity Ho patches for all-sites loading anchors", () => {
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`    setAllSitesLabel\(\);\r?\n    const loading = document\.createElement\("div"\);`,`    setAllSitesLabel\(\);\r?\n    const loading = document\.createElement\("div"\);`\)/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`    bdEl\.innerHTML = "";\r?\n    bdEl\.appendChild\(loading\);`,`    bdEl\.innerHTML = "";\r?\n    bdEl\.appendChild\(loading\);`\)/,
  );
});

test("all-sites diagnosis index block patch is still present", () => {
  assert.match(runtime, /const indexBlock = document\.createElement\("div"\);/);
});

test("runtime namespaces local cache keys by account identity", () => {
  assert.ok(runtime.includes("function getCacheNamespace() {\\r"));
  assert.ok(runtime.includes("accountIdFromLabel(accountLabel);\\r"));
  assert.ok(runtime.includes('if (encId) parts.push(fileSafe(String(encId).trim()));\\r'));
  assert.ok(runtime.includes('return "unknown";\\r'));
  assert.ok(
    runtime.includes(
      'function getSiteListCacheKey() {\\r\n    return SITE_LS_KEY + "_" + getCacheNamespace();\\r\n  }',
    ),
  );
  assert.ok(
    runtime.includes(
      'function getSiteDataCacheKey(site) {\\r\n    return DATA_LS_PREFIX + getCacheNamespace() + "_" + btoa(site).replace(/=/g, "");\\r\n  }',
    ),
  );
});

test("runtime no longer reads or writes unscoped global cache keys", () => {
  assert.doesNotMatch(runtime, /lsGet\(SITE_LS_KEY\)/);
  assert.doesNotMatch(
    runtime,
    /lsGet\(DATA_LS_PREFIX \+ btoa\(site\)\.replace\(\/=\/g, ""\)\)/,
  );
  assert.doesNotMatch(
    runtime,
    /lsSet\(DATA_LS_PREFIX \+ btoa\(site\)\.replace\(\/=\/g, ""\),/,
  );
  assert.doesNotMatch(
    runtime,
    /localStorage\.removeItem\(DATA_LS_PREFIX \+ btoa\(site\)\.replace\(\/=\/g, ""\)\)/,
  );
});

test("all-sites cards use per-card colors and remove noisy trend badges", () => {
  assert.ok(
    runtime.includes(
      "const allCardColors = [C.green, C.blue, C.amber, C.teal, C.purple];",
    ),
  );
  assert.ok(
    runtime.includes("grid-template-columns:repeat(3,minmax(0,1fr));"),
  );
  assert.ok(
    runtime.includes(
      'box-shadow:0 0 0 4px \\${col}12',
    ),
  );
  assert.ok(
    runtime.includes(
      'max-width:240px">\\${shortName}</span></div></div><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));',
    ),
  );
  assert.match(
    runtime,
    /const indexMini = sparkline\([\s\S]*?r\.diagnosisIndexedDates,\r?\n\s*42,\r?\n\s*col,/,
  );
});

test("loader tolerates legacy card template drift and patches cards via DOM cleanup", () => {
  assert.match(
    runtime,
    /if\(s\.startsWith\('      card\.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"'\)\)return a;/,
  );
  assert.match(runtime, /const headerRow = card\.firstElementChild;/);
  assert.match(runtime, /if \(badgeEl\) badgeEl\.remove\(\);/);
  assert.match(runtime, /if \(headerRight\) headerRight\.remove\(\);/);
  assert.match(
    runtime,
    /metricGrid\.style\.gridTemplateColumns = "repeat\(3,minmax\(0,1fr\)\)";/,
  );
});

test("saved tmp html exposes merge-aware export hooks", () => {
  assert.ok(runtime.includes("window.__SEARCHADVISOR_EXPORT_PAYLOAD__ = EXPORT_PAYLOAD;"));
  assert.ok(runtime.includes("const SITE_META_MAP = EXPORT_PAYLOAD.siteMeta || {};"));
  assert.ok(runtime.includes("const MERGED_META = EXPORT_PAYLOAD.mergedMeta || null;"));
  assert.ok(runtime.includes("function getSiteLabel(a) {\\r"));
});

test("saved tmp html uses merge-aware shell state and label matching", () => {
  assert.ok(runtime.includes("setSnapshotMetaState(T);"));
  assert.ok(runtime.includes("siteMeta:T.siteMeta||{},mergedMeta:T.mergedMeta||null"));
  assert.ok(
    runtime.includes(
      "button.dataset.active = getSiteLabel(site) === activeSite || getSiteShortName(site) === activeSite ? 'true' : 'false';",
    ),
  );
  assert.ok(runtime.includes("const searchTarget = (site + ' ' + getSiteLabel(site)).toLowerCase();"));
});
