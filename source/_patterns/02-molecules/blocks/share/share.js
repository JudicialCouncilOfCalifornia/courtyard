require("a11y-toggle");

$(".jcc-share__item").on("click tap", function() {
  console.log("Close any open modals");
  $(".jcc-share__content").attr("aria-hidden", "true");
});

$("#print").on("click tap", function() {
  window.print();
  return false;
});
