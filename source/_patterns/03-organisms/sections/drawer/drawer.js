// Elements.
const $window = $(window);
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $drawer = $(".jcc-drawer");
const $feedback_dialog = $('[data-feedback="dialog"]');
// Disable initial visibility with js for graceful degredation.
$drawer.removeAttr("visible");

const isScrolledToBottom = ($scrollPosition, $windowHeight, $footPosition) => {
  const $windowHeightHalf = $windowHeight / 2;
  const $scrollDiff = $scrollPosition + $windowHeight - $windowHeightHalf;
  const $pageHeightHalf = $footPosition / 2;
  return $scrollDiff >= $pageHeightHalf;
};

const pageIsShorterThanWindow = ($scrollPosition, $windowHeight, $footPosition) => {
  const $scrollDiff = $footPosition - $windowHeight;
  return $scrollDiff > $scrollPosition;
};

const isSmallScreen = () => {
  const mql = window.matchMedia("(max-width: 40em)");
  return mql.matches ? true : false;
};

// Scroll.
$window.on("scroll", function() {
  const $scrollPosition = $window.scrollTop();
  const $windowHeight = $window.height();
  const $footPosition = $("footer").offset().top;
  if (
    (isScrolledToBottom($scrollPosition, $windowHeight, $footPosition) && isSmallScreen()) ||
    isSmallScreen() == false
  ) {
    $drawer.attr("visible", "visible");
  } else {
    $drawer.removeAttr("visible");
  }
});

// Widget interaction/visibility.
$feedback_trigger.on("click", function(e) {
  e.preventDefault;

  // Show/hide chatbot when feedback dialog is toggled.
  if ($feedback_dialog.attr("open")) {
    $("#jcc-chatbot").hide();
  } else {
    $("#jcc-chatbot").show();
  }
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
