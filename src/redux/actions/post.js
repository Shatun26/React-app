import * as type from '../type';
export const addPostAction = (post) => {
  return {
    type: type.ADD_POSTS,
    payload: post,
  };
};
export const deletePostAction = (id) => {
  return {
    type: type.DELETE_POST,
    payload: id,
  };
};
export const updatePostAction = (post) => {
  return {
    type: type.UPDATE_POST,
    payload: post,
  };
};
export const updateLikeAction = (likeFlag) => {
  return {
    type: type.UPDATE_LIKE,
    payload: likeFlag,
  };
};
