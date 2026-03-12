const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtimePath = path.join(__dirname, "runtime.20260312-48.js");
const runtimeSource = fs.readFileSync(runtimePath, "utf8");

test("runtime exposes merged payload hook constants", () => {
  assert.match(
    runtimeSource,
    /const SITE_META_MAP = EXPORT_PAYLOAD\.siteMeta \|\| \{\};/,
  );
  assert.match(
    runtimeSource,
    /const MERGED_META = EXPORT_PAYLOAD\.mergedMeta \|\| null;/,
  );
});

test("runtime exposes merged helper functions", () => {
  assert.match(runtimeSource, /function getSiteShortName\(a\)/);
  assert.match(runtimeSource, /function getSiteLabel\(a\)/);
  assert.match(runtimeSource, /function isMergedReport\(\)/);
});

test("runtime shell labels use merged-aware site labeling", () => {
  assert.match(runtimeSource, /function D0\(a\)\{return getSiteLabel\(a\)\}/);
  assert.match(
    runtimeSource,
    /children:getSiteLabel\(a\.curSite\)/,
  );
  assert.match(
    runtimeSource,
    /children:getSiteLabel\(v\)/,
  );
});
