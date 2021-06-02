import React from 'react';
import s from './Message.module.css';
import Garik from '../../../../Prepare/Img/Garik.jpg';

export default function Message(props) {
  return (
    <div  className={s.message}
    >
      <p>{props.text}</p>
      <div className={s.messageOwner}>
        <img src={Garik} alt="" />
      </div>
      <div className={s.messageStyleElement}></div>
    </div>
  );
}
