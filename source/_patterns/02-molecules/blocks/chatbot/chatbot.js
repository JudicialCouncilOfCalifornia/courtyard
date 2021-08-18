/**
 * This JS is partly taken from the script provided by the chatbot devs.
 *
 * As far as I can tell, I've taken all the useful code and added some
 * custom events so other scripts can react to the chatbot open or closed
 * state. The CSS and a2p.js initially provided are not functional.
 *
 * To support language switching in the future the chat bot should provide an
 * API we can send a language code to, to avoid cross origin issues. The method
 * of language switching in the CMS should trigger language change in the bot.
 */

document.addEventListener("DOMContentLoaded", function() {
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
    }

    if (e.data === "close" || e.message === "close") {
      // Allow event listener to react to close.
      window.dispatchEvent(eventChatClose);
    }
  });
});
