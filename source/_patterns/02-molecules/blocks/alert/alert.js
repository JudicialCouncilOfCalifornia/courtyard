$(document).ready(function() {
  setTimeout(function() {
    var alerts = $(".jcc-alert:not(.cookie-processed)");

    if (alerts) {
      $(alerts).each(function(idx, alert) {
        let messageContentObject = alert.getElementsByClassName("usa-alert__text"),
          cookieId;
        if (messageContentObject[0]) {
          cookieId = "patternlab-alert-hide-" + stringToHash(messageContentObject[0].innerText);
        }

        // Message loads hidden to avoid flash if cookie is found.
        if (!getCookie(cookieId)) {
          alert.classList.add("active");
        }
        var alert_close = alert.getElementsByClassName("jcc-alert__close");
        if (alert_close[0]) {
          alert_close[0].onclick = function alertClose() {
            if (alert.classList.contains("active")) {
              setCookie(cookieId, true, 7);
              alert.classList.remove("active");
            }
          };
        }
        alert.classList.add("cookie-processed");
      });
    }
  }, 10);

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
