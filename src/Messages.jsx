import classnames from 'classnames';
import React from 'react';
import { useMessages } from './controller/controller';
import { button, clear, h2 } from './styles/Messages.module.css';

export function Messages() {
  const [messages, clearMessages] = useMessages();

  const MessageList = () => messages.map((message, id) => <div key={id}>{message}</div>);

  return !messages || !messages.length ? null : (
    <div>
      <h2 className={h2}>Messages</h2>
      <button className={classnames(clear, button)} onClick={clearMessages}>
        clear
      </button>
      <MessageList />
    </div>
  );
}
