import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Operation} from '../../redusers/reducer.js';
import {loadReviews} from '../../redusers/actionCreator.js';
import Header from '../header/header.jsx';
import FilmList from '../filmList/filmList.jsx';
import FavoriteButton from '../favoriteButton/favoriteButton.jsx';
import FilmTabs from '../filmTabs/filmTabs.jsx';
import getFilm from '../../selectors/getFilm.js';
import getMoreLikeFilms from '../../selectors/getMoreLikeFilms.js';
import withActiveItem from '../../hocs/withActiveItem/withActiveItem.js';
import withFavoriteButton from '../../hocs/withFavoriteButton/withFavoriteButton.js';
import withTabs from '../../hocs/withTabs/withTabs.js';

const FilmListWrapped = withActiveItem(FilmList);
const FavoriteButtonWrapped = withFavoriteButton(FavoriteButton);
const FilmTabsWrapped = withTabs(FilmTabs);

class DetailPage extends Component {
  componentDidMount() {
    this.props.loadReviews(this.props.film.id);
  }
  render() {
    const {film, moreLikeFilms, filmLoading, isAuthorizationRequired, avatarUrl, toggleFavoriteFilm, reviewsLoading, reviews} = this.props;
    const {id, name, genre, backgroundImage, isFavorite, posterImage, released} = film;

    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isAuthorizationRequired={isAuthorizationRequired} avatarUrl={avatarUrl} />

          <div className="movie-card__wrap">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmTabsWrapped film={film} reviewsLoading={reviewsLoading} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <FilmListWrapped films={moreLikeFilms} filmLoading={filmLoading} />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

DetailPage.propTypes = {
  film: PropTypes.object,
  filmLoading: PropTypes.bool,
  moreLikeFilms: PropTypes.array,
  isAuthorizationRequired: PropTypes.bool,
  avatarUrl: PropTypes.string,
  toggleFavoriteFilm: PropTypes.func,
  reviewsLoading: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilm(state, ownProps),
  filmLoading: state.load.filmLoading,
  moreLikeFilms: getMoreLikeFilms(state, ownProps),
  isAuthorizationRequired: state.load.isAuthorizationRequired,
  avatarUrl: state.load.userData.avatarUrl,
  reviewsLoading: state.load.reviewsLoading,
  reviews: state.load.reviews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavoriteFilm: (id, status) => {
      dispatch(Operation.toggleFavoriteFilm(id, status));
    },
    loadReviews: (filmId) => {
      dispatch(loadReviews(filmId));
    },
  };
};

export {DetailPage};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
