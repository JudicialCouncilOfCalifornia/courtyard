$(document).ready(function() {
  let footerHeight = $('.jcc-chat__footer-container').height();
  let footerHeightAdjust = 4;
  footerHeight = (footerHeight/16) + footerHeightAdjust;
  $('.jcc-chat__footer').css('height', footerHeight + 'rem');
});