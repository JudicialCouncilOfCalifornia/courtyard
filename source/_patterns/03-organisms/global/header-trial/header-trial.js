require("slicknav/jquery.slicknav");

var mobileMenuClass = ".mobile_button";

// toggle mobile menus/functions closed as needed
function resetMenus(includeMain) {
  $(".show-button").removeClass("active-menu");
  $(".show-button").hide();
  if (includeMain) {
    $("#slick-menu").slicknav("close");
  }
}

// Event handling for menus/functions
$(mobileMenuClass).on("click keydown", function(e) {
  var mobileMenuID = $(this).attr("id");
  var isMobileMenu = $("#" + mobileMenuID).hasClass("jcc-primary-nav");
  if (!isMobileMenu) {
    var toggleMenu = function() {
      if ($("#show-" + mobileMenuID).hasClass("active-menu")) {
        resetMenus(true);
      } else {
        resetMenus(true);
        $("#show-" + mobileMenuID)
          .toggle()
          .addClass("active-menu");
      }
    };

    switch (e.type) {
      case "click":
        toggleMenu();
        break;
      case "keydown":
        switch (e.keyCode) {
          case 13: //enter
            toggleMenu();
        }
    }
  } else {
    resetMenus(false);
  }
});

// Close menus/functions if click focus is away
$(document).on("click", function(e) {
  if (!$(mobileMenuClass).is(":focus") && !$(".slicknav_open").is(":focus")) {
    resetMenus(true);
  }
});

$(function() {
  $("#js-header-trial_menu--mobile").append($("#js-header_menu--mobile"));
  $(".slicknav_btn").attr(
    "aria-label",
    "Main navigation menu. Open or close menu by using ENTER key now."
  );
});
