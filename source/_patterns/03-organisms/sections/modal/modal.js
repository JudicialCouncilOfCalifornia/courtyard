import A11yDialog from "a11y-dialog";
import dialogPolyfill from "dialog-polyfill";

// Get the dialog element (with the accessor method you want)
const el = document.getElementById("jcc-modal");

$(".jcc-modal").each(function() {
  new A11yDialog(this);
});

// var dialog = document.querySelector("dialog");
// dialogPolyfill.registerDialog(dialog);
// // Now dialog acts like a native <dialog>.
// dialog.showModal();
// console.log("example");
