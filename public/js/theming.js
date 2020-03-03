var themeSwitcher = document.querySelector(".theme-switcher");

function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document
    .getElementsByTagName("head")
    .item(0)
    .replaceChild(newlink, oldlink);
}

var theme = localStorage["theme"] || "srl";

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
  if (themeName == "trial-court-2") {
    console.log("trial-court-2 switch");
    colorReplace("#005ea2", "#000000");
    localStorage["theme"] = "trial-court-2";
  }
});

if (theme == "srl") {
  document.getElementById("trial").disabled = true;
  themeSwitcher.value = theme;
  console.log(theme);
}

if (theme == "trial-court") {
  document.getElementById("trial").disabled = false;
  themeSwitcher.value = theme;
  console.log(theme);
}

if (theme == "trial-court-2") {
  colorReplace("#005ea2", "#000000");
  document.getElementById("trial").disabled = false;
  themeSwitcher.value = theme;
  console.log(theme);
}

function colorReplace(findHexColor, replaceWith) {
  // Convert rgb color strings to hex
  // REF: https://stackoverflow.com/a/3627747/1938889
  function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  // Select and run a map function on every tag
  $("*").map(function(i, el) {
    // Get the computed styles of each tag
    var styles = window.getComputedStyle(el);

    // Go through each computed style and search for "color"
    Object.keys(styles).reduce(function(acc, k) {
      var name = styles[k];
      var value = styles.getPropertyValue(name);
      if (value !== null && name.indexOf("color") >= 0) {
        // Convert the rgb color to hex and compare with the target color
        if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
          // Replace the color on this found color attribute
          $(el).css(name, replaceWith);
        }
      }
    });
  });
}

// Call like this for each color attribute you want to replace

/*
(function() {
  // Theme switch
  var themeSwitcher = document.querySelector(".theme-switcher");
  if (themeSwitcher) {
    var themeName = this.value;
    initTheme(); // if user has already selected a specific theme -> apply it
    themeSwitcher.addEventListener("change", function(event) {
      resetTheme(); // update color theme
    });

    function initTheme() {
      var themeSelected =
        localStorage.getItem("themeSwitch") !== null &&
        localStorage.getItem("themeSwitch") === themeName;
      // update body data-theme attribute
      themeSelected ? document.body.classList.add(themeName);
        : document.body.className = '';
    }

    function resetTheme() {
      if (themeName !== "") {
        // dark theme has been selected
        document.body.setAttribute(themeName);
        localStorage.setItem("themeSwitch", themeName);
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("themeSwitch");
      }
    }
  }

  // Main Header component JS
  var mainHeader = document.getElementsByClassName("js-main-header")[0];
  if (mainHeader) {
    var trigger = mainHeader.getElementsByClassName("js-main-header__nav-trigger")[0],
      nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
    //detect click on nav trigger
    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      var ariaExpanded = !Util.hasClass(nav, "main-header__nav--is-visible");
      //show nav and update button aria value
      Util.toggleClass(nav, "main-header__nav--is-visible", ariaExpanded);
      trigger.setAttribute("aria-expanded", ariaExpanded);
      if (ariaExpanded) {
        //opening menu -> move focus to first element inside nav
        nav.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus();
      }
    });
  }

*/
