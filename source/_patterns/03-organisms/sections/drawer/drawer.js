// Elements.
const $window = $(window);
const $body = document.body;
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $drawer = $(".jcc-drawer");
const $feedback_dialog = $('[data-feedback="dialog"]');
const $footer_spacer = $(".usa-footer .jcc-global-bar");
const $cta_feedback = $(".jcc-drawer__inner > .block:first-child");

const pageIsShorterThanWindow = ($offset = 0) => {
  return $(document).height() - $offset <= $window.height();
};

const isSmallScreen = () => {
  const mql = window.matchMedia("(max-width: 1199px)");
  return mql.matches ? true : false;
};

const isNoPageScroll = () => {
  var docHeight = $(document).height();
  var scroll = $(window).height() + $(window).scrollTop();
  return docHeight == scroll;
};

// Adjusts primary button if another button exists or not (e.g. ChatBot).
const siblingCheck = () => {
  console.log("Siblings?");
  if (window.innerWidth < 1024 && $(".jcc-drawer__inner > .block").length == 1) {
    if ($(".jcc-drawer__inner > .block > .jcc-feedback").length == 1) {
      $cta_feedback.addClass("block--single");
    }
    $feedback_container.attr("style", "width: 100%");
  } else {
    $cta_feedback.removeClass("block--single");
    $feedback_container.removeAttr("style");
  }
};

// Initial visibility.
$(document).ready(function() {
  // TEMP: Reveal drawer on page load
  $drawer.attr("visible", "visible");
  setTimeout(siblingCheck, 3000);

  // TEMP: Disable since drawer reveals on page load
  // if (isNoPageScroll() == true) {
  //   $drawer.attr("visible", "visible");
  // }
});

// TEMP: Disable since drawer reveals on page load
// Scroll.
// if (!isNoPageScroll()) {
//   $window.on("scroll", function() {
//     if ($drawer.length == 0) {
//       return;
//     }
//
//     if ($window.scrollTop() + $window.height() >= $body.scrollHeight * (2 / 3)) {
//       $drawer.attr("visible", "visible");
//       $feedback_container.attr("visible", "visible");
//     }
//   });
//
//   $(window).resize(function() {
//     siblingCheck();
//
//     if ($feedback_dialog.attr("open")) {
//       $drawer.attr("visible", "visible");
//     }
//
//     if (window.innerWidth < 1024) {
//       $footer_spacer.attr("style", "padding-bottom: 7rem");
//     } else {
//       $footer_spacer.removeAttr("style");
//     }
//   });
// }

// Widget interaction/visibility.
function toggleChat() {
  // Show/hide chat when feedback dialog is toggled.
  if ($feedback_dialog.attr("open") && $(".jcc-drawer__inner > .jcc-chat").length != 0) {
    $(".jcc-drawer__inner > .jcc-chat").hide();
  } else {
    $(".jcc-drawer__inner > .jcc-chat").show();
  }
}
$feedback_trigger.on("click", function(e) {
  e.preventDefault;
  setTimeout(toggleChat(), 1000);
});

// Hide feeback widget when chatbot opens.
window.addEventListener(
  "chat-open",
  function(e) {
    $feedback_trigger.hide();
    $feedback_container.hide();
  },
  false
);

// Show feedback widget when chatbot closes.
window.addEventListener(
  "chat-close",
  function(e) {
    $feedback_trigger.show();
    $feedback_container.show();
  },
  false
);
