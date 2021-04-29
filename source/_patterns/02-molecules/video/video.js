document.querySelectorAll('.jcc-video .jcc-video__cover').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    const wrapper = event.target.closest('.jcc-video');
    const iframe = wrapper.querySelector('iframe:first-child');
    const src = iframe.getAttribute('data-src');

    // Hide the cover & set the src so the video will start playing
    wrapper.classList.add('video-active');
    iframe.setAttribute('src', src);
  })
});
