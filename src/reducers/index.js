import { combineReducers } from 'redux';

import storyReducer from './storyReducer';
import commentsReducers from './commentsReducers';
export default combineReducers({
  stories:  storyReducer,
  comments: commentsReducers
});
