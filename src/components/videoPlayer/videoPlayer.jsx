import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }
  componentDidMount() {
    const {previewVideoLink, onPlay, onLoaded, onStop} = this.props;
    const video = this._videoRef.current;

    video.src = previewVideoLink;
    video.muted = true;

    video.oncanplaythrough = () => {
      onLoaded();
    };

    video.onplay = () => {
      onPlay();
    };

    video.onpause = () => {
      video.load();
      onStop();
    };
  }
  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
  render() {
    const {poster} = this.props;
    return <video poster={poster} width="280" height="175" ref={this._videoRef} />;
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  onPlay: PropTypes.func,
  onStop: PropTypes.func,
  onLoaded: PropTypes.func,
};

export default VideoPlayer;
