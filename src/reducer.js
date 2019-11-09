import films from './moks/films.js';

const actionTypeChangeGenre = `CHANGE_GENRE`;

const filterFilms = (filmList, genre) => {
  if (genre === `All genres`) {
    return filmList;
  }
  return filmList.filter((film) => film.genre === genre);
};

const initialState = {
  genreActive: `All genres`,
  films,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: actionTypeChangeGenre,
    payload: genre
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeChangeGenre:
      return Object.assign({}, state, {
        genreActive: action.payload,
      });
  }
  return state;
};

export {
  reducer,
  ActionCreator,
  filterFilms,
};
