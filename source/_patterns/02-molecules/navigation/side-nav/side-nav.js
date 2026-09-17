/**
 * Opt-in disclosures for the complete side-navigation tree.
 * Works in Pattern Lab and on initial/AJAX renders in Drupal.
 */
(function () {
  "use strict";
  var nextId = 0;

  function attach(context) {
    context.querySelectorAll("[data-side-nav-collapsible] .jcc-sidenav__toggle").forEach(function (button) {
      var submenu = button.parentNode.nextElementSibling;
      if (button.hasAttribute("data-side-nav-initialized") || !submenu || !submenu.classList.contains("usa-sidenav__sublist")) {
        return;
      }

      if (!submenu.id) {
        do {
          nextId++;
        } while (document.getElementById("jcc-side-nav-subpages-" + nextId));
        submenu.id = "jcc-side-nav-subpages-" + nextId;
      }
      button.setAttribute("aria-controls", submenu.id);
      button.setAttribute("data-side-nav-initialized", "true");

      function setExpanded(expanded) {
        button.setAttribute("aria-expanded", expanded ? "true" : "false");
        submenu.hidden = !expanded;
      }

      setExpanded(button.getAttribute("data-in-active-trail") === "true");
      button.hidden = false;
      button.addEventListener("click", function () {
        setExpanded(button.getAttribute("aria-expanded") !== "true");
      });
    });
  }

  if (typeof Drupal !== "undefined") {
    Drupal.behaviors.courtyardSideNav = { attach: attach };
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { attach(document); });
  } else {
    attach(document);
  }
})();
