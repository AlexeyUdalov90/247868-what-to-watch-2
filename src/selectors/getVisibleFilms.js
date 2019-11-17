import {createSelector} from 'reselect';

const getFilmList = (state) => state.load.films;
const getActiveGenre = (state) => state.user.genreActive;

const getVisibleFilms = createSelector(
    [getFilmList, getActiveGenre],
    (filmList, genreActive) => {
      if (genreActive === `All genres`) {
        return filmList;
      }
      return filmList.filter((film) => film.genre === genreActive);
    }
);

export default getVisibleFilms;
