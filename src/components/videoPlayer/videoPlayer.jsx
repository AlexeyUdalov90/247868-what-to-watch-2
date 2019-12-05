import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({poster, videoRef}) => {
  return (
    <video poster={poster} width="280" height="175" ref={videoRef} />
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  videoRef: PropTypes.object.isRequired,
};

export default VideoPlayer;
