// require('jquery');
require("slicknav/jquery.slicknav");

$(function() {
  $("#slick-menu").slicknav({
    prependTo: "#js-header_menu--mobile"
  });
  $("#slick-menu ul li.slicknav_open ul").each(function(){
      $(this).parent().removeClass("slicknav_hidden");
      $(this).css("display","none");
  });
});
