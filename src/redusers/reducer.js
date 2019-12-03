import {combineReducers} from 'redux';
import user from './user/user.js';
import load from './load/load.js';
import history from '../history.js';
import {loadFilms, getGenres, saveUserData, requireAuthorization, changeFavoriteInPromoFilm, changeFavoriteInFilms} from './actionCreator.js';

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
        dispatch(saveUserData(response.data));
        dispatch(requireAuthorization(false));
        history.push(`/`);
      });
  },
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(saveUserData(response.data));
        dispatch(requireAuthorization(false));
      })
      .catch(() => {
        dispatch(requireAuthorization(true));
      });
  },
  toggleFavoriteFilm: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        dispatch(changeFavoriteInPromoFilm(response.data));
        dispatch(changeFavoriteInFilms(response.data));
      });
  },
};

export {
  reducer,
  Operation,
};
