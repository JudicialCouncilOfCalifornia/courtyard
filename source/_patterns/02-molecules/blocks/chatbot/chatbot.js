/**
 * This JS is partly taken from the script provided by the chatbot devs.
 *
 * As far as I can tell, I've taken all the useful code and added some
 * custom events so other scripts can react to the chatbot open or closed
 * state. The CSS and a2p.js initially provided are not functional.
 *
 * This code and a div with class jcc-chatbot shouldbe all we need. The chatbot
 * devs are responsible for making the button and the dialog look right.
 *
 * To support language switching in the future the chat bot should provide an
 * API we can send a language code to, to avoid cross origin issues. The method
 * of language switching in the CMS should trigger language change in the bot.
 */

var deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
var deviceHeight = window.innerHeight > 0 ? window.innerHeight : screen.height;
var frameWidth = deviceWidth < 420 ? deviceWidth - 20 : 440;
var frameHeight = deviceHeight < 830 ? deviceHeight - 50 : 750;

document.addEventListener("DOMContentLoaded", function() {
  (function() {
    var div = document.createElement("div");
    document.getElementById("jcc-chatbot").appendChild(div);
    div.outerHTML =
      "<iframe class='iframeBot' id='iframeBot' width='140px' height='60px' style='border-radius: 20px; border: 0; background: unset; z-index: 2000;' src='https://bot.vcsc.courts.ca.gov/chat.html'></iframe>";
  })();

  // Custom events dispatch on open/close so elements outside of iframe
  // can react.
  const eventChatOpen = new CustomEvent("chat-open", {
    bubbles: true
  });
  const eventChatClose = new CustomEvent("chat-close", {
    bubbles: true
  });

  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

  eventer(messageEvent, function(e) {
    if (e.data === "open" || e.message === "open") {
      // Allow event listener to react to open.
      window.dispatchEvent(eventChatOpen);

      document.getElementById("iframeBot").style.height = frameHeight + "px";
      document.getElementById("iframeBot").style.width = frameWidth + "px";
      document.getElementById("iframeBot").style.border = "1px #f4ad3b solid";
    }

    if (e.data === "close" || e.message === "close") {
      // Allow event listener to react to close.
      window.dispatchEvent(eventChatClose);

      document.getElementById("iframeBot").style.height = 60 + "px";
      document.getElementById("iframeBot").style.width = 140 + "px";
      document.getElementById("iframeBot").style.border = "0px none";
    }
  });
});
