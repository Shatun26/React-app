import * as type from '../type';
export const sendMessage = (message) => {
  return {
    type: type.ADD_MESSAGE,
    payload: message,
  };
};
