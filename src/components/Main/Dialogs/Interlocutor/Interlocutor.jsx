import React from 'react';
import s from './Interlocutor.module.css';
import Garik from '../../../../Prepare/Img/Garik.jpg';
import { NavLink } from 'react-router-dom';

export default function Interlocutor(props) {
  return (
    <NavLink activeClassName={s.active} to={'/dialogs/' + props.id} className={s.Interlocutor}>
      <div className={s.InterlocutorAvatar}>
        <img src={Garik} alt="" />
      </div>
      <p>{props.name}</p>
    </NavLink>
  );
}
