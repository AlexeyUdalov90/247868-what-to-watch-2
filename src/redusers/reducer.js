import {combineReducers} from 'redux';
import user from './user/user.js';
import load from './load/load.js';
import history from '../history.js';
import {saveUserData, requireAuthorization, changeFavoriteInPromoFilm, changeFavoriteInFilms, setReviews} from './actionCreator.js';

const reducer = combineReducers({user, load});

const Operation = {
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
  sendReview: (id, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, {rating, comment})
      .then((response) => {
        dispatch(setReviews(response.data));
      });
  }
};

export {
  reducer,
  Operation,
};
