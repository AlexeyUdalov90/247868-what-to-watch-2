import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../videoPlayer/videoPlayer.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timerId = null;

    this.state = {
      isPlaying: props.isPlaying,
    };

    this._mouseEnterFilmHandler = this._mouseEnterFilmHandler.bind(this);
    this._mouseLeaveFilmHandler = this._mouseLeaveFilmHandler.bind(this);
  }
  _mouseEnterFilmHandler() {
    this.props.onMouseEnterFilm();
    this._timerId = setTimeout(() => {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    }, 1000);
  }
  _mouseLeaveFilmHandler() {
    this.props.onMouseLeaveFilm();
    if (this.state.isPlaying) {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
      }));
    } else {
      clearTimeout(this._timerId);
    }
  }
  render() {
    const {film: {name, imageUrl, video}, onClickTitle} = this.props;
    const {isPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter= {this._mouseEnterFilmHandler} onMouseLeave={this._mouseLeaveFilmHandler}>
        <div className="small-movie-card__image">
          <VideoPlayer poster={imageUrl} videoInfo={video} isPlaying={isPlaying} />
          {/* <img src={imageUrl} alt={name} width="280" height="175" /> */}
        </div>
        <h3 className="small-movie-card__title" onClick={onClickTitle}>
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    video: PropTypes.object.isRequired,
  }),
  onClickTitle: PropTypes.func,
  onMouseEnterFilm: PropTypes.func,
  onMouseLeaveFilm: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default FilmCard;
