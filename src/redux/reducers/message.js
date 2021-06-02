import * as type from '../type';

const initialState = [
  
];

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
