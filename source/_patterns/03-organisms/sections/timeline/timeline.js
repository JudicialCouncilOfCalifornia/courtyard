require("slick-carousel");

$(".slider").slick({
  infinite: false,
  slidesToShow: 4,
  nextArrow: $(".jcc-timeline__scroller--right"),
  prevArrow: $(".jcc-timeline__scroller--left"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        unslick
        // slidesToShow: 1,
        // dots: false
      }
    }
  ]
});

$(".slider").on("keydown", e => {
  switch (e.which) {
    case 37: // left
      $(e.currentTarget).slick("slickPrev");
      break;
    case 39: // right
      $(e.currentTarget).slick("slickNext");
      break;
    default:
      return;
  }
  e.preventDefault();
});
// Hide slide left on init
$(".jcc-timeline__scroller--left").hide();
$(".slider").on("afterChange", (e, slick, direction) => {
  if (direction === 0) {
    $(e.currentTarget)
      .siblings(".jcc-timeline__scroller--left")
      .hide();
  } else {
    const sliderPerView = slick.listWidth / slick.slideWidth;
    if (sliderPerView + direction === slick.slideCount) {
      $(e.currentTarget)
        .siblings(".jcc-timeline__scroller--right")
        .hide();
    } else {
      $(e.currentTarget)
        .siblings(".jcc-timeline__scroller--right")
        .show();
    }
    $(e.currentTarget)
      .siblings(".jcc-timeline__scroller--left")
      .show();
  }
});
