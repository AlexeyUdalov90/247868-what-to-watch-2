const getGenresList = (filmsList) => {
  const genresList = new Set();
  filmsList.forEach((film) => genresList.add(film.genre));
  return Array.from(genresList).sort();
};

const getCorrectPropName = (filmList) => {
  return filmList.map((film) => {
    for (let key in film) {
      if (key.includes(`_`)) {
        let newKey = key.split(`_`).map((item, i) => {
          if (i > 0) {
            return item[0].toUpperCase() + item.slice(1);
          }
          return item;
        }).join(``);
        film[newKey] = film[key];
        delete film[key];
      }
    }
    return film;
  });
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
};

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: getCorrectPropName(films),
});

const getGenres = (films) => ({
  type: ActionType.GET_GENRES,
  payload: getGenresList(films),
});

const requireAuthorization = () => ({
  type: ActionType.REQUIRE_AUTH,
  payload: true,
});

export {
  ActionType,
  changeGenre,
  loadFilms,
  getGenres,
  requireAuthorization,
  getGenresList,
};
