(function () {
  var loaderUrl =
    "https://raw.githubusercontent.com/routinefactory/html/main/searchadvisor/loader.js";

  fetch(loaderUrl, { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("loader fetch failed: " + res.status);
      return res.text();
    })
    .then(function (code) {
      (0, eval)(code);
    })
    .catch(function (err) {
      var msg = err && err.message ? err.message : String(err);
      alert("SearchAdvisor compatibility loader error\n" + msg);
    });
})();
