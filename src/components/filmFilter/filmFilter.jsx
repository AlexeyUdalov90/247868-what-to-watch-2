import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FilmFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      genreActive: this.props.genreActive,
      genres: this._getGenresList(this.props.films),
    };
  }
  _getGenresList(filmsList) {
    const genresList = new Set([`All genres`]);
    filmsList.forEach((film) => genresList.add(film.genre));
    return Array.from(genresList).sort();
  }
  _genreClickHandler(evt, genre) {
    evt.preventDefault();
    this.props.onChangeFilter(genre);
  }
  _getItemClass(genre) {
    if (genre === this.state.genreActive) {
      return `catalog__genres-item catalog__genres-item--active`;
    }
    return `catalog__genres-item`;
  }
  componentDidUpdate(prevProps) {
    if (this.props.genreActive !== prevProps.genreActive) {
      this.setState({
        genreActive: this.props.genreActive,
      });
    }
  }
  render() {
    return (
      <ul className="catalog__genres-list">
        {this.state.genres.map((genre, i) => {
          return (
            <li className={this._getItemClass(genre)} key={`${genre}-${i}`}>
              <a href="#" className="catalog__genres-link" onClick={(evt) => this._genreClickHandler(evt, genre)}>{genre}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

FilmFilter.propTypes = {
  films: PropTypes.array.isRequired,
  genreActive: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default FilmFilter;
