// Elements.
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_trigger_show = $('[data-feedback="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $feedback_dialog = $('[data-feedback="dialog"]');
const $feedback_confirmation = $('[data-feedback="container"] .webform-confirmation');

// Functions.
const feedbackOpen = feedback_id => {
  $feedback_trigger_show.hide();
  $("#" + feedback_id + ' [data-feedback="dialog"]').attr("open", "open");
  $("#" + feedback_id).attr("open", "open");
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
$feedback_trigger
  .parent()
  .parent()
  .on("click", function(e) {
    e.preventDefault;
    let feedback_container_id = $(this).attr("id");

    if ($(this).attr("open")) {
      if (feedbackConfirmed() && $(this).attr("data-feedback") == "trigger-close") {
        sessionStorage.feedback_dismissed_page = window.location.pathname;
        feedbackDismiss();
      } else {
        $feedback_container.css("transition", "all .2s");
        $feedback_dialog.removeAttr("open");
        $feedback_container.removeAttr("open");
        $feedback_trigger_show.show();
      }
    } else {
      feedbackOpen(feedback_container_id);
    }
  });
