// Close the open submenu when Escape is pressed and return focus to its trigger button.
document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') return;

  const openSubmenu = document.querySelector('.usa-nav__submenu:not([hidden])');
  if (!openSubmenu) return;

  // Find the accordion button that controls this submenu.
  const triggerId = openSubmenu.id;
  const triggerButton = triggerId
    ? document.querySelector('[aria-controls="' + triggerId + '"]')
    : null;

  // Let USWDS close the submenu through its own accordion logic, then restore focus.
  if (triggerButton && triggerButton.getAttribute('aria-expanded') === 'true') {
    triggerButton.click();
    triggerButton.focus();
  }
});
