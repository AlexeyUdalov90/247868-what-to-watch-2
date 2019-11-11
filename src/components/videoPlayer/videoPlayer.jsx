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
    return (
      <video poster={poster} width="280" height="175" ref={this._videoRef}/>
    );
  }
  componentDidMount() {
    const {video: videoLink} = this.props;
    const {isMuted} = this.state;
    const video = this._videoRef.current;

    video.src = videoLink;
    video.muted = isMuted;

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
  video: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
};

export default VideoPlayer;
