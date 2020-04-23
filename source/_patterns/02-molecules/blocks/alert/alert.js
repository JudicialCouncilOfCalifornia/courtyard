function alertCloseclick() {
  document.getElementById("alert-close").onclick = function alertClose() {
    var alert = document.getElementById("alert-bar");
    if (alert.style.display === "none") {
      alert.style.display = "block";
    } else {
      alert.style.display = "none";
    }
  };
}
