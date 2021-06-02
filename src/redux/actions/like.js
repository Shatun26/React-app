import * as type from '../type';
export const updateLike = (likeFlag) => {
  return {
    type: type.UPDATE_LIKE,
    payload: likeFlag,
  };
};
