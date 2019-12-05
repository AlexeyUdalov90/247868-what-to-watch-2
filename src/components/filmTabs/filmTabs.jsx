import React from 'react';
import PropTypes from 'prop-types';

import {getFilmRating, getDate} from '../../redusers/actionCreator.js';

const getActiveTabInfo = (activeTab, film, reviews, reviewsLoading) => {
  const {rating, description, director, starring, scoresCount, runTime, genre, released} = film;
  switch (activeTab) {
    case 0:
      return (<React.Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{getFilmRating(rating)}</span>
            <span className="movie-rating__count">{scoresCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
        </div>
      </React.Fragment>);
    case 1:
      return (<div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.join(`, `)}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{`${runTime / 60 | 0}h ${runTime % 60}m`}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>);
    case 2:
      if (reviewsLoading) {
        return <div></div>;
      } else {
        return (<div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.slice(0, 4).map((review) => {
              const date = getDate(review.date);
              return <div className="review" key={`rewiew-${review.id}`}>
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={date[0]}>{date[1]}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{review.rating}</div>
              </div>;
            })}
          </div>
          <div className="movie-card__reviews-col">
            {reviews.slice(4, 7).map((review) => {
              const date = getDate(review.date);
              return <div className="review" key={`rewiew-${review.id}`}>
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={date[0]}>{date[1]}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{review.rating}</div>
              </div>;
            })}
          </div>
        </div>);
      }
  }
  return (<div></div>);
};

const FilmTabs = ({activeTab, onChangeActiveTab, film, reviews, reviewsLoading}) => {
  const tabs = [`Overview`, `Details`, `Reviews`];
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => {
            return <li className={`movie-nav__item ${activeTab === i ? `movie-nav__item--active` : ``}`} key={`${tab}-${i}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                onChangeActiveTab(i);
              }}>{tab}</a>
            </li>;
          })}
        </ul>
      </nav>
      {getActiveTabInfo(activeTab, film, reviews, reviewsLoading)}
    </div>
  );
};

FilmTabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  reviewsLoading: PropTypes.bool.isRequired,
};

export default FilmTabs;
