require("slicknav/jquery.slicknav");

var mobileMenuID;
var mobileMenuClass = ".mobile_button";

// Toggle mobile features closed as needed
function resetMenus(includeMain) {
  $(".show-button").removeClass("active-menu");
  $(".show-button").hide();
  if (includeMain) {
    $("#slick-menu").slicknav("close");
  }
}

// Mobile search and translate toggling behaviors
function toggleMenu(selectedMenu) {
  if ($("#show-" + selectedMenu).hasClass("active-menu")) {
    resetMenus(true);
  } else {
    resetMenus(true);
    $("#show-" + selectedMenu)
      .toggle()
      .addClass("active-menu");
  }
}

// Check selected mobile feature is main menu
function isMainMenu(selectedMenu) {
  var mainMenuCheck = $(selectedMenu).hasClass("jcc-primary-nav");
  return mainMenuCheck;
}

// Get id attribute of mobile feature
function getMobileMenuID(selectedMenu) {
  var menuID = $(selectedMenu).attr("id");
  return menuID;
}

// Main event handling for mobile features consistent with slicknav
$(mobileMenuClass).on({
  click: function(e) {
    if (!isMainMenu(this)) {
      mobileMenuID = getMobileMenuID(this);
      toggleMenu(mobileMenuID);
    } else {
      resetMenus(false);
    }
  },
  keydown: function(e) {
    if (e.keyCode == 13) {
      // enter key
      if (!isMainMenu(this)) {
        mobileMenuID = getMobileMenuID(this);
        toggleMenu(mobileMenuID);
      } else {
        resetMenus(false);
      }
    }
  }
});

// Close menus/functions if focus is away from menus
$(document).on({
  click: function(e) {
    if (!$(e.target).closest(".mobile_button, #show-search").length) {
      resetMenus(true);
    }
  },
  keydown: function(e) {
    if (e.keyCode == 27) {
      // escape key
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
