const getGenresList = (filmsList) => {
  const genresList = new Set();
  filmsList.forEach((film) => genresList.add(film.genre));
  return Array.from(genresList).sort();
};

const getFilmRating = (rating) => {
  const roundRating = Math.round(rating);
  if (roundRating >= 0 && roundRating < 3) {
    return `Bad`;
  } else if (roundRating >= 3 && roundRating < 5) {
    return `Normal`;
  } else if (roundRating >= 5 && roundRating < 8) {
    return `Good`;
  } else if (roundRating >= 8 && roundRating < 10) {
    return `Very good`;
  } else if (roundRating === 10) {
    return `Awesome`;
  }
  return ``;
};

const getDate = (dateString) => {
  const Month = {
    0: `January`,
    1: `February`,
    2: `March`,
    3: `April`,
    4: `May`,
    5: `June`,
    6: `July`,
    7: `August`,
    8: `September`,
    9: `October`,
    10: `November`,
    11: `December`,
  };
  const date = {
    year: new Date(dateString).getFullYear(),
    monthNumber: () => {
      const month = new Date(dateString).getMonth();
      if (month < 10) {
        return `0` + month;
      }
      return month;
    },
    monthString: () => Month[new Date(dateString).getMonth()],
    day: () =>{
      const day = new Date(dateString).getDate();
      if (day < 10) {
        return `0` + day;
      }
      return day;
    },
  };
  return [`${date.year}-${date.monthNumber()}-${date.day()}`, `${date.monthString()} ${date.day()}, ${date.year}`];
};

const getCorrectPropName = (data) => {
  for (let key in data) {
    if (key.includes(`_`)) {
      let newKey = key.split(`_`).map((item, i) => {
        if (i > 0) {
          return item[0].toUpperCase() + item.slice(1);
        }
        return item;
      }).join(``);
      data[newKey] = data[key];
      delete data[key];
    }
  }
  return data;
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SET_FILMS: `SET_FILMS`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
  SAVE_USER_DATA: `SAVE_USER_DATA`,
  CHANGE_FAVORITE_IN_PROMO_FILM: `CHANGE_FAVORITE_IN_PROMO_FILM`,
  CHANGE_FAVORITE_IN_FILMS: `CHANGE_FAVORITE_IN_FILMS`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
  FILM_LOADING: `FILM_LOADING`,
  FILM_LOADED: `FILM_LOADED`,
  PROMO_FILM_LOADING: `PROMO_FILM_LOADING`,
  PROMO_FILM_LOADED: `PROMO_FILM_LOADED`,
  REVIEWS_LOADING: `REVIEWS_LOADING`,
  REVIEWS_LOADED: `REVIEWS_LOADED`,
  SET_REVIEWS: `SET_REVIEWS`,
};

const loadFilms = () => (dispatch, _, api) => {
  dispatch({type: ActionType.FILM_LOADING});
  api.get(`/films`)
    .then((response) => {
      dispatch({type: ActionType.FILM_LOADED});
      dispatch(setFilms(response.data));
      dispatch(getGenres(response.data));
    });
};

const setFilms = (films) => ({
  type: ActionType.SET_FILMS,
  payload: films.map((film) => getCorrectPropName(film)),
});

const getGenres = (films) => ({
  type: ActionType.GET_GENRES,
  payload: getGenresList(films),
});

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

const loadPromoFilm = () => (dispatch, _, api) => {
  dispatch({type: ActionType.PROMO_FILM_LOADING});
  api.get(`/films/promo`)
    .then((response) => {
      dispatch({type: ActionType.PROMO_FILM_LOADED});
      dispatch(setPromoFilm(response.data));
    });
};

const loadReviews = (idFilm) => (dispatch, _, api) => {
  dispatch({type: ActionType.REVIEWS_LOADING});
  api.get(`/comments/${idFilm}`)
    .then((response) => {
      dispatch({type: ActionType.REVIEWS_LOADED});
      dispatch(setReviews(response.data));
    });
};

const setPromoFilm = (film) => ({
  type: ActionType.SET_PROMO_FILM,
  payload: getCorrectPropName(film),
});

const setReviews = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: status,
});

const saveUserData = (data) => ({
  type: ActionType.SAVE_USER_DATA,
  payload: getCorrectPropName(data),
});

const changeFavoriteInPromoFilm = (film) => ({
  type: ActionType.CHANGE_FAVORITE_IN_PROMO_FILM,
  payload: getCorrectPropName(film),
});

const changeFavoriteInFilms = (film) => ({
  type: ActionType.CHANGE_FAVORITE_IN_FILMS,
  payload: getCorrectPropName(film),
});

export {
  ActionType,
  changeGenre,
  loadFilms,
  getGenres,
  getFilmRating,
  requireAuthorization,
  getGenresList,
  saveUserData,
  changeFavoriteInPromoFilm,
  changeFavoriteInFilms,
  loadPromoFilm,
  getDate,
  loadReviews,
  setReviews,
  setFilms,
  setPromoFilm
};
