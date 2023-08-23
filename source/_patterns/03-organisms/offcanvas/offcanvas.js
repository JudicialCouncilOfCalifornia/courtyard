// Elements.
const $offcanvas_trigger = $('[data-offcanvas^="trigger"]');
const $offcanvas_trigger_show = $('[data-offcanvas="trigger"]');
const offcanvas_triggers = '.jcc-offcanvas__trigger-container .block';
const $offcanvas_container = $('[data-offcanvas="container"]');
const $offcanvas_dialog = $('[data-offcanvas="dialog"]');
const $offcanvas_confirmation = $('[data-offcanvas="container"] .webform-confirmation');
const drupalWebForm = ".jcc-offcanvas__dialog-body .webform-ajax-form-wrapper";
const min_tablet_width = 800;
const triggerContainer = ".jcc-offcanvas__trigger-container";

// Functions.
const offcanvasOpen = () => {
  $(offcanvas_triggers).hide();
  $(triggerContainer).addClass("open");
  $offcanvas_container.attr("open", "open");
  $offcanvas_dialog.attr("open", "open");
  $offcanvas_dialog.focus();
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
  $('[data-offcanvas="dialog"]').css("height", $(window).height());
};

const triggersAdjust = (state) => {
  if (state) {
    $(triggerContainer).attr("style", "width: " + $(window).width() + "px");
    $(offcanvas_triggers).addClass("block--mobile");
  } else {
    $(triggerContainer).removeAttr("style");
    $(offcanvas_triggers).removeClass("block--mobile");
  }
}

// Allow user to dismiss completely if confirmation is visible.
if (offcanvasConfirmed() == true) {
  if (offcanvasDismissPath() == true) {
    offcanvasDismiss();
  } else {
    window.scrollTo(0, document.body.scrollHeight);
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
      $(offcanvas_triggers).show();
    }
    $(triggerContainer).removeClass("open");
    $("body").removeAttr("style");
    return false;
  } else {
    offcanvasOpen();
    $("body").css("overflow", "hidden");
  }
});

// Auto adjusts on page load.
$(document).ready(function () {
  autoDesktopDialogHeight();
  if ($(window).width() < min_tablet_width) {
    triggersAdjust(true);
  }
});

// Auto adjusts when screen orientation changes.
$(window).resize(function () {
  autoDesktopDialogHeight();
  if ($(window).width() > min_tablet_width) {
    triggersAdjust(false);
  } else {
    triggersAdjust(true);
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

// BEGIN: JCC Chat integration via chatbot.js molecule.
window.addEventListener(
  "chat-open",
  function(e) {
    $offcanvas_trigger_show.hide();
    $(triggerContainer).addClass("open");
    $("body").css("overflow", "hidden");
  },
  false
);

window.addEventListener(
  "chat-close",
  function(e) {
    $(triggerContainer).removeClass("open");
    $offcanvas_trigger_show.show();
    $("body").removeAttr("style");
  },
  false
);
// END
