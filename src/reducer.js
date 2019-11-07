import films from './moks/films.js';

const filterFilms = (genre, filmsList) => {
  return filmsList.filter((film) => film.genre === genre);
};

const initialState = {
  genreActive: `All genres`,
  films,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre
  }),
  changeFilmList: (genre, filmList = initialState.films) => {
    if (genre === `All genres`) {
      return {
        type: `RESET_FILTER`,
      };
    }
    const newFilmList = filterFilms(genre, filmList);
    return {
      type: `CHANGE_FILM_LIST`,
      payload: newFilmList,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        genreActive: action.payload,
      });
    case `CHANGE_FILM_LIST`:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case `RESET_FILTER`:
      return Object.assign({}, initialState);
  }

  return state;
};

export {
  reducer,
  ActionCreator,
};
