import easydropdown from "easydropdown";

const selectElements = document.querySelectorAll(".jcc-dropdown select:not([multiple])");

if (selectElements) {
  selectElements.forEach(select => {
    const edd = easydropdown(select);
  });
}
