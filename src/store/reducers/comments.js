import * as actionTypes from '../actions/actionsTypes';
import commetsData from '../../data/comments';
import { cloneDeep } from 'lodash/lang';
const comments = (state = commetsData, action) => {
  const newCompent = cloneDeep(state);
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      newCompent[action.index].text += 1;
      return newCompent;

    default:
      return state;
  }
};

export default comments;
