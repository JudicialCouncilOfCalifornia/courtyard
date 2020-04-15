require("slicknav/jquery.slicknav");

$(".mobile_button").click(function() {
  $(".show-button").hide();
});

$("#search").click(function() {
  $("#show-search").show();
  $("#slick-menu").slicknav("close");
});

$("#translate").click(function() {
  $("#show-dropbutton").toggle();
  $("#slick-menu").slicknav("close");
});

$(function() {
  $("#js-double-header_menu--mobile").append($("#js-header_menu--mobile"));
});
