import React from 'react';
import Posts from '../Posts/Posts';
import s from './Profile.module.css';
import ProfileOwner from './ProfileOwner/ProfileOwner';
export default function Profile(props) {
  return (
    <div>
      <div className={s.profileContainer}>
        <ProfileOwner />
        <Posts
        />
      </div>
    </div>
  );
}
