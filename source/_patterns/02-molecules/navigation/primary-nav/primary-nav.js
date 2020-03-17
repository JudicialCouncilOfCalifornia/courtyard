// require('jquery');
require("slicknav/jquery.slicknav");

$(function() {
  $("#slick-menu").slicknav({
    prependTo: "#js-header_menu--mobile"
  });
});

$(document).click(function() {
  $(".open-nav").hide();
});

$(".jcc-primary_nav__top_link").click(function() {
  if ($(this).hasClass("nav-open")) {
    console.log("hello");
    $(this).removeClass("nav-open");
  } else {
    $(".nav-open").removeClass("nav-open");
    $(this).addClass("nav-open");
  }
});
