require("a11y-toggle");

$(".jcc-share__item").on("click tap", function() {
  $(".jcc-share__content").attr("aria-hidden", "true");
});

$("#print, #print-mobile").on("click tap", function() {
  window.print();
  return false;
});
