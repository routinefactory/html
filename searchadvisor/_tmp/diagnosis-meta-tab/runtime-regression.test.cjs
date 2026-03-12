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

test("all-sites diagnosis index block patch is still present", () => {
  assert.match(runtime, /const indexBlock = document\.createElement\("div"\);/);
});
