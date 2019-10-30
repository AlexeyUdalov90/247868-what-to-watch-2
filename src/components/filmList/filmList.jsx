import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmCard/filmCard.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: -1,
    };
  }
  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film, i) => {
          return <FilmCard film={film} isPlaying={i === this.state.currentFilm} onClickTitle={this.props.onClickTitle} onMouseEnterFilm={() => this.setState({
            currentFilm: i,
          })} onMouseLeaveFilm={() => this.setState({
            currentFilm: -1,
          })} key={film.id} />;
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
