import React from 'react';
import { useMessages } from './controller';
import { h2, clear, button } from './styles/Messages.module.css';
import classnames from 'classnames';

export function Messages() {
  const [messages, clearMessages] = useMessages();

  const MessageList = () => messages.map((message, id) => <div key={id}>{message}</div>);

  return !messages ? null : (
    <div>
      <h2 className={h2}>Messages</h2>
      <button className={classnames(clear, button)} onClick={clearMessages}>
        clear
      </button>
      <MessageList />
    </div>
  );
}
