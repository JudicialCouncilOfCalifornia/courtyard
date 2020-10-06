import A11yDialog from "a11y-dialog";
import dialogPolyfill from "dialog-polyfill";

// Get the dialog element (with the accessor method you want)
const el = document.getElementById("jcc-modal");

$(".jcc-modal").each(function() {
  new A11yDialog(this);
});

// Reset modals on close
$(".jcc-modal__close-reset, .jcc-modal__backdrop").on("click tap", function() {
  $(".jcc-modal").attr("aria-hidden", "true"); // Prevent sibling modals from appearing on close action ... limitation with a11y
  $(".jcc-modal .usa-alert, .jcc-modal .form-item--error-message").remove(); // Clear alert messages
  // Reset forms
  $(".jcc-modal input[type='text'], .jcc-modal input[type='email']").each(function() {
    this.value = "";
  });
});

// var dialog = document.querySelector("dialog");
// dialogPolyfill.registerDialog(dialog);
// // Now dialog acts like a native <dialog>.
// dialog.showModal();
// console.log("example");
