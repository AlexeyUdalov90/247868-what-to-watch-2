import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
      isMuted: true,
    };
  }
  render() {
    const {poster} = this.props;
    const {isMuted} = this.state;
    return (
      <video poster={poster} muted={isMuted} width="280" height="175" ref={this._videoRef}/>
    );
  }
  componentDidMount() {
    const {videoInfo} = this.props;
    const video = this._videoRef.current;

    video.src = videoInfo.url;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      video.load();
      this.setState({
        isPlaying: false,
      });
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
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  videoInfo: PropTypes.exact({
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool,
};

export default VideoPlayer;
