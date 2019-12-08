import {ActionType} from '../actionCreator.js';

const initialState = {
  filmLoading: false,
  promoFilmLoading: false,
  reviewsLoading: false,
  favoriteFilmsLoading: false,
  films: [],
  promoFilm: {},
  favoriteFilms: [],
  genres: [],
  reviews: [],
  userData: {
    avatarUrl: ``,
  },
  isAuthorizationRequired: false,
};

const load = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILM_LOADING:
      return Object.assign({}, state, {
        filmLoading: true,
      });
    case ActionType.FILM_LOADED:
      return Object.assign({}, state, {
        filmLoading: false,
      });
    case ActionType.SET_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.GET_GENRES:
      return Object.assign({}, state, {
        genres: action.payload,
      });
    case ActionType.PROMO_FILM_LOADING:
      return Object.assign({}, state, {
        promoFilmLoading: true,
      });
    case ActionType.PROMO_FILM_LOADED:
      return Object.assign({}, state, {
        promoFilmLoading: false,
      });
    case ActionType.SET_PROMO_FILM:
      return Object.assign({}, state, {
        promoFilm: action.payload,
      });
    case ActionType.REQUIRE_AUTH:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });
    case ActionType.CHANGE_FAVORITE_IN_PROMO_FILM:
      if (state.promoFilm.id === action.payload.id) {
        return Object.assign({}, state, {
          promoFilm: action.payload,
        });
      } else {
        return state;
      }
    case ActionType.CHANGE_FAVORITE_IN_FILMS:
      const updateFilms = state.films.map((film) => {
        if (film.id === action.payload.id) {
          return Object.assign({}, film, action.payload);
        }
        return film;
      });
      return Object.assign({}, state, {
        films: updateFilms,
      });
    case ActionType.REVIEWS_LOADING:
      return Object.assign({}, state, {
        reviewsLoading: true,
      });
    case ActionType.REVIEWS_LOADED:
      return Object.assign({}, state, {
        reviewsLoading: false,
      });
    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.FAVORITE_FILMS_LOADING:
      return Object.assign({}, state, {
        favoriteFilmsLoading: true,
      });
    case ActionType.FAVORITE_FILMS_LOADED:
      return Object.assign({}, state, {
        favoriteFilmsLoading: false,
      });
    case ActionType.SET_FAVORITE_FILMS:
      return Object.assign({}, state, {
        favoriteFilms: action.payload,
      });
  }
  return state;
};

export default load;
