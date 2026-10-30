// Easemap public demo: always open in sample-data mode (nothing is saved).
(function () {
  try {
    if (!/[?&]demo=/.test(location.search)) {
      var q = location.search ? location.search + '&demo=1' : '?demo=1';
      location.replace(location.pathname + q + location.hash);
    }
  } catch (e) { /* ignore */ }
})();
