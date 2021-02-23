$(".jcc-timeline-dual__slider-wrapper").each(function() {
  const $wrapper = $(this);
  const $scroller = $wrapper.find(".jcc-timeline-dual__slider-scroller");
  const $slider = $wrapper.find(".jcc-timeline-dual__slider");

  const $leftButton = $wrapper.find(".scroll-button--left");
  const $rightButton = $wrapper.find(".scroll-button--right");

  /**
   * Hide or show buttons based on scroll position.
   */
  function setVisibility() {
    const scrollerWidth = $scroller.width();
    const sliderWidth = $slider.width();
    const scrollLeft = $scroller.scrollLeft();

    if (scrollLeft == 0) {
      $leftButton.addClass("hidden");
    } else {
      $leftButton.removeClass("hidden");
    }

    if (Math.ceil(scrollLeft + scrollerWidth) >= sliderWidth) {
      $rightButton.addClass("hidden");
    } else {
      $rightButton.removeClass("hidden");
    }
  }

  /**
   * Move the inner scroll left/right.
   */
  function doScroll(direction) {
    const scrollDuration = 300;
    const scrollDistance = $wrapper.width() / 3;
    const left = $scroller.scrollLeft();
    let distance = 0;

    if (direction == "left") {
      distance = left - scrollDistance;
    } else {
      // Right
      distance = left + scrollDistance;
    }

    $scroller.animate(
      {
        scrollLeft: distance
      },
      scrollDuration,
      setVisibility
    );
  }

  /**
   * Events.
   */
  $(window).on("load", function() {
    setVisibility();
  });
  $(window).on("resize", function() {
    setVisibility();
  });
  $scroller.on("scroll", function() {
    setVisibility();
  });
  $leftButton.on("click", function() {
    doScroll("left");
  });
  $rightButton.on("click", function() {
    doScroll("right");
  });
});
