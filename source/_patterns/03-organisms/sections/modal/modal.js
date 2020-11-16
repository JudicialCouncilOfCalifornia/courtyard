import A11yDialog from "a11y-dialog";

var modals = $(".jcc-modal");

if (modals) {
  // import dialogPolyfill from "dialog-polyfill";

  // Get the dialog element (with the accessor method you want)
  // const el = document.getElementById("jcc-modal");

  $(".jcc-modal").each(function() {
    new A11yDialog(this);
  });

  // WORKAROUND: Suppress close function for IE 11 if multiple modals without background overlays are displayed
  if (/Trident/.test(navigator.userAgent)) {
    if (modals.length > 1) {
      $(modals).each(function(idx, modal) {
        if (!$(this).hasClass("jcc-modal--overlay")) {
          $(".jcc-modal__close-button").remove();
        }
      });
    }
  }

  // Modal overlay resets on close
  $(".jcc-modal__close-reset").on("click tap", function() {
    // Prevent sibling modals from appearing on close action ... limitation on certain browsers
    if (
      /Fire/.test(navigator.userAgent) ||
      /Trident/.test(navigator.userAgent) ||
      /Edge/.test(navigator.userAgent) ||
      /Edg/.test(navigator.userAgent)
    ) {
      $(".jcc-modal--overlay").attr("aria-hidden", "true");
    }
    // Clear alert messages
    $(".jcc-modal .usa-alert, .jcc-modal .form-item--error-message").remove();
    // Reset forms
    $(".jcc-modal input[type='text'], .jcc-modal input[type='email']").each(function() {
      this.value = "";
    });
  });

  // Always position modal overlays last to avoid render conflicts esp for Edge
  $("document").ready(function() {
    $(".jcc-modal--overlay").appendTo("body");
  });

  // var dialog = document.querySelector("dialog");
  // dialogPolyfill.registerDialog(dialog);
  // // Now dialog acts like a native <dialog>.
  // dialog.showModal();
  // console.log("example");
}
