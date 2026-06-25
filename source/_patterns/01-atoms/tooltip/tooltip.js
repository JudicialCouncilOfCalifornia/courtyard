(function() {
  var tooltips = document.querySelectorAll(".tooltip");
  var closeDelay = 150;

  if (!tooltips.length) {
    return;
  }

  Array.prototype.forEach.call(tooltips, function(tooltip) {
    var trigger = tooltip.querySelector(".tooltip__trigger");
    var tooltipBody = tooltip.querySelector(".top");
    var closeTimeout;

    if (!trigger || !tooltipBody) {
      return;
    }

    function clearCloseTimeout() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
    }

    function openTooltip() {
      clearCloseTimeout();
      tooltip.classList.add("tooltip--open");
    }

    function closeTooltipIfInactive() {
      var activeElement = document.activeElement;
      var hasFocusWithin = activeElement && tooltip.contains(activeElement);
      var isHovered = tooltip.matches(":hover");

      if (hasFocusWithin || isHovered) {
        return;
      }

      tooltip.classList.remove("tooltip--open");
    }

    function scheduleClose() {
      clearCloseTimeout();
      closeTimeout = setTimeout(closeTooltipIfInactive, closeDelay);
    }

    trigger.addEventListener("mouseenter", openTooltip);
    trigger.addEventListener("mouseleave", scheduleClose);
    trigger.addEventListener("focus", openTooltip);
    trigger.addEventListener("blur", scheduleClose);

    tooltipBody.addEventListener("mouseenter", openTooltip);
    tooltipBody.addEventListener("mouseleave", scheduleClose);

    tooltip.addEventListener("focusin", openTooltip);
    tooltip.addEventListener("focusout", scheduleClose);

    tooltip.addEventListener("keydown", function(event) {
      if (event.key !== "Escape" && event.key !== "Esc") {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      clearCloseTimeout();
      tooltip.classList.remove("tooltip--open");
      trigger.blur();
    });
  });
})();
