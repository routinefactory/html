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
    /s=Ho\(s,`    setAllSitesLabel\(\);\s+const loading = document\.createElement\("div"\);`,`    setAllSitesLabel\(\);\s+const loading = document\.createElement\("div"\);`\)/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`    bdEl\.innerHTML = "";\s+bdEl\.appendChild\(loading\);`,`    bdEl\.innerHTML = "";\s+bdEl\.appendChild\(loading\);`\)/,
  );
});

test("all-sites diagnosis index block patch is still present", () => {
  assert.match(runtime, /const indexBlock = document\.createElement\("div"\);/);
});

test("runtime namespaces local cache keys by account identity", () => {
  assert.match(runtime, /function getCacheNamespace\(\) \{/);
  assert.match(runtime, /accountIdFromLabel\(accountLabel\)/);
  assert.match(runtime, /if \(encId\) parts\.push\(fileSafe\(String\(encId\)\.trim\(\)\)\);/);
  assert.match(runtime, /return "unknown";/);
  assert.match(
    runtime,
    /function getSiteListCacheKey\(\) \{\s+return SITE_LS_KEY \+ "_" \+ getCacheNamespace\(\);\s+\}/,
  );
  assert.match(
    runtime,
    /function getSiteDataCacheKey\(site\) \{\s+return DATA_LS_PREFIX \+ getCacheNamespace\(\) \+ "_" \+ btoa\(site\)\.replace\(\/=\/g, ""\);\s+\}/,
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
  assert.match(runtime, /const allCardColors = \[C\.green, C\.blue, C\.amber, C\.teal, C\.purple\];/);
  assert.match(runtime, /grid-template-columns:repeat\(3,minmax\(0,1fr\)\);/);
  assert.ok(runtime.includes('box-shadow:0 0 0 4px \\${col}12'));
  assert.ok(
    runtime.includes(
      'max-width:240px">\\${shortName}</span></div></div><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));',
    ),
  );
  assert.match(
    runtime,
    /const indexMini = sparkline\([\s\S]*?r\.diagnosisIndexedDates,\s*42,\s*col,/,
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
  assert.match(runtime, /window\.__SEARCHADVISOR_EXPORT_PAYLOAD__ = EXPORT_PAYLOAD;/);
  assert.match(runtime, /const SITE_META_MAP = EXPORT_PAYLOAD\.siteMeta \|\| \{\};/);
  assert.match(runtime, /const MERGED_META = EXPORT_PAYLOAD\.mergedMeta \|\| null;/);
  assert.match(runtime, /function getSiteLabel\(a\) \{/);
});

test("export path supports cache-first and force-refresh detail collection", () => {
  assert.match(runtime, /async function collectExportData\(onProgress, options\) \{/);
  assert.match(
    runtime,
    /const refreshMode = options && options\.refreshMode === "refresh" \? "refresh" : "cache-first";/,
  );
  assert.match(runtime, /return resolveExportSiteData\(site, \{ refreshMode \}\);/);
  assert.match(runtime, /const FIELD_FAILURE_RETRY_MS = 5 \* 60 \* 1000;/);
  assert.match(runtime, /function hasSuccessfulFieldSnapshot\(data, key\) \{/);
  assert.match(runtime, /function hasRecentFieldFailure\(data, key, cooldownMs = FIELD_FAILURE_RETRY_MS\) \{/);
  assert.match(runtime, /function shouldFetchField\(data, key, options\) \{/);
  assert.match(runtime, /function hasDetailSnapshot\(data\) \{/);
  assert.match(
    runtime,
    /return hasSuccessfulFieldSnapshot\(data, "crawl"\) && hasSuccessfulFieldSnapshot\(data, "backlink"\);/,
  );
  assert.match(runtime, /function persistSiteData\(site, data\) \{/);
  assert.match(runtime, /async function refreshExportSiteData\(site\) \{/);
  assert.match(runtime, /async function resolveExportSiteData\(site, options\) \{/);
  assert.match(runtime, /return fetchSiteData\(site, \{ force: true, retryIncomplete: true \}\);/);
  assert.match(runtime, /return fetchSiteData\(site, \{ retryIncomplete: true \}\);/);
  assert.match(
    runtime,
    /exportSnapshotData: function \(onProgress, options\) \{\s+return collectExportData\(onProgress, options\);\s+\},/,
  );
});

test("site detail fetch tracks endpoint-level success and retries only incomplete fields for export", () => {
  assert.match(runtime, /exposeFetchState: exposeRes\.ok \? "success" : "failure"/);
  assert.match(runtime, /const needCrawl = shouldFetchField\(baseData, "crawl", options\);/);
  assert.match(runtime, /const needBacklink = shouldFetchField\(baseData, "backlink", options\);/);
  assert.match(runtime, /needCrawl[\s\S]*?key: "crawl"/);
  assert.match(runtime, /needBacklink[\s\S]*?key: "backlink"/);
  assert.match(
    runtime,
    /next\.detailLoaded =\s+next\.crawlFetchState === "success" && next\.backlinkFetchState === "success";/,
  );
});

test("legacy runtime uses merge-aware labels in site detail selection", () => {
  assert.ok(runtime.includes('labelEl.innerHTML = \\`<span>\\${getSiteLabel(site)}</span>\\`;'));
  assert.match(
    runtime,
    /\(\(\(el\.dataset\.site \|\| ""\) \+ " " \+ getSiteLabel\(el\.dataset\.site \|\| ""\)\)\.toLowerCase\(\)\.includes\(q\)\)/,
  );
});

test("saved tmp html uses shell-local merge-aware label matching", () => {
  assert.match(runtime, /function shellGetSiteShortName\(site\) \{/);
  assert.match(runtime, /function shellGetSiteLabel\(site\) \{/);
  assert.match(
    runtime,
    /button\.dataset\.active = shellGetSiteLabel\(site\) === activeSite \|\| shellGetSiteShortName\(site\) === activeSite \? 'true' : 'false';/,
  );
  assert.match(
    runtime,
    /const searchTarget = \(site \+ ' ' \+ shellGetSiteLabel\(site\)\)\.toLowerCase\(\);/,
  );
});

test("saved tmp html can fall back to direct site and tab activation", () => {
  assert.match(runtime, /function activateMode\(mode\) \{/);
  assert.match(runtime, /if \(afterMode !== mode && typeof switchMode === 'function'\) \{/);
  assert.match(runtime, /switchMode\(mode\);/);
  assert.match(runtime, /if \(site\) activateMode\('site'\);/);
  assert.match(runtime, /function activateTab\(tab\) \{/);
  assert.match(runtime, /if \(afterTab !== tab && typeof setTab === 'function'\) \{/);
  assert.match(runtime, /setTab\(tab\);/);
});

test("saved tmp html direct save forces refresh and merges snapshot meta fallback", () => {
  assert.match(
    runtime,
    /if\(s\.refreshMode==null&&!!window\.__SEARCHADVISOR_DIRECT_SAVE__\)s\.refreshMode="refresh";/,
  );
  assert.match(
    runtime,
    /const M=\{\.\.\.T,siteMeta:T\.siteMeta\|\|E\.siteMeta\|\|\{\},mergedMeta:T\.mergedMeta\|\|E\.mergedMeta\|\|null\};/,
  );
  assert.match(runtime, /setSnapshotMetaState\(M\);/);
  assert.match(runtime, /const O=a\.buildLegacySnapshotHtml\(S,M\);/);
  assert.match(
    runtime,
    /state:\{\.\.\.E,curMode:M\.curMode,curSite:M\.curSite,curTab:M\.curTab,allSites:M\.allSites,siteMeta:M\.siteMeta,mergedMeta:M\.mergedMeta\}/,
  );
});
