var themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("change", function() {
  var themeName = this.value;
  console.log("name: " + themeName);
  document.body.className = "";
  document.body.classList.add(themeName);
});

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
