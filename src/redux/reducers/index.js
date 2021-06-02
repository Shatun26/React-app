import { combineReducers } from 'redux';
import { messageReducer } from './message';
import { postReducer } from './posts';

export const rootReducer = combineReducers({
  posts: postReducer,
  messages: messageReducer,
});
