import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmCard/filmCard.jsx';

const FilmList = ({films, activeItem, onChangeActiveItem, filmLoading}) => {
  if (filmLoading) {
    return <div></div>;
  }
  return <React.Fragment>
    {films.map((film, i) => {
      return <FilmCard film={film} isPlaying={i === activeItem} onMouseEnterFilmHandler={() => onChangeActiveItem(i)} onMouseLeaveFilmHandler={() => onChangeActiveItem(-1)} key={film.id} />;
    })}
  </React.Fragment>;
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  activeItem: PropTypes.number.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  filmLoading: PropTypes.bool.isRequired,
};

export default FilmList;
