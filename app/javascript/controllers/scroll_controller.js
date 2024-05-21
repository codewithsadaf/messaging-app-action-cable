import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  connect(){
    const messagesDiv = document.getElementById('messages');

    function loadOlderMessages() {
      messagesDiv.scrollTop = olderMessages.scrollHeight;
    }

    messagesDiv.addEventListener('scroll', () => {
      if (messagesDiv.scrollTop === 0) {
        loadOlderMessages();
      }
    });

    window.addEventListener('load', () => {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

    function scrollToBottom() {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    const observer = new MutationObserver(scrollToBottom);
    observer.observe(messagesDiv, { childList: true });

    scrollToBottom();
  }
  resetScroll(){
    const bottomOfScroll = messages.scrollHeight - messages.clientHeight;
  }
}
