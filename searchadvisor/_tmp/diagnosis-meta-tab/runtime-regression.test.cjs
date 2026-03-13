const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtimePath = path.join(
  __dirname,
  "runtime.20260313-diagnosis-meta-tab.js",
);
const runtime = fs.readFileSync(runtimePath, "utf8");
const nSStart = runtime.indexOf("const nS=`");
const nSEnd = runtime.indexOf(",lS=", nSStart);
const hoStart = runtime.indexOf("function Ho(", nSEnd);
const oSStart = runtime.indexOf("function oS()", hoStart);
const transformedRuntime =
  nSStart >= 0 && nSEnd >= 0 && hoStart >= 0 && oSStart >= 0
    ? new Function(
        runtime.slice(nSStart, nSEnd) +
          ";\n" +
          runtime.slice(hoStart, oSStart) +
          "\nreturn iS(nS);",
      )()
    : "";

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
  assert.match(
    runtime,
    /function getUiStateCacheKey\(\) \{\s+return UI_STATE_LS_KEY \+ "_" \+ getCacheNamespace\(\);\s+\}/,
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

test("top-level all-sites renderer is overridden with diagnosis meta cards", () => {
  assert.match(
    runtime,
    /renderAllSites = async function renderAllSitesPatched\(\) \{/,
  );
  assert.match(
    runtime,
    /renderAllSites = async function renderAllSitesPatched\(\) \{[\s\S]*?fetchDiagnosisMeta\(site, siteDataBySite\[site\] \|\| null\)[\s\S]*?const allCardColors = \[C\.green, C\.blue, C\.amber, C\.teal, C\.purple\];[\s\S]*?const indexMini = sparkline\([\s\S]*?r\.diagnosisIndexedDates,\s*42,\s*col,/,
  );
  assert.doesNotMatch(
    runtime,
    /renderAllSites = async function renderAllSitesPatched\(\) \{[\s\S]*?주간추세/,
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

test("loader tolerates normalizeSiteData declaration drift", () => {
  assert.match(runtime, /function jS\(a,s,f\)\{/);
  assert.match(runtime, /function qS\(a,s,f,v,p\)\{/);
  assert.match(runtime, /function \$S\(a,s\)\{/);
  assert.match(runtime, /function eA\(a,s,f,v,p,S\)\{/);
  assert.match(runtime, /function patchLegacyNormalizeSiteData\(a\)\{/);
  assert.match(runtime, /const normalizeSiteData = \(data\) => \{/);
  assert.match(runtime, /const normalizeSiteData=data=>\{/);
  assert.match(runtime, /throw new Error\(`Legacy patch point not found: \$\{f\} declaration`\)/);
  assert.match(runtime, /throw new Error\(`Legacy patch point not found: \$\{p\} start`\)/);
  assert.match(runtime, /throw new Error\(`Legacy patch point not found: \$\{p\} end`\)/);
  assert.match(runtime, /s=patchLegacyNormalizeSiteData\(s\)/);
});

test("runtime does not keep identity result patch anchors", () => {
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`        const result = \{\s+expose,\s+crawl: null,\s+backlink: null,\s+detailLoaded: false,\s+\};`,`        const result = \{\s+expose,\s+crawl: null,\s+backlink: null,\s+detailLoaded: false,\s+\};`\)/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`          res\.status === "fulfilled"[\s\S]*?normalizeSiteData\(res\.value\)[\s\S]*?detailLoaded: false \};`,`          res\.status === "fulfilled"[\s\S]*?normalizeSiteData\(res\.value\)[\s\S]*?detailLoaded: false \};`\)/,
  );
});

test("loader patches fetchSiteData, tabs, renderTab, and loadSiteView via structural helpers", () => {
  assert.match(runtime, /function patchLegacyFetchSiteData\(a\)\{/);
  assert.match(runtime, /function patchLegacyTabs\(a\)\{/);
  assert.match(runtime, /function patchLegacyRenderTab\(a\)\{/);
  assert.match(runtime, /function patchLegacyLoadSiteView\(a\)\{/);
  assert.match(runtime, /eA\(a,\["  async function fetchSiteData\(site\) \{"/);
  assert.match(runtime, /eA\(a,\["  const TABS = \[","  let TABS = \[","  var TABS = \["\],s,"\[","\]","TABS"\)/);
  assert.match(runtime, /eA\(a,\["  function renderTab\(R\) \{"/);
  assert.match(runtime, /eA\(a,\["  async function loadSiteView\(site\) \{"/);
  assert.match(runtime, /function patchLegacyBuildRenderers\(a\)\{/);
  assert.match(
    runtime,
    /s=patchLegacyRenderTab\(s\),s=patchLegacyNormalizeSiteData\(s\),s=patchLegacyFetchSiteData\(s\),s=patchLegacyTabs\(s\),s=patchLegacyLoadSiteView\(s\),s=patchLegacyBuildRenderers\(s\),s=Ho\(s,`    bdEl\.innerHTML =/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`  async function fetchSiteData\(site\) \{/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`  const TABS = \[/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`  function buildRenderers\(expose, crawlData, backlinkData\) \{/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`      insight: function \(\) \{/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`    const R = buildRenderers\(d\.expose, d\.crawl, d\.backlink\);/,
  );
  assert.doesNotMatch(
    runtime,
    /s=Ho\(s,`    if \(requestId !== siteViewReqId \|\| site !== curSite\) return;`/,
  );
});

test("loader transform executes successfully against embedded legacy source", () => {
  assert.notEqual(nSStart, -1);
  assert.notEqual(nSEnd, -1);
  assert.notEqual(hoStart, -1);
  assert.notEqual(oSStart, -1);
  assert.match(
    transformedRuntime,
    /function buildRenderers\(expose, crawlData, backlinkData, diagnosisMeta, diagnosisMetaStatus, diagnosisMetaRange\) \{/,
  );
  assert.match(transformedRuntime, /diagnosis: function \(\) \{/);
  assert.doesNotThrow(() => new Function(transformedRuntime));
});

test("transformed runtime preserves all-sites diagnosis cards in executed code", () => {
  assert.match(
    transformedRuntime,
    /fetchDiagnosisMeta\(site, siteDataBySite\[site\] \|\| null\)/,
  );
  assert.match(
    transformedRuntime,
    /const allCardColors = \[C\.green, C\.blue, C\.amber, C\.teal, C\.purple\];/,
  );
  assert.match(
    transformedRuntime,
    /const indexMini = sparkline\([\s\S]*?r\.diagnosisIndexedDates,\s*42,\s*col,/,
  );
  assert.match(
    transformedRuntime,
    /metricGrid\.style\.gridTemplateColumns = "repeat\(3,minmax\(0,1fr\)\)";/,
  );
});

test("transformed runtime passes diagnosis meta into live site renderers", () => {
  assert.match(
    transformedRuntime,
    /const R = buildRenderers\(d\.expose, d\.crawl, d\.backlink, d\.diagnosisMeta, d\.diagnosisMetaStatus, d\.diagnosisMetaRange\);/,
  );
  assert.match(
    transformedRuntime,
    /if \(requestId !== siteViewReqId \|\| site !== curSite \|\| curMode !== "site"\) return;/,
  );
});

test("saved tmp html exposes merge-aware export hooks", () => {
  assert.match(runtime, /window\.__SEARCHADVISOR_EXPORT_PAYLOAD__ = EXPORT_PAYLOAD;/);
  assert.match(runtime, /const SITE_META_MAP = EXPORT_PAYLOAD\.siteMeta \|\| \{\};/);
  assert.match(runtime, /const MERGED_META = EXPORT_PAYLOAD\.mergedMeta \|\| null;/);
  assert.match(runtime, /function getSiteLabel\(a\) \{/);
  assert.match(runtime, /window\.__SEARCHADVISOR_APPLY_REPORT_DECORATIONS__ = applySnapshotReportDecorations;/);
  assert.match(runtime, /window\.__SEARCHADVISOR_PAYLOAD_CONTRACT__ = \{/);
  assert.match(runtime, /version: "20260314-payload-contract-v1"/);
});

test("saved tmp html bootstrap carries its own snapshot meta helpers", () => {
  assert.match(runtime, /var snapshotShellMetaState = \{/);
  assert.match(runtime, /siteMeta: SITE_META_MAP,/);
  assert.match(runtime, /mergedMeta: MERGED_META,/);
  assert.match(runtime, /function setSnapshotMetaState\(state\) \{/);
  assert.match(runtime, /function getSiteMetaMap\(\) \{/);
  assert.match(runtime, /function getMergedMetaState\(\) \{/);
  assert.match(runtime, /return snapshotShellMetaState \? snapshotShellMetaState\.mergedMeta : MERGED_META;/);
  assert.match(runtime, /function buildDefaultReportDecoration\(\) \{/);
  assert.match(runtime, /function applySnapshotReportDecorations\(decoration\) \{/);
  assert.match(runtime, /const FIELD_FAILURE_RETRY_MS = 5 \* 60 \* 1000;/);
  assert.match(runtime, /function hasSuccessfulDiagnosisMetaSnapshot\(data\) \{/);
  assert.match(runtime, /function hasRecentDiagnosisMetaFailure\(data, cooldownMs = FIELD_FAILURE_RETRY_MS\) \{/);
  assert.match(runtime, /function hasDiagnosisMetaSnapshot\(data\) \{/);
});

test("export path supports cache-first and force-refresh detail collection", () => {
  assert.match(runtime, /async function collectExportData\(onProgress, options\) \{/);
  assert.match(
    runtime,
    /const refreshMode = options && options\.refreshMode === "refresh" \? "refresh" : "cache-first";/,
  );
  assert.match(runtime, /async function ensureExportSiteList\(refreshMode\) \{/);
  assert.match(runtime, /const forceSiteListRefresh = refreshMode === "refresh";/);
  assert.match(runtime, /await loadSiteList\(forceSiteListRefresh\);/);
  assert.match(runtime, /await ensureExportSiteList\(refreshMode\);/);
  assert.match(runtime, /return resolveExportSiteData\(site, \{ refreshMode \}\);/);
  assert.match(runtime, /const FIELD_FAILURE_RETRY_MS = 5 \* 60 \* 1000;/);
  assert.match(runtime, /function hasSuccessfulFieldSnapshot\(data, key\) \{/);
  assert.match(runtime, /function hasRecentFieldFailure\(data, key, cooldownMs = FIELD_FAILURE_RETRY_MS\) \{/);
  assert.match(runtime, /function shouldFetchField\(data, key, options\) \{/);
  assert.match(runtime, /function hasSuccessfulDiagnosisMetaSnapshot\(data\) \{/);
  assert.match(
    runtime,
    /function hasRecentDiagnosisMetaFailure\(\s*data,\s*cooldownMs = FIELD_FAILURE_RETRY_MS,\s*\) \{/,
  );
  assert.match(runtime, /function shouldFetchDiagnosisMeta\(data, options\) \{/);
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
  assert.match(runtime, /const FIELD_SUCCESS_TTL_MS = DATA_TTL;/);
  assert.match(runtime, /function getFieldSnapshotFetchedAt\(data, key\) \{/);
  assert.match(runtime, /function hasFreshFieldSnapshot\(data, key, ttlMs = FIELD_SUCCESS_TTL_MS\) \{/);
  assert.match(runtime, /function hasLegacySuccessfulFieldSnapshot\(data, key\) \{/);
  assert.match(runtime, /exposeFetchState: exposeRes\.ok \? "success" : "failure"/);
  assert.match(runtime, /if \(key === "expose"\) return data\.expose != null;/);
  assert.match(runtime, /if \(\(key === "crawl" \|\| key === "backlink"\) && data\.detailLoaded === true\) \{/);
  assert.match(runtime, /return data\[key\] != null;/);
  assert.match(runtime, /hasFreshFieldSnapshot\(data, key\)/);
  assert.match(runtime, /const needCrawl = shouldFetchField\(baseData, "crawl", options\);/);
  assert.match(runtime, /const needBacklink = shouldFetchField\(baseData, "backlink", options\);/);
  assert.match(runtime, /needCrawl[\s\S]*?key: "crawl"/);
  assert.match(runtime, /needBacklink[\s\S]*?key: "backlink"/);
  assert.match(
    runtime,
    /next\.detailLoaded =\s+next\.crawlFetchState === "success" && next\.backlinkFetchState === "success";/,
  );
});

test("diagnosis meta follows the same cache-aware retry policy during export", () => {
  assert.match(
    runtime,
    /function hasDiagnosisMetaSnapshot\(data\) \{\s+return hasSuccessfulDiagnosisMetaSnapshot\(data\) \|\| hasRecentDiagnosisMetaFailure\(data\);\s+\}/,
  );
  assert.match(runtime, /hasFreshFieldSnapshot\(data, "diagnosisMeta"\)/);
  assert.match(runtime, /if \(options && options\.force\) return true;/);
  assert.match(runtime, /if \(hasSuccessfulDiagnosisMetaSnapshot\(data\)\) return false;/);
  assert.match(runtime, /if \(options && options\.retryIncomplete\) return true;/);
  assert.match(runtime, /return !hasRecentDiagnosisMetaFailure\(data\);/);
  assert.match(runtime, /if \(!shouldFetchDiagnosisMeta\(baseData, options\)\) return baseData;/);
});

test("site picker does not reload the same site twice in a row", () => {
  assert.match(runtime, /const sameSite = curSite === site;/);
  assert.match(runtime, /if \(curMode === "site" && !sameSite\) loadSiteView\(site\);/);
});

test("site view clears stale renderer state and missing tabs render a safe placeholder", () => {
  assert.match(runtime, /window\.__sadvR = null;/);
  assert.match(
    runtime,
    /if \(!R \|\| typeof R\[curTab\] !== "function"\) \{/,
  );
  assert.match(runtime, /Tab data unavailable/);
  assert.match(runtime, /Loading site data\.\.\./);
  assert.match(runtime, /No site data available/);
  assert.match(
    runtime,
    /if \(requestId !== siteViewReqId \|\| site !== curSite \|\| curMode !== "site"\) return;/,
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
  assert.ok(
    runtime.includes(
      'return label || (site ? site.replace(/^https?:\\\\\\/\\\\\\//, "") : "site");',
    ),
  );
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

test("saved tmp html export scripts preserve escaped site regex literals", () => {
  assert.ok(
    runtime.includes(
      'return f || (a ? a.replace(/^https?:\\\\\\\\/\\\\\\\\//, "") : "사이트 선택");',
    ),
  );
});

test("saved tmp html direct save forces refresh and merges snapshot meta fallback", () => {
  assert.match(
    runtime,
    /if\(s\.refreshMode==null\)s\.refreshMode="refresh";/,
  );
  assert.match(
    runtime,
    /const M=\{\.\.\.T,siteMeta:T\.siteMeta\|\|E\.siteMeta\|\|\{\},mergedMeta:T\.mergedMeta\|\|E\.mergedMeta\|\|null\};/,
  );
  assert.match(runtime, /const O=a\.buildLegacySnapshotHtml\(S,M\);/);
  assert.doesNotMatch(runtime, /setSnapshotMetaState\(M\);/);
  assert.doesNotMatch(runtime, /fS\.renderToStaticMarkup\(Y\.jsx\(wS,/);
  assert.doesNotMatch(runtime, /U=U\.replace\('<div id="sadv-react-shell-root">/);
  assert.doesNotMatch(runtime, /U=U\.replace\('<div id="sadv-bd">',`<div id="sadv-react-shell-root">/);
  assert.doesNotMatch(runtime, /U=U\.replace\("<\/body>",`<script>\$\{gS\(SS\(\)\)\}<\\\/script><\/body>`\)/);
});

test("both visible and direct HTML save paths now use refresh semantics", () => {
  assert.match(
    runtime,
    /const payload = await collectExportData\([\s\S]*btn\.textContent = done \+ "\/" \+ total;[\s\S]*\{ refreshMode: "refresh" \}[\s\S]*\);/,
  );
  assert.match(
    runtime,
    /if\(s\.refreshMode==null\)s\.refreshMode="refresh";/,
  );
  assert.match(
    runtime,
    /\},\{refreshMode:s\.refreshMode==="refresh"\?"refresh":"cache-first"\}\);/,
  );
});

test("saved tmp html bootstrap initializes both site and all-sites request guards", () => {
  assert.match(runtime, /let siteViewReqId = 0;/);
  assert.match(runtime, /let allViewReqId = 0;/);
});

test("live runtime routes manual refresh through a shared full-refresh pipeline", () => {
  assert.match(runtime, /async function runFullRefreshPipeline\(options = \{\}\) \{/);
  assert.match(
    runtime,
    /await collectExportData\([\s\S]*\{ refreshMode: "refresh" \}/,
  );
  assert.match(
    runtime,
    /document[\s\S]*getElementById\("sadv-refresh-btn"\)[\s\S]*await runFullRefreshPipeline\(\{ trigger: "manual", button: btn \}\);/,
  );
});

test("live runtime bootstraps the same full-refresh pipeline when cache is expired", () => {
  assert.match(runtime, /function getSiteListCacheStamp\(\) \{/);
  assert.match(runtime, /function getSiteDataCacheStamp\(site\) \{/);
  assert.match(runtime, /function shouldBootstrapFullRefresh\(\) \{/);
  assert.match(
    runtime,
    /if \(shouldBootstrapFullRefresh\(\)\) \{[\s\S]*await runFullRefreshPipeline\(\{ trigger: "cache-expiry" \}\);[\s\S]*\}/,
  );
});

test("saved tmp html uses dedicated offline all-sites renderer", () => {
  assert.match(runtime, /function renderSnapshotAllSites\(\) \{/);
  assert.match(runtime, /\$\{renderSnapshotAllSites\.toString\(\)\}/);
  assert.doesNotMatch(runtime, /\$\{renderAllSites\.toString\(\)\}/);
  assert.match(
    runtime,
    /const exportPayload =[\s\S]*window\.__SEARCHADVISOR_EXPORT_PAYLOAD__[\s\S]*typeof EXPORT_PAYLOAD !== "undefined"[\s\S]*\? EXPORT_PAYLOAD[\s\S]*: null;/,
  );
  assert.match(
    runtime,
    /exportPayload && Array\.isArray\(exportPayload\.summaryRows\) && exportPayload\.summaryRows\.length/,
  );
  assert.match(runtime, /if \(mode === "all"\) \{[\s\S]*renderSnapshotAllSites\(\);/);
});

test("legacy normalize patch preserves field-level cache metadata", () => {
  assert.match(runtime, /if \("exposeFetchState" in data\) normalized\.exposeFetchState = data\.exposeFetchState \?\? null;/);
  assert.match(runtime, /if \("exposeFetchedAt" in data\) normalized\.exposeFetchedAt = data\.exposeFetchedAt \?\? null;/);
  assert.match(runtime, /if \("crawlFetchState" in data\) normalized\.crawlFetchState = data\.crawlFetchState \?\? null;/);
  assert.match(runtime, /if \("crawlFetchedAt" in data\) normalized\.crawlFetchedAt = data\.crawlFetchedAt \?\? null;/);
  assert.match(runtime, /if \("backlinkFetchState" in data\) normalized\.backlinkFetchState = data\.backlinkFetchState \?\? null;/);
  assert.match(runtime, /if \("backlinkFetchedAt" in data\) normalized\.backlinkFetchedAt = data\.backlinkFetchedAt \?\? null;/);
  assert.match(runtime, /if \("__cacheSavedAt" in data\) normalized\.__cacheSavedAt = data\.__cacheSavedAt \?\? null;/);
});

test("live runtime persists panel ui state for reopen", () => {
  assert.match(runtime, /const UI_STATE_LS_KEY = "sadv_ui_state_v1";/);
  assert.match(runtime, /function getCachedUiState\(\) \{/);
  assert.match(runtime, /function setCachedUiState\(\) \{/);
  assert.match(runtime, /mode: curMode,/);
  assert.match(runtime, /tab: curTab,/);
  assert.match(runtime, /site: curSite,/);
});

test("live bootstrap restores site context before eager all-sites preload", () => {
  assert.match(runtime, /const cachedUiState = getCachedUiState\(\);/);
  assert.match(runtime, /let bootMode = "all";/);
  assert.match(runtime, /let bootSite = null;/);
  assert.match(runtime, /if \(allSites\.includes\(cur\)\) \{\s+bootSite = cur;\s+bootMode = "site";\s+\}/);
  assert.match(runtime, /if \(cachedUiState\.site && allSites\.includes\(cachedUiState\.site\)\) bootSite = cachedUiState\.site;/);
  assert.match(runtime, /if \(bootMode === "site" && curSite\) \{\s+curMode = "site";[\s\S]*await loadSiteView\(curSite\);\s+\} else \{\s+setAllSitesLabel\(\);\s+await renderAllSites\(\);\s+\}/);
  assert.match(runtime, /setCachedUiState\(\);\s+__sadvMarkReady\(\);/);
});
