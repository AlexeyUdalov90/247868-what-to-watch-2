import {createSelector} from 'reselect';

const getFilmList = (state) => state.load.films;
const getActiveFilmId = (state, props) => props.match.params.id;

const getFilm = createSelector(
    [getFilmList, getActiveFilmId],
    (filmList, activeFilmId) => {
      return filmList.find((film) => {
        return film.id === parseInt(activeFilmId, 10);
      });
    }
);

export default getFilm;
