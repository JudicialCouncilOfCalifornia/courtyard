const ifFixedPosition = $('.jcc-footer--fixed-position');
const footerSpacer = function() {
  let headerHeight = $('.jcc-header').height();
  let footerHeight = $('.jcc-footer').height();

  if (footerHeight) {
    headerHeight = (headerHeight/16);
    footerHeight = (footerHeight/16);
    $('.jcc-header__spacer').css('height', headerHeight + 'rem');
    $('.jcc-footer__spacer').css('height', footerHeight + 'rem');
  }
};

$(document).ready(function() {
  console.log(ifFixedPosition);
  if (ifFixedPosition) {
    footerSpacer();
  }
});

if (ifFixedPosition) {
  $(window).resize(function () {
    footerSpacer();
  });
}