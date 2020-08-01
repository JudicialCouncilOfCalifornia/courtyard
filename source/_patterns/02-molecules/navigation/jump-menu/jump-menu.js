$(".jcc-jump-menu button").on("click", function() {
  const url = $(this)
    .prev()
    .val();
  if (url) {
    window.location.replace(url);
  }
});
