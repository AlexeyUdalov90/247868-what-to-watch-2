const getGenresList = (filmsList) => {
  const genresList = new Set();
  filmsList.forEach((film) => genresList.add(film.genre));
  return Array.from(genresList).sort();
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
  LOAD_FILMS: `LOAD_FILMS`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
  SAVE_USER_DATA: `SAVE_USER_DATA`,
};

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films.map((film) => getCorrectPropName(film)),
});

const getGenres = (films) => ({
  type: ActionType.GET_GENRES,
  payload: getGenresList(films),
});

const requireAuthorization = () => ({
  type: ActionType.REQUIRE_AUTH,
  payload: true,
});

const saveUserData = (data) => ({
  type: ActionType.SAVE_USER_DATA,
  payload: getCorrectPropName(data),
});

export {
  ActionType,
  changeGenre,
  loadFilms,
  getGenres,
  requireAuthorization,
  getGenresList,
  saveUserData,
};
