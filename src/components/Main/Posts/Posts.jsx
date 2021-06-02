import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction } from '../../../redux/actions/post';
import { formattedDate, formattedTime } from '../../../utils';
import Post from './Post/Post';
import s from './Posts.module.css';

export default function Posts(props) {
  const dispatch = useDispatch();

  const [postText, setPostText] = useState('');

  const addPost = () => {
    const fixedText = postText.replace(/[' ']+/g, ' ').trim();
    if (fixedText !== '' && fixedText !== ' ') {
      const newPost = {
        text: fixedText,
        likes: 0,
        date: formattedDate(),
        time: formattedTime(),
      };
      const maxId = !posts.length ? 0 : Math.max(...posts.map((p) => p.id));
      newPost.id = maxId + 1;
      dispatch(addPostAction(newPost));
      input.current.value = '';
      setPostText('');
    } else {
      input.current.value = '';
    }
  };
  const input = useRef();

  const posts = useSelector((state) => state.posts);
  return (
    <div className={s.posts}>
      <h1 className={s.postsTitle}>My Posts</h1>
      <div className={s.postsForm}>
        <input
          ref={input}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              addPost();
            }
          }}
          onChange={(e) => setPostText(e.target.value)}
          className={s.postsInput}
          placeholder="Your news..."
          type="text"
        />
        <button onClick={addPost} className={s.postsBtn}>
          Send
        </button>
      </div>
      {posts.map((post) => (
        <Post
          id={post.id}
          likes={post.likes}
          text={post.text}
          date={post.date}
          time={post.time}
          liked={post.liked}
        />
      ))}
    </div>
  );
}
