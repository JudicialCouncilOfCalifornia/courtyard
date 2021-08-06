// Elements.
const $offcanvas_trigger = $('[data-offcanvas^="trigger"]');
const $offcanvas_trigger_show = $('[data-offcanvas="trigger"]');
const $offcanvas_container = $('[data-offcanvas="container"]');
const $offcanvas_dialog = $('[data-offcanvas="dialog"]');
const $offcanvas_confirmation = $('[data-offcanvas="container"] .webform-confirmation');
const drupalWebForm = ".jcc-offcanvas__dialog-body .webform-ajax-form-wrapper";
const min_desktop_width = 800;

// Functions.
const offcanvasOpen = () => {
  $offcanvas_trigger_show.hide();
  $offcanvas_container.attr("open", "open");
  $offcanvas_dialog.attr("open", "open");
  $offcanvas_dialog.focus();
  if ($(window).width() < min_desktop_width && $offcanvas_dialog.attr("open")) {
    $("body").css("overflow", "hidden");
  }
};

const offcanvasDismiss = () => {
  $offcanvas_container.hide();
};

const offcanvasDismissPath = () => {
  return sessionStorage.offcanvas_dismissed_page == window.location.pathname;
};

const offcanvasConfirmed = () => {
  return $offcanvas_confirmation.length > 0;
};

const autoDesktopDialogHeight = () => {
  $('[data-offcanvas="dialog"]').css("height", $(window).height() - 100);
};

// Allow user to dismiss completely if confirmation is visible.
if (offcanvasConfirmed() == true) {
  if (offcanvasDismissPath() == true) {
    offcanvasDismiss();
  } else {
    window.scrollTo(0, document.body.scrollHeight);
    $offcanvas_dialog.removeAttr("style");
    offcanvasOpen();
  }
}

// Click.
$offcanvas_trigger.on("click", function (e) {
  e.preventDefault;
  // Toggle dialog visibility.
  if ($offcanvas_dialog.attr("open")) {
    // Close dialog.
    if (offcanvasConfirmed() && $(this).attr("data-offcanvas") == "trigger-close") {
      sessionStorage.offcanvas_dismissed_page = window.location.pathname;
      offcanvasDismiss();
    } else {
      $offcanvas_container.css("transition", "all .2s");
      $offcanvas_dialog.removeAttr("open");
      $offcanvas_container.removeAttr("open");
      $offcanvas_trigger_show.show();
      if ($(window).width() < min_desktop_width) {
        $("body").removeAttr("style");
      }
    }
    return false;
  } else {
    offcanvasOpen();
  }
});

// Auto adjust dialog height on larger screens.
$(document).ready(function () {
  if ($(window).width() > min_desktop_width) {
    autoDesktopDialogHeight();
  }
});

// Auto adjust dialog if able to toggle between screen sizes.
$(window).resize(function () {
  if ($(window).width() > min_desktop_width) {
    autoDesktopDialogHeight();
    $("body").removeAttr("style");
  } else {
    $('[data-offcanvas="dialog"]').removeAttr("style");
    if ($offcanvas_dialog.attr("open")) {
      $("body").css("overflow", "hidden");
    }
  }
});

// Disallow ENTER key form submission.
$(drupalWebForm).on("keydown", ":input:not(textarea):not(:submit)", function (e) {
  if (e.keyCode == "13") {
    e.preventDefault();
  }
});

// Remove button focus on context change.
$(drupalWebForm + " .js-webform-webform-buttons .ui-button").focusout(function () {
  $(this).removeClass("ui-visual-focus");
});
