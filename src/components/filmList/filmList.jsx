import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmCard/filmCard.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: {},
    };
  }
  _filmCardMouseEnterHandler(film) {
    this.setState({
      currentFilm: film,
    });
  }
  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film) => {
          return <FilmCard film={film} onClickTitle={this.props.onClickTitle} onMouseEnterFilm={this._filmCardMouseEnterHandler.bind(this)} key={film.id} />;
        })}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitle: PropTypes.func,
};

export default FilmList;
