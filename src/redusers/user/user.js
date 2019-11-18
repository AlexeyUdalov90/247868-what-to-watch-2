import {ActionType} from '../actionCreator.js';

const initialState = {
  genreActive: `All genres`,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genreActive: action.payload,
      });
  }
  return state;
};

export default user;
