import React from 'react';
import s from './ArrivedMessage.module.css';
import Garik from '../../../../Prepare/Img/Garik.jpg';

export default function ArrivedMessage(props) {
  return (
    
      <div className={s.ArrivedMessage}>
        <p>
          {props.text}
        </p>
        <div className={s.messageOwner}>
          <img src={Garik} alt="" />
        </div>
        <div className={s.messageStyleElement}></div>
      </div>
    
  );
}
