import React, { useEffect, useState } from 'react';
import s from './Post.module.css';
import Garik from '../../../../Prepare/Img/Garik.jpg';
import { useDispatch } from 'react-redux';
import {
  deletePostAction,
  updateLikeAction,
  updatePostAction,
} from '../../../../redux/actions/post';
export default function Post({ id, date, time, text, likes, liked }) {
  const [isEditable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const handleDeletePost = () => {
    dispatch(deletePostAction(id));
  };
  const [textInput, setTextInput] = useState(text);
  useEffect(() => {
    setTextInput(text);
  }, [text]);
  const fixedText = textInput.replace(/[' ']+/g, ' ').trim();
  const handleUpdatePost = () => {
    if (isEditable) {
      dispatch(updatePostAction({ id, text: fixedText }));
      setEditable(false);
    }
  };
  const handleUpdateLike = () => {
    dispatch(updateLikeAction({ id }));
  };
  return (
    <div key={id} className={s.post}>
      <div className={s.postInfo}>
        <div className={s.postOwnerAvatar}>
          <img src={Garik} alt="" />
        </div>
        <p className={s.postOwner}>Garik Samarin</p>
        <div className={s.postDate}>
          <p>{date}</p>
          <p>{time}</p>
        </div>
        <div
          className={liked ? s.postLikesActive : s.postLikes}
          onClick={handleUpdateLike}
        >
          <div className={s.postLikeImg}>
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.582 12.943l-.58.586-.586-.586c-3.37-3.37-8.851-3.369-12.22-.001-1.627 1.619-2.523 3.79-2.523 6.115s.896 4.496 2.523 6.113l12.135 12.135c.179.18.418.28.673.28a.944.944 0 00.673-.28l11.299-11.306.836-.828c1.622-1.621 2.515-3.793 2.515-6.114s-.893-4.493-2.515-6.114c-3.367-3.368-8.852-3.369-12.23 0zm-13.005 8.573a.349.349 0 01-.343-.284 7.375 7.375 0 01-.128-1.372.35.35 0 01.7 0c0 .417.039.833.116 1.24a.35.35 0 01-.345.416zm.285-3.665a.35.35 0 01-.33-.467 7.135 7.135 0 011.704-2.686A7.234 7.234 0 0117 12.705a.35.35 0 11.132.688 6.541 6.541 0 00-3.4 1.8 6.463 6.463 0 00-1.54 2.425.35.35 0 01-.329.233z"
                fill="#494949"
              />
            </svg>
          </div>
          <p className={s.postLikesCounter}>{likes}</p>
        </div>
        <button onClick={handleDeletePost}>Delete</button>
        <button onClick={handleUpdatePost}>Edit</button>
      </div>
      {isEditable && (
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onDoubleClick={() => setEditable(!isEditable)}
        />
      )}
      {!isEditable && (
        <div
          className={s.postContent}
          onDoubleClick={() => setEditable(!isEditable)}
        >
          {text}
        </div>
      )}
    </div>
  );
}
