// Elements.
const $window = $(window);
const $feedback_trigger = $('[data-feedback^="trigger"]');
const $feedback_container = $('[data-feedback="container"]');
const $drawer = $(".jcc-drawer");
const $feedback_dialog = $('[data-feedback="dialog"]');

const isScrolledToBottom = ($offset = 0) => {
  return $window.scrollTop() + $window.height() + $offset >= $(document).height();
};

const pageIsShorterThanWindow = ($offset = 0) => {
  return $(document).height() - $offset <= $window.height();
};

const isSmallScreen = () => {
  const mql = window.matchMedia("(max-width: 40em)");
  return mql.matches ? true : false;
};

// Disable initial visibility with js for graceful degredation.
if (!pageIsShorterThanWindow()) {
  $drawer.removeAttr("visible");
}

// Scroll.
$window.on("scroll", function() {
  const $drawerHeight = $drawer.height();

  if ((isScrolledToBottom($drawerHeight) && isSmallScreen()) || isSmallScreen() == false) {
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
