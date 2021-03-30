// The design requires a H2 to have an inner span.
const headings = document.querySelectorAll('.jcc-body__main-text h2');

for (let i = 0; i < headings.length; i++) {
  headings[i].innerHTML = "<span>" + headings[i].innerText + "</span>";
  headings[i].classList.add('jcc-section-heading__title', 'jcc-section-heading__title--partial');
}
