import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isPlaying: this.props.isPlaying,
      };

      this._onPlay = this._onPlay.bind(this);
      this._onStop = this._onStop.bind(this);
      this._onLoaded = this._onLoaded.bind(this);
    }
    render() {
      return (
        <Component
          {...this.props}
          onPlay={this._onPlay}
          onStop={this._onStop}
          onLoaded={this._onLoaded}
        />
      );
    }
    _onPlay() {
      this.setState({
        isPlaying: true,
      });
    }
    _onStop() {
      this.setState({
        isPlaying: false,
      });
    }
    _onLoaded() {
      this.setState({
        isLoading: false,
      });
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
