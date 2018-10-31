import * as actionTypes from '../actions/actionsTypes';
import comments from './comments';
import posts from './posts';

import { combineReducers } from 'redux';

export default combineReducers({
  comments,
  posts
});
