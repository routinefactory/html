(function () {
  var base = "https://raw.githubusercontent.com/routinefactory/html/main/searchadvisor/_tmp/diagnosis-meta-tab";
  var cacheBust = "ts=" + Date.now();
  var manifestUrl = base + "/latest.json?" + cacheBust;
  var PANEL_ID = "sadv-p";

  function fail(err) {
    var msg = err && err.message ? err.message : String(err);
    alert("SearchAdvisor loader error\n" + msg);
  }

  function reviveExistingPanel() {
    var panel = document.getElementById(PANEL_ID);
    if (!panel) return false;
    panel.style.display = "";
    panel.style.visibility = "";
    panel.style.opacity = "";
    panel.style.pointerEvents = "";
    panel.style.transform = "";
    return true;
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
      if (
        window.__SEARCHADVISOR_RUNTIME_VERSION__ === (manifest.version || "unknown") &&
        reviveExistingPanel()
      ) {
        return null;
      }
      window.__SEARCHADVISOR_RUNTIME_VERSION__ = manifest.version || "unknown";
      window.__SEARCHADVISOR_RUNTIME_LOADED_AT__ = Date.now();
      var version = manifest.version ? "v=" + encodeURIComponent(manifest.version) + "&" : "";
      return fetch(base + "/" + manifest.runtime + "?" + version + cacheBust, { cache: "no-store" });
    })
    .then(function (res) {
      if (res == null) return null;
      if (!res.ok) throw new Error("runtime fetch failed: " + res.status);
      return res.text();
    })
    .then(function (code) {
      if (code == null) return;
      (0, eval)(code);
    })
    .catch(fail);
})();
