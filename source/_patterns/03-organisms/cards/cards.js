/*
 * Function to display consistent image height for mixed card widths.
 */
function setConsistentMediaHeight(cards) {
  cards.forEach(function(cardset) {
    const medias = Array.from(cardset.getElementsByClassName("usa-card__media"));

    if (medias.length > 0) {
      // Reset media height to default.
      medias.forEach(function(media) {
        let image = media.getElementsByTagName("img");
        media.removeAttribute("style");
        image[0].removeAttribute("style");
      });

      // Determine max height from smallest media found.
      let maxHeight = medias[0].offsetHeight;
      medias.forEach(function(media) {
        maxHeight = Math.min(maxHeight, media.offsetHeight);
      });

      // Adjust all container and image heights to max allowed.
      medias.forEach(function(media) {
        let mediaHeight = maxHeight / 16 + "rem";
        let image = media.getElementsByTagName("img");
        media.style.height = mediaHeight;
        image[0].setAttribute("style", "height: " + mediaHeight + ";");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Detect any mixed card widths.
  const cards = Array.from(document.querySelectorAll(".jcc-cards--2-60-40-cols, .jcc-cards--2-75-25-cols"));

  if (cards) {
    setConsistentMediaHeight(cards);
    window.onresize = function() {
      setConsistentMediaHeight(cards);
    };
  }
});
