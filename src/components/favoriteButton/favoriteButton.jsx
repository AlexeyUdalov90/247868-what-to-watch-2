import React from 'react';
import PropTypes from 'prop-types';

const getFavoriteState = (state) => {
  if (state) {
    return <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>;
  }

  return <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>;
};

const FavoriteButton = ({idFilm, isFavorite, toggleFavoriteFilm}) => {
  return <button className="btn btn--list movie-card__button" type="button" onClick={() => toggleFavoriteFilm(idFilm)}>
    {getFavoriteState(isFavorite)}
    <span>My list</span>
  </button>;
};

FavoriteButton.propTypes = {
  idFilm: PropTypes.number,
  isFavorite: PropTypes.bool,
  toggleFavoriteFilm: PropTypes.func,
};

export default FavoriteButton;
