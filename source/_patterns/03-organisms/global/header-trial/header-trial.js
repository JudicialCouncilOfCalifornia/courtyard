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

// Close menus/functions if focus is away from menus
$(document).on("click keydown", function(e) {
  switch (e.type) {
    case "click":
      if (!$(e.target).closest(".mobile_button, #show-search").length) {
        resetMenus(true);
      }
      break;
    case "keydown":
      switch (e.keyCode) {
        case 27: //escape
          resetMenus(true);
      }
  }
});

$(function() {
  $("#js-header-trial_menu--mobile").append($("#js-header_menu--mobile"));
  $(".slicknav_btn").attr(
    "aria-label",
    "Main navigation menu. Open or close menu by using ENTER key."
  );
});
