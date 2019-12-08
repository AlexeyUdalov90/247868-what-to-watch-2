import React from 'react';
import PropTypes from 'prop-types';

const FilmFilter = ({activeItem, genres, onChangeActiveItem, onChangeFilter, resetFilmList}) => {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeItem === -1 ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          resetFilmList();
          onChangeActiveItem(-1);
          onChangeFilter(`All genres`);
        }}>All genres</a>
      </li>
      {genres.slice(0, 10).map((genre, i) => {
        return (
          <li className={`catalog__genres-item ${activeItem === i ? `catalog__genres-item--active` : ``}`} key={`${genre}-${i}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              resetFilmList();
              onChangeActiveItem(i);
              onChangeFilter(genre);
            }}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

FilmFilter.propTypes = {
  activeItem: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  resetFilmList: PropTypes.func,
};

export default FilmFilter;
