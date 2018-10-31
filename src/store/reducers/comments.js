import * as actionTypes from '../actions/actionsTypes';
import commetsData from '../../data/comments';
const comments = (state = commetsData, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        user: action.author,
        text: action.comment
      };
    default:
      return state;
  }
};

export default comments;
