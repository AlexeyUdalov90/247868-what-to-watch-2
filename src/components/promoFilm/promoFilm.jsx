import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Operation} from '../../redusers/reducer.js';

import Header from '../header/header.jsx';
import FavoriteButton from '../favoriteButton/favoriteButton.jsx';
import withFavoriteButton from '../../hocs/withFavoriteButton/withFavoriteButton.js';

const FavoriteButtonWrapped = withFavoriteButton(FavoriteButton);

const PromoFilm = ({promoFilm, promoFilmLoading, toggleFavoriteFilm, isAuthorizationRequired, avatarUrl}) => {
  if (promoFilmLoading) {
    return <div></div>;
  }
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promoFilm;
  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header isAuthorizationRequired={isAuthorizationRequired} avatarUrl={avatarUrl} personalClass={`movie-card__head`} />

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <FavoriteButtonWrapped idFilm={id} isFavorite={isFavorite} toggleFavoriteFilm={toggleFavoriteFilm} />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

PromoFilm.propTypes = {
  promoFilm: PropTypes.object,
  promoFilmLoading: PropTypes.bool,
  toggleFavoriteFilm: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  avatarUrl: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  promoFilmLoading: state.load.promoFilmLoading,
  promoFilm: state.load.promoFilm,
  isAuthorizationRequired: state.load.isAuthorizationRequired,
  avatarUrl: state.load.userData.avatarUrl,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavoriteFilm: (id, status) => {
      dispatch(Operation.toggleFavoriteFilm(id, status));
    },
  };
};

export {PromoFilm};

export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);
