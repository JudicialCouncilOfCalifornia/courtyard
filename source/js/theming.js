var themeSwitcher = $(".jcc-themebar__switcher");

if (themeSwitcher.length > 0) {
  var theme = localStorage["theme"] || "srl";

  var toggle = function(selector, display) {
    $(selector).each(function(idx, element) {
      if (display) {
        element.style.display = display;
      } else {
        element.style.display = element.style.display == "none" ? "block" : "none";
      }
    });
  };

  if (themeSwitcher) {
    $(themeSwitcher).change(function() {
      var themeName = this.value;
      console.log("name: " + themeName);
      document.body.className = "";
      document.body.classList.add(themeName);
      document.getElementById("trial").disabled = true;

      if (themeName == "trial-court") {
        document.getElementById("trial").disabled = false;
        console.log("trial-court switch");
        toggle("sg-colors-trial", "block");
        toggle("sg-colors-srl", "none");
        localStorage["theme"] = "trial-court";
      }
      if (themeName == "srl") {
        document.getElementById("trial").disabled = true;
        console.log("srl switch");
        toggle("sg-colors-trial", "none");
        toggle("sg-colors-srl", "block");
        localStorage["theme"] = "srl";
      }
    });

    if (theme == "srl") {
      document.getElementById("trial").disabled = true;
      toggle("sg-colors-trial", "none");
      toggle("sg-colors-srl", "block");
      themeSwitcher.value = theme;
    }

    if (theme == "trial-court") {
      document.getElementById("trial").disabled = false;
      toggle("sg-colors-trial", "block");
      toggle("sg-colors-srl", "none");
      themeSwitcher.value = theme;
    }

    $(document).ready(function() {
      var current_scheme = $("div[class*='jcc-scheme-']")
        .first()
        .attr("class")
        .replace("jcc-scheme-", "");
      $(".jcc-themebar__scheme").each(function() {
        if ($(this).data("scheme") == current_scheme) {
          $(this).css("color", "white");
        }
      });
    });
    $(".jcc-themebar__scheme").on("click", function() {
      var scheme = $(this).data("scheme");
      $(this).css("color", "white");
      $(this)
        .siblings()
        .css("color", "#808080");
      $("div[class*='jcc-scheme-']").each(function() {
        var current_class = $(this).attr("class");
        $(this)
          .removeClass(current_class)
          .addClass("jcc-scheme-" + scheme);
      });
    });
  }
}
