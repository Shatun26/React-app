import React from 'react';
import s from './ProfileOwner.module.css';
export default function ProfileOwner() {
  return (
    <div className={s.profileOwner}>
      <div className={s.avatar}></div>
      <div className={s.discription}>
        <h1>Garik Samarin</h1>
        <h2>Date of Birth: 28 May</h2>
        <h3>City: Tagan Marm</h3>
        <h4>Education BSU'11</h4>
        <h5>Web site: https://vk.com/stalnoy_topor_drovoseka </h5>
      </div>
    </div>
  );
}
