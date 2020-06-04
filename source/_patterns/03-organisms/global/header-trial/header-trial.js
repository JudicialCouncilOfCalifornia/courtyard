require("slicknav/jquery.slicknav");

var mobileMenuID = ".mobile_button";

function resetMenus(isMain) {
  $(".show-button").removeClass("active-menu");
  $(".show-button").hide();
  if (!isMain) {
    $("#slick-menu").slicknav("close");
  }
}

$(mobileMenuID).on("click keypress", function(e) {
  var buttonID = $(this).attr("id");
  var isMobileMenu = $("#" + buttonID).hasClass("jcc-primary-nav");
  if (!isMobileMenu) {
    var toggleMenu = function() {
      if ($("#show-" + buttonID).hasClass("active-menu")) {
        resetMenus(false);
      } else {
        resetMenus(false);
        $("#show-" + buttonID)
          .toggle()
          .addClass("active-menu");
      }
    };

    switch (e.type) {
      case "click":
        toggleMenu();
        break;
      case "keypress":
        switch (e.keyCode) {
          //case 9: //tab
          case 13: //enter - inherits next case function
          case 32: //space
            toggleMenu();
            break;
          //case 38: //up arrow
          //case 40: //down arrow
        }
    }
  } else {
    resetMenus(true);
  }
});

$(function() {
  $("#js-header-trial_menu--mobile").append($("#js-header_menu--mobile"));
  $(".slicknav_btn").attr("aria-label", "Main navigation menu");
});
