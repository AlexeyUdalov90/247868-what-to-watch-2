import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withFavoriteButton = (Component) => {
  class WithFavoriteButton extends PureComponent {
    constructor(props) {
      super(props);

      const {isFavorite} = this.props;

      this.state = {
        isFavoriteFilm: isFavorite,
      };

      this._toggleFavoriteFilm = this._toggleFavoriteFilm.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.isFavorite !== prevProps.isFavorite) {
        this.setState({
          isFavoriteFilm: this.props.isFavorite,
        });
      }
    }

    render() {
      return <Component
        {...this.props}
        isFavorite = {this.state.isFavoriteFilm}
        toggleFavoriteFilm = {this._toggleFavoriteFilm}
      />;
    }

    _toggleFavoriteFilm(id) {
      const {isFavoriteFilm} = this.state;
      const {toggleFavoriteFilm} = this.props;

      toggleFavoriteFilm(id, isFavoriteFilm ? 0 : 1);
    }
  }

  WithFavoriteButton.propTypes = {
    isFavorite: PropTypes.bool,
    toggleFavoriteFilm: PropTypes.func.isRequired,
  };

  return WithFavoriteButton;
};

export default withFavoriteButton;
