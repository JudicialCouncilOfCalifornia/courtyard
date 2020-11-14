import easydropdown from "easydropdown";

const selectElements = $(".jcc-dropdown select:not([multiple])");

if (selectElements) {
  $(selectElements).each(function(idx, select) {
    const edd = easydropdown(select);
  });
}
