window.addEventListener("scroll", function(e) {
  var scrolled = window.pageYOffset;
  var heroParallax = document.querySelector(".jcc-hero--background-parallax img");
  heroParallax.style.top = -(scrolled * 0.4) + "px";
});
