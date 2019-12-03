import {createSelector} from 'reselect';

const getFilmList = (state) => state.load.films;
const getActiveFilmId = (state, props) => props.match.params.id;

const getMoreLikeFilms = createSelector(
    [getFilmList, getActiveFilmId],
    (filmList, activeFilmId) => {
      const genre = filmList.find((film) => {
        return film.id === parseInt(activeFilmId, 10);
      }).genre;
      return filmList.filter((film) => {
        return film.genre === genre;
      });
    }
);

export default getMoreLikeFilms;
