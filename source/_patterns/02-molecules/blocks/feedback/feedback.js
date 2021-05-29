// Elements.
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_trigger_show = $('[data-feedback="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $feedback_dialog = $('[data-feedback="dialog"]');
const $feedback_confirmation = $('[data-feedback="container"] .webform-confirmation');
const drupalWebForm = ".jcc-feedback__dialog-body .webform-ajax-form-wrapper";
const min_desktop_width = 800;

// Functions.
const feedbackOpen = () => {
  $feedback_trigger_show.hide();
  $feedback_container.attr("open", "open");
  $feedback_dialog.attr("open", "open");
  $feedback_dialog.focus();
  if ($(window).width() < min_desktop_width && $feedback_dialog.attr("open")) {
    $("body").css("overflow", "hidden");
  }
};

const feedbackDismiss = () => {
  $feedback_container.hide();
};

const feedbackDismissPath = () => {
  return sessionStorage.feedback_dismissed_page == window.location.pathname;
};

const feedbackConfirmed = () => {
  return $feedback_confirmation.length > 0;
};

const autoDesktopDialogHeight = () => {
  $('[data-feedback="dialog"]').css("height", $(window).height() - 100);
};

// Allow user to dismiss completely if confirmation is visible.
if (feedbackConfirmed() == true) {
  if (feedbackDismissPath() == true) {
    feedbackDismiss();
  } else {
    window.scrollTo(0, document.body.scrollHeight);
    $feedback_dialog.removeAttr("style");
    feedbackOpen();
  }
}

// Click.
$feedback_trigger.on("click", function(e) {
  e.preventDefault;
  // Toggle dialog visibility.
  if ($feedback_dialog.attr("open")) {
    // Close dialog.
    if (feedbackConfirmed() && $(this).attr("data-feedback") == "trigger-close") {
      sessionStorage.feedback_dismissed_page = window.location.pathname;
      feedbackDismiss();
    } else {
      $feedback_container.css("transition", "all .2s");
      $feedback_dialog.removeAttr("open");
      $feedback_container.removeAttr("open");
      $feedback_trigger_show.show();
      if ($(window).width() < min_desktop_width) {
        $("body").removeAttr("style");
      }
    }
    return false;
  } else {
    feedbackOpen();
  }
});

// Auto adjust dialog height on larger screens.
$(document).ready(function() {
  if ($(window).width() > min_desktop_width) {
    autoDesktopDialogHeight();
  }
});

// Auto adjust dialog if able to toggle between screen sizes.
$(window).resize(function() {
  if ($(window).width() > min_desktop_width) {
    autoDesktopDialogHeight();
    $("body").removeAttr("style");
  } else {
    $('[data-feedback="dialog"]').removeAttr("style");
    if ($feedback_dialog.attr("open")) {
      $("body").css("overflow", "hidden");
    }
  }
});

// Disallow ENTER key form submission.
$(drupalWebForm).on("keydown", ":input:not(textarea):not(:submit)", function(e) {
  if (e.keyCode == "13") {
    e.preventDefault();
  }
});

// Remove button focus on context change.
$(drupalWebForm + " .js-webform-webform-buttons .ui-button").focusout(function() {
  $(this).removeClass("ui-visual-focus");
});
