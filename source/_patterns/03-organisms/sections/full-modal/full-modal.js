import A11yDialog from "a11y-dialog";

// Get the dialog element (with the accessor method you want)
const el = document.getElementById("jcc-full-modal");

$(".jcc-full-modal").each(function() {
  new A11yDialog(this);
});
