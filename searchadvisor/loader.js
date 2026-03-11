(function () {
  var base = "https://raw.githubusercontent.com/routinefactory/html/main/searchadvisor";
  var manifestUrl = base + "/latest.json";

  function fail(err) {
    var msg = err && err.message ? err.message : String(err);
    alert("SearchAdvisor loader error\n" + msg);
  }

  fetch(manifestUrl, { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("manifest fetch failed: " + res.status);
      return res.json();
    })
    .then(function (manifest) {
      if (!manifest || !manifest.runtime) {
        throw new Error("invalid manifest");
      }
      var version = manifest.version ? "?v=" + encodeURIComponent(manifest.version) : "";
      return fetch(base + "/" + manifest.runtime + version, { cache: "no-store" });
    })
    .then(function (res) {
      if (!res.ok) throw new Error("runtime fetch failed: " + res.status);
      return res.text();
    })
    .then(function (code) {
      (0, eval)(code);
    })
    .catch(fail);
})();
