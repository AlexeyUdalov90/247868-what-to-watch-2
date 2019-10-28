import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({film: {id, name, imageUrl}, onClickTitle, onMouseEnterFilm}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onMouseEnterFilm({id, name, imageUrl});
    }}>
      <div className="small-movie-card__image">
        <img src={imageUrl} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onClickTitle}>
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  onClickTitle: PropTypes.func,
  onMouseEnterFilm: PropTypes.func,
};

export default FilmCard;
