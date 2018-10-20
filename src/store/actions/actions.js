import * as actionTypes from './actionsTypes';

export const addone = () => ({
  type: actionTypes.ADD_LIKE
});

export const addcomment = () => ({
  type: actionTypes.ADD_COMMENT
});

export const deletcomment = () => ({
  type: actionTypes.REMOVE_COMMENT
});
