$(document).ready(function () {
  setTimeout(function () {
    //Check for alerts that haven't been processed yet.
    var alerts = $(".usa-alert:not(.cookie-processed)");

    if (alerts) {
      // Process each alert.
      $(alerts).each(function (idx, alert) {
        let messageContentObject = alert.getElementsByClassName("usa-alert__text"),
          cookieId;
        if (messageContentObject[0]) {
          // Generate a unique Id for cthe cookie based on alert's content.
          cookieId = "patternlab-alert-hide-" + stringToHash(messageContentObject[0].innerText);
        }

        // Message loads hidden to avoid flash if cookie is found.
        if (!getCookie(cookieId)) {
          // If the cookie doesn't exist , display the alert. 
          alert.classList.add("active");
        }

        //Attach an onclick handler to the close button of the alert.
        var alert_close = alert.getElementsByClassName("usa-alert__close");
        if (alert_close[0]) {
          alert_close[0].onclick = function alertClose() {
            if (alert.classList.contains("active")) {
              // Set a cookie to remember that alert has been dismissed.
              setCookie(cookieId, true, 7);
              // Hide the alert.
              alert.classList.remove("active");
            }
          };
        }
        // Mark the alert as procssed to avoid re-processing.
        alert.classList.add("cookie-processed");
      });
    }
  }, 200);

  // Helper functions
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // In case we add some logic
  function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }

  function stringToHash(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }
});
