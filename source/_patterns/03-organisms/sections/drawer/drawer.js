// Elements.
const $window = $(window);
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $drawer = $(".jcc-drawer");
const $feedback_dialog = $('[data-feedback="dialog"]');

const isScrolledToBottom = ($offset = 0) => {
  // Bottom is the bottom of the drawer's previous sibling.
  const $bottom = $drawer.prev().offset().top + $drawer.prev().height();
  // Scroll past the bottom to the offset, if any.
  return $window.scrollTop() + $window.height() - $offset >= $bottom;
};

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

const chatVisibility = () => {
  let chat = ".iframeBot";
  if ($(chat).length > 0) {
    if ($feedback_dialog.attr("open")) {
      $(chat).hide();
    } else {
      $(chat).show();
    }
  }
};

// Initial visibility.
$(document).ready(function() {
  if (isNoPageScroll() == true) {
    $drawer.attr("visible", "visible");
  }
});

// Scroll.
$window.on("scroll", function() {
  if ($drawer.length == 0) {
    return;
  }

  if ((isScrolledToBottom($drawer.height() / 2) && isSmallScreen()) || isSmallScreen() == false) {
    $drawer.attr("visible", "visible");
  } else {
    if (!$feedback_dialog.attr("open")) {
      $drawer.removeAttr("visible");
    }
  }
});

$(window).resize(function() {
  if ($feedback_dialog.attr("open")) {
    $drawer.attr("visible", "visible");
  }
});

// Widget interaction/visibility.
$feedback_trigger.on("click", function(e) {
  e.preventDefault;

  // Show/hide chatbot when feedback dialog is toggled.
  setTimeout(chatVisibility(), 5);
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
