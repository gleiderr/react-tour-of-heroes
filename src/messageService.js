let messages = [];
export default class MessageService {
  static add(message) {
    messages.push(message);
  }

  static clear() {
    messages = [];
  }
}
