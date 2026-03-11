(function(){
  var base = "https://raw.githubusercontent.com/routinefactory/html/main/trip";
  var manifestUrl = base + "/latest.json";
  function fail(err){
    var message = err && err.message ? err.message : String(err);
    alert("Trip Partner Panel loader error\n" + message);
  }
  fetch(manifestUrl, { cache: "no-store" })
    .then(function(res){
      if(!res.ok) throw new Error("manifest fetch failed: " + res.status);
      return res.json();
    })
    .then(function(manifest){
      if(!manifest || !manifest.runtime) throw new Error("invalid manifest");
      window.__TRIP_PANEL_RUNTIME_VERSION__ = manifest.version || "unknown";
      return fetch(base + "/" + manifest.runtime + "?v=" + encodeURIComponent(manifest.version || Date.now()), { cache: "no-store" });
    })
    .then(function(res){
      if(!res.ok) throw new Error("runtime fetch failed: " + res.status);
      return res.text();
    })
    .then(function(code){
      (0, eval)(code);
    })
    .catch(fail);
})();
