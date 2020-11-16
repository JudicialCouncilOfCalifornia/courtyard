require("slick-carousel");

function initControls(slider) {
  $(slider).on("keydown", function(e) {
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
  $(slider)
    .siblings(".jcc-timeline__scroller--left")
    .hide();
  $(slider).on("afterChange", function(e, slick, direction) {
    const sliderPerView = Math.ceil(slick.listWidth / slick.slideWidth);
    if (direction === 0) {
      $(e.currentTarget)
        .siblings(".jcc-timeline__scroller--left")
        .hide();
      if (slick.slideCount > sliderPerView) {
        $(e.currentTarget)
          .siblings(".jcc-timeline__scroller--right")
          .show();
      }
    } else {
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
}

function settings(slider) {
  const defaultSettings = {
    infinite: false,
    slidesToShow: 4,
    nextArrow: $(slider).siblings(".jcc-timeline__scroller--right"),
    prevArrow: $(slider).siblings(".jcc-timeline__scroller--left"),
    responsive: [
      {
        breakpoint: 880,
        arrows: true,
        settings: {
          slidesToShow: 4,
          dots: false
        }
      },
      {
        breakpoint: 880,
        settings: "unslick"
      }
    ]
  };
  return defaultSettings;
}

$(".slider").each(function(_, slider) {
  if (slider.children.length > 4) {
    $(slider).slick(settings(slider));
    initControls(slider);
  } else {
    $(slider)
      .siblings(".jcc-timeline__scroller--left")
      .hide();
    $(slider)
      .siblings(".jcc-timeline__scroller--right")
      .hide();
  }
});

$(window).on("resize", function() {
  if ($(window).width() > 640) {
    $(".slider").each(function(_, slider) {
      if (!$(slider).hasClass("slick-initialized") && slider.children.length > 4) {
        $(slider).slick(settings(slider));
        initControls(slider);
      }
    });
  }
});
