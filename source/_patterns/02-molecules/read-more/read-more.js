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
  console.clear();

  // More-Less logic per instance.
  readmorebtns.forEach((readmorebtn) => {
    if (!readmorebtn.classList.contains("js-readmore")) {
      readmorebtn.classList.add("js-readmore");

      readmorebtn.addEventListener("click", (e) => {
        e.preventDefault();

        let readmoreheading = readmorebtn.closest(".read-more__heading");

        if (readmoreheading.hasAttribute("expanded")) {
          readmoreheading.removeAttribute("expanded");
          readmorebtn.setAttribute("aria-pressed", "false");
          readmorebtn.innerHTML = "More";
        } else {
          readmoreheading.setAttribute("expanded", "true");
          readmorebtn.setAttribute("aria-pressed", "true");
          readmorebtn.innerHTML = "Less";
        }
      });
    }
  });
});
