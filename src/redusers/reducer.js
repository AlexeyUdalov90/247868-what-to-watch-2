import {combineReducers} from 'redux';
import user from './user/user.js';
import load from './load/load.js';
import {loadFilms, getGenres, saveUserData} from './actionCreator.js';

const reducer = combineReducers({user, load});

const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(loadFilms(response.data));
        dispatch(getGenres(response.data));
      });
  },
  authorization: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        if (!response.hasOwnProperty(`isAxiosError`)) {
          dispatch(saveUserData(response.data));
        }
      });
  },
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (!response.hasOwnProperty(`isAxiosError`)) {
          dispatch(saveUserData(response.data));
        }
      });
  }
};

export {
  reducer,
  Operation,
};
