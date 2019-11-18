import {combineReducers} from 'redux';
import user from './user/user.js';
import load from './load/load.js';
import {loadFilms, getGenres, requireAuthorization} from './actionCreator.js';

const reducer = combineReducers({user, load});

const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(loadFilms(response.data));
        dispatch(getGenres(response.data));
      });
  },
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(requireAuthorization(response.data));
      });
  }
};

export {
  reducer,
  Operation,
};
