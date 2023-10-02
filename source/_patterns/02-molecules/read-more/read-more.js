function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function () {
  const readmorebtns = Array.from(document.querySelectorAll(".read-more__action"));

  // More-Less logic per instance.
  readmorebtns.forEach((readmorebtn) => {
    if (!readmorebtn.classList.contains("js-readmore")) {
      readmorebtn.classList.add("js-readmore");

      // Mouse interaction.
      readmorebtn.addEventListener("click", (e) => {
        e.preventDefault();

        let readmoreheading = readmorebtn.closest(".read-more__heading");
        let readmorebtntext = readmorebtn.children[0];

        if (readmoreheading.hasAttribute("expanded")) {
          readmoreheading.removeAttribute("expanded");
          readmorebtntext.innerHTML = "More";
        } else {
          readmoreheading.setAttribute("expanded", "true");
          readmorebtntext.innerHTML = "Less";
        }
      });
    }
  });
});
