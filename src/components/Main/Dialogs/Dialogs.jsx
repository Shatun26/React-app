import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../redux/actions/message';
import ArrivedMessage from './ArrivedMessage/ArrivedMessage';
import s from './Dialogs.module.css';
import Interlocutor from './Interlocutor/Interlocutor';
import Message from './Message/Message';

export default function Dialogs(props) {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [messageText, setMessageText] = useState('');
  const addMessage = () => {
    const newMesssage = {
      text: messageText,
      messageOwner: true,
    };
    const maxId =
      messages.lenght === 0 ? 0 : Math.max(...messages.map((m) => m.id));
    newMesssage.id = maxId + 1;
    dispatch(sendMessage(newMesssage));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.interlocutors}>
        <Interlocutor name={'Garik Samarin'}  />
      </div>
      <div className={s.messages}>
        {messages.map((m) => {
          if (m.messageOwner) {
            return <Message key={m.id} text={m.text} />;
          } else return <ArrivedMessage key={m.id} text={m.text} />;
        })}
      </div>
      <div className={s.inputBar}>
        <textarea
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              addMessage();
            }
          }}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Enter your message..."
        ></textarea>
        <button onClick={addMessage}>Enter</button>
      </div>
    </div>
  );
}
