import * as actionsTypes from './actionsTypes';

export const increment = index => ({
  type: 'ADD_LIKE',
  index
});

export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
});

export const removeComment = (postId, i) => ({
  type: 'REMOVE_COMMENT',
  postId,
  i
});
