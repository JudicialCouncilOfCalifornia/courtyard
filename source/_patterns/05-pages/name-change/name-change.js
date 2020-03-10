$(".jcc-hero__questions input").on("click", evt => {
  var section = $("section[data-checkbox-id='" + evt.currentTarget.id + "']");
  section.toggle();
  section.data("selected", !section.data("selected"));
  if (section.data("selected")) {
    $(".jcc-hero__options").show();
  } else {
    if ($("section[data-checkbox-id]:visible").length == 0) {
      $(".jcc-hero__options").hide();
    }
  }
});

$(".jcc-hero__options button").on("click", evt => {
  $(".jcc-hero__questions").hide();
  $(".jcc-hero__options").hide();
  var questions = $(".jcc-hero__questions input:checked")
    .map((_, el) => {
      return $(el)
        .siblings("label")
        .text();
    })
    .toArray()
    .join(", ");
  $(".jcc-hero__picked-questions").html(questions);
  var answers = $(".jcc-hero__options input:checked")
    .map((_, el) => {
      return $(el)
        .siblings("label")
        .text();
    })
    .toArray()
    .join(", ");
  $(".jcc-hero__answers").html(answers);
  $(".jcc-hero__results").show();
});
$(".jcc-hero__results button:contains('Edit')").on("click", evt => {
  $(".jcc-hero__results").hide();
  $(".jcc-hero__questions").show();
  $(".jcc-hero__options").show();
});
