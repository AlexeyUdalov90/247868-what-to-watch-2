import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        disabledButton: true,
        rating: 0,
        comment: ``,
      };

      this._onChangeRatingHandler = this._onChangeRatingHandler.bind(this);
      this._onChangeCommentHandler = this._onChangeCommentHandler.bind(this);
      this._onSubmitHandler = this._onSubmitHandler.bind(this);
    }

    componentDidUpdate() {
      this._checkReviewData();
    }

    render() {
      return <Component
        {...this.props}
        disabledButton={this.state.disabledButton}
        rating={this.state.rating}
        comment={this.state.comment}
        onChangeCommentHandler={this._onChangeCommentHandler}
        onChangeRatingHandler={this._onChangeRatingHandler}
        onSubmitHandler={this._onSubmitHandler}
      />;
    }

    _onChangeRatingHandler(evt) {
      evt.target.previousElementSibling.checked = true;
      this.setState({
        rating: parseInt(evt.target.previousElementSibling.value, 10),
      });
    }

    _onChangeCommentHandler(evt) {
      this.setState({
        comment: evt.target.value,
      });
    }

    _onSubmitHandler(evt) {
      evt.preventDefault();
      const {sendReview, film} = this.props;
      sendReview(film.id, this.state.rating, this.state.comment);
    }

    _checkReviewData() {
      const MIN_LENGTH_COMMENT = 50;
      if (this.state.rating > 0 && MIN_LENGTH_COMMENT < this.state.comment.length) {
        this.setState({
          disabledButton: false,
        });
      } else {
        this.setState({
          disabledButton: true,
        });
      }
    }
  }

  WithReviewForm.propTypes = {
    film: PropTypes.object,
    sendReview: PropTypes.func,
  };

  return WithReviewForm;
};

export default withReviewForm;
