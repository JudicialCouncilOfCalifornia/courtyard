const schemeSwitcher = document.getElementById("jcc-schemebar-schemes");

if (schemeSwitcher.options.length > 0) {
  const storage = window.localStorage;
  const scheme = storage.getItem("scheme") || "base";

  // Set to stored scheme
  schemeSwitcher.value = scheme;
  loadStylesheets(scheme);

  schemeSwitcher.addEventListener("change", function () {
    const newScheme = this.value;
    loadStylesheets(newScheme);
  });

  function loadStylesheets(newScheme) {
    storage.setItem("scheme", newScheme);

    // IDs of the stylesheet links
    const cssIds = ["sg-css", "pl-css"];

    cssIds.forEach(function (id) {
      // Get stylesheet & path
      const el = document.getElementById(id);
      const url = new URL(el.href);

      // Remove the file name portion
      const pathname = url.pathname.split("/");
      pathname.pop();

      // Add the new filename and load the stylesheet
      const prefix = id.startsWith("sg") ? "sg-" : "";
      const filename = prefix + newScheme + ".css";
      url.pathname = pathname.join("/") + "/" + filename;
      el.setAttribute("href", url.href);
    });
  }
}
