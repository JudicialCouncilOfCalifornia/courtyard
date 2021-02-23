var heroParallax = document.querySelector(".jcc-hero--background-parallax img");

if (heroParallax) {
  window.addEventListener("scroll", function(e) {
    var scrolled = window.pageYOffset;
    heroParallax.style.top = -(scrolled * 0.4) + "px";
  });
}
