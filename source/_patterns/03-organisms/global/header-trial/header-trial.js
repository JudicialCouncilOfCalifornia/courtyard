require("slicknav/jquery.slicknav");

var mobileMenuID = ".mobile_button";

function resetMenus() {
  $(".show-button").removeClass("active-menu");
  $(".show-button").hide();
  $("#slick-menu").slicknav("close");
}

$(mobileMenuID).on("click focus", function() {
  var buttonID = $(this).attr("id");
  var isMobileMenu = $("#" + buttonID).hasClass("jcc-primary-nav");
  if (!isMobileMenu) {
    var toggleMenu = function() {
      if ($("#show-" + buttonID).hasClass("active-menu")) {
        resetMenus();
      } else {
        resetMenus();
        $("#show-" + buttonID)
          .toggle()
          .addClass("active-menu");
      }
    };

    $("#" + buttonID).on({
      click: function() {
        toggleMenu();
      },
      keydown: function(e) {
        switch (e.keyCode) {
          case 9: //tab
            console.log(e.keyCode);
            break;
          case 13: //enter
          case 32: //space
            toggleMenu();
            break;
          // 38: //up arrow
          //case 40: //down arrow
        }
      }
    });
  }
});

$("#mobile-menu").on("click focus", function() {
  $(".show-button").removeClass("active-menu");
  $(".show-button").hide();
});

$(function() {
  $("#js-header-trial_menu--mobile").append($("#js-header_menu--mobile"));
  $(".slicknav_btn").attr("aria-label", "Main navigation menu");
});
