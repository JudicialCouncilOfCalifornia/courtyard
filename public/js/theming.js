var themeSwitcher = document.querySelector(".jcc-themebar__switcher");

var theme = localStorage["theme"] || "srl";

if (themeSwitcher) {
  themeSwitcher.addEventListener("change", function() {
    var themeName = this.value;
    console.log("name: " + themeName);
    document.body.className = "";
    document.body.classList.add(themeName);
    document.getElementById("trial").disabled = true;

    if (themeName == "trial-court") {
      document.getElementById("trial").disabled = false;
      console.log("trial-court switch");
      localStorage["theme"] = "trial-court";
    }
    if (themeName == "srl") {
      document.getElementById("trial").disabled = true;
      console.log("srl switch");
      localStorage["theme"] = "srl";
    }
  });

  if (theme == "srl") {
    document.getElementById("trial").disabled = true;
    themeSwitcher.value = theme;
  }

  if (theme == "trial-court") {
    document.getElementById("trial").disabled = false;
    themeSwitcher.value = theme;
  }
}
