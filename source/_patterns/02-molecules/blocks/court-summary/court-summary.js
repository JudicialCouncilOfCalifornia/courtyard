$(".jcc-court-summary__checkbox input").on("change", function() {
  if ($(".jcc-court-summary__checkbox input").is(":checked")) {
    // Hide .jcc-locations__item
    $(".jcc-location:not(.has-selfhelp)")
      .parent()
      .hide();
  } else {
    $(".jcc-locations__item").show();
  }
});
