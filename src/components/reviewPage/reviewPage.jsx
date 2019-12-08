import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import {Operation} from '../../redusers/reducer.js';
import getFilm from '../../selectors/getFilm.js';

import withReviewForm from '../../hocs/withReviewForm/withReviewForm.js';

const ReviewPage = ({film, isAuthorizationRequired, avatarUrl, disabledButton, comment, onChangeCommentHandler, onChangeRatingHandler, onSubmitHandler}) => {
  const {backgroundImage, name, posterImage, id} = film;

  return (<section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header isAuthorizationRequired={isAuthorizationRequired} avatarUrl={avatarUrl} personalClass={``}>
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      </Header>

      <div className="movie-card__poster movie-card__poster--small">
        <img src={posterImage} alt={name} width="218" height="327" />
      </div>
    </div>

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
            <label className="rating__label" forhtml="star-1" onClick={onChangeRatingHandler}>Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" forhtml="star-2" onClick={onChangeRatingHandler}>Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" forhtml="star-3" onClick={onChangeRatingHandler}>Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" forhtml="star-4" onClick={onChangeRatingHandler}>Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" forhtml="star-5" onClick={onChangeRatingHandler}>Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength="50" maxLength="400" value={comment} onChange={onChangeCommentHandler}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={disabledButton ? `disabled` : ``}>Post</button>
          </div>
        </div>
      </form>
    </div>
  </section>);
};

ReviewPage.propTypes = {
  film: PropTypes.object,
  isAuthorizationRequired: PropTypes.bool,
  avatarUrl: PropTypes.string,
  sendReview: PropTypes.func,
  disabledButton: PropTypes.bool,
  rating: PropTypes.number,
  comment: PropTypes.string,
  onChangeCommentHandler: PropTypes.func,
  onChangeRatingHandler: PropTypes.func,
  onSubmitHandler: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, state, {
  film: getFilm(state, ownProps),
  isAuthorizationRequired: state.load.isAuthorizationRequired,
  avatarUrl: state.load.userData.avatarUrl,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendReview: (id, rating, comment) => {
      dispatch(Operation.sendReview(id, rating, comment));
    },
  };
};

export {ReviewPage};

export default connect(mapStateToProps, mapDispatchToProps)(withReviewForm(ReviewPage));
