import {ActionType} from '../actionCreator.js';

const initialState = {
  films: [],
  genres: [],
  userData: {
    avatarUrl: ``,
  },
  isAuthorizationRequired: false,
};

const load = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.GET_GENRES:
      return Object.assign({}, state, {
        genres: action.payload,
      });
    case ActionType.REQUIRE_AUTH:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });
  }
  return state;
};

export default load;
