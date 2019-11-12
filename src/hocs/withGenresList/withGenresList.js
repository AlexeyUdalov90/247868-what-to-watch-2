import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withGenresList = (Component) => {
  class WithGenresList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        genres: this._getGenresList(this.props.films),
      };
    }

    _getGenresList(filmsList) {
      const genresList = new Set();
      filmsList.forEach((film) => genresList.add(film.genre));
      return Array.from(genresList).sort();
    }

    render() {
      return <Component
        {...this.props}
        genres = {this.state.genres}
      />;
    }
  }

  WithGenresList.propTypes = {
    films: PropTypes.array.isRequired,
  };

  return WithGenresList;
};

export default withGenresList;
