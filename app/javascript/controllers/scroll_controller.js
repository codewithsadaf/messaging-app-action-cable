import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  connect(){
    console.log("Connected scroll");
    const messages = document.getElementById("messages");
    messages.addEventListener("DOMNodeInserted", this.resetScroll);
    this.resetScroll(messages);
  }
  resetScroll(){
    const bottomOfScroll = messages.scrollHeight - messages.clientHeight;
  }
}
