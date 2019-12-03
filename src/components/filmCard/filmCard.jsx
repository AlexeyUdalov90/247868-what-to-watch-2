import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import history from '../../history.js';
import PropTypes from 'prop-types';

import VideoPlayer from '../videoPlayer/videoPlayer.jsx';
import withVideo from '../../hocs/withVideo/withVideo.js';

const VideoPlayerWrapped = withVideo(VideoPlayer);

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timerId = null;

    this._mouseEnterFilmHandler = this._mouseEnterFilmHandler.bind(this);
    this._mouseLeaveFilmHandler = this._mouseLeaveFilmHandler.bind(this);
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  render() {
    const {film: {id, name, previewImage, previewVideoLink}, isPlaying} = this.props;

    return (<article className="small-movie-card catalog__movies-card" onMouseEnter={this._mouseEnterFilmHandler} onMouseLeave={this._mouseLeaveFilmHandler} onClick={this._onClickHandler}>
      <div className="small-movie-card__image">
        <VideoPlayerWrapped poster={previewImage} previewVideoLink={previewVideoLink} isPlaying={isPlaying} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>);
  }

  _mouseEnterFilmHandler() {
    const {onMouseEnterFilmHandler} = this.props;
    this._timerId = setTimeout(() => {
      onMouseEnterFilmHandler();
    }, 1000);
  }
  _mouseLeaveFilmHandler() {
    const {onMouseLeaveFilmHandler, isPlaying} = this.props;
    if (isPlaying) {
      onMouseLeaveFilmHandler();
    } else {
      clearTimeout(this._timerId);
    }
  }
  _onClickHandler() {
    const {film: {id}} = this.props;
    history.push(`/films/${id}`);
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  onMouseEnterFilmHandler: PropTypes.func,
  onMouseLeaveFilmHandler: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default FilmCard;
