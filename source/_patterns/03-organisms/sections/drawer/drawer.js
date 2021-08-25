// Elements.
const $window = $(window);
const $body = document.body;
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $drawer = $(".jcc-drawer");
const $feedback_dialog = $('[data-feedback="dialog"]');
const $cta_block = $(".jcc-drawer__inner .block");
const $footer_spacer = $(".usa-footer .jcc-global-bar");

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
function siblingCheck() {
  if (window.innerWidth < 1024 && $feedback_container.siblings().length == 0) {
    if ($cta_block.length > 0) {
      $cta_block.addClass("block--single");
    }
    $feedback_container.attr("style", "width: 100%");
  } else {
    if ($cta_block.length > 0) {
      $cta_block.removeClass("block--single");
    }
    $feedback_container.removeAttr("style");
  }
}

// Initial visibility.
$(document).ready(function() {
  if (window.innerWidth < 1024) {
    setTimeout(siblingCheck(), 1000);
  }

  if (isNoPageScroll() == true) {
    $drawer.attr("visible", "visible");
  }
});

// Scroll.
if (!isNoPageScroll()) {
  $window.on("scroll", function() {
    if ($drawer.length == 0) {
      return;
    }

    if ($window.scrollTop() + $window.height() >= $body.scrollHeight / 2) {
      $drawer.attr("visible", "visible");
    }
  });

  $(window).resize(function() {
    if ($feedback_dialog.attr("open")) {
      $drawer.attr("visible", "visible");
    }

    if (window.innerWidth < 1024) {
      $footer_spacer.attr("style", "padding-bottom: 7rem");
    } else {
      $footer_spacer.removeAttr("style");
    }
  });
}

// Widget interaction/visibility.
function toggleChatBot() {
  // Show/hide chatbot when feedback dialog is toggled.
  let chat = ".iframeBot";
  if ($(chat).length > 0) {
    if ($feedback_dialog.attr("open")) {
      $(chat).hide();
    } else {
      $(chat).show();
    }
  }
}
$feedback_trigger.on("click", function(e) {
  e.preventDefault;
  setTimeout(toggleChatBot(), 300);
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
