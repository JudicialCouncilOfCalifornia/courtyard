// Close an open header-base submenu on Escape and return focus to its trigger.
document.addEventListener("keydown", function(event) {
  if (event.key !== "Escape") {
    return;
  }

  var openSubmenus = Array.prototype.slice.call(
    document.querySelectorAll(".jcc-header-base .usa-nav__submenu:not([hidden])")
  );

  if (!openSubmenus.length) {
    return;
  }

  var activeElement = document.activeElement;
  var activeSubmenu = openSubmenus.find(function(submenu) {
    return submenu.contains(activeElement);
  });
  var submenu = activeSubmenu || openSubmenus[0];
  var submenuId = submenu.getAttribute("id");

  if (!submenuId) {
    return;
  }

  var triggerButton = document.querySelector(
    '.jcc-header-base [aria-controls="' + submenuId + '"]'
  );

  if (!triggerButton || triggerButton.getAttribute("aria-expanded") !== "true") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  // Use the existing accordion toggle handler to avoid state mismatches.
  triggerButton.click();
  triggerButton.focus();
});
