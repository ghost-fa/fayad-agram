import * as actionTypes from '../actions/actionsTypes';
import postsData from '../../data/post';
import { cloneDeep } from 'lodash/lang';
const posts = (state = postsData, action) => {
  const newPosts = cloneDeep(state);
  switch (action.type) {
    case actionTypes.ADD_LIKE:
      newPosts[action.index].likes += 1;
      return newPosts;
    default:
      return state;
  }
};

export default posts;
