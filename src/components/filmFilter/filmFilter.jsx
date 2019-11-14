import React from 'react';
import PropTypes from 'prop-types';

const FilmFilter = ({activeItem, genres, onChangeActiveItem, onChangeFilter}) => {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeItem === -1 ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={(evt) => {
          evt.preventDefault();
          onChangeActiveItem(-1);
          onChangeFilter(`All genres`);
        }}>All genres</a>
      </li>
      {genres.map((genre, i) => {
        return (
          <li className={`catalog__genres-item ${activeItem === i ? `catalog__genres-item--active` : ``}`} key={`${genre}-${i}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
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
};

export default FilmFilter;
