let messages = [];
let notify = () => {};
export default class MessageService {
  static add(message) {
    messages.push(message);
    notify(messages);
  }

  static clear() {
    messages = [];
    notify(messages);
  }

  static onChange(f) {
    notify = f;
  }
}
