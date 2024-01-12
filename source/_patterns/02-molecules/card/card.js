/*
* Consistent image height for mixed card widths.
*/
const cards = Array.from(document.querySelectorAll('.jcc-cards--2-60-40-cols, .jcc-cards--2-75-25-cols'));

cards.forEach(function (cardset) {
  // If media containers exist.
  let medias = Array.from(cardset.getElementsByClassName('usa-card__media'));

  if (medias.length > 0) {
    // Determine max height from smallest image.
    let maxHeight = medias[0].offsetHeight;
    medias.forEach(function(media) {
      maxHeight = Math.min(maxHeight, media.offsetHeight);
    })

    // Adjust all container and image heights to max allowed.
    medias.forEach(function (media) {
      let image = media.getElementsByTagName('img');
      let imageHeight = maxHeight/16 + 'rem';
      image[0].setAttribute('style', 'height: ' + imageHeight + ';');
      media.style.height = imageHeight;
    });
  }
});
