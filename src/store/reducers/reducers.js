import * as actionTypes from '../actions/actionsTypes';

const initState = {
  like: 0
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LIKE:
      return {
        ...state,
        like: state.like + 1
      };

      break;
    default:
      return state;
  }
};

export default reducer;
