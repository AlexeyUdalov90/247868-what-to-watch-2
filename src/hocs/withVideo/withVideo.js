import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isLoading: true,
        isPlaying: this.props.isPlaying,
      };
    }
    render() {
      return (
        <Component
          {...this.props}
          videoRef = {this._videoRef}
        />
      );
    }
    componentDidMount() {
      const {previewVideoLink} = this.props;
      const video = this._videoRef.current;

      video.src = previewVideoLink;
      video.muted = true;

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

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
