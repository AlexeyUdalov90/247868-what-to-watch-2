import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmCard/filmCard.jsx';

const FilmList = ({films, onClickTitle, activeItem, onChangeActiveItem}) => {
  return <div className="catalog__movies-list">
    {films.map((film, i) => {
      return <FilmCard film={film} isPlaying={i === activeItem} onClickTitle={onClickTitle} onMouseEnterFilm={onChangeActiveItem} key={film.id} />;
    })}
  </div>;
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeItem: PropTypes.number.isRequired,
  onClickTitle: PropTypes.func,
  onChangeActiveItem: PropTypes.func.isRequired,
};

export default FilmList;
