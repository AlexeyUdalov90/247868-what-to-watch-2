import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './videoPlayer.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Play video`, () => {
  const moсkVideo = {
    url: ``,
    type: ``,
  };

  const video = mount(<VideoPlayer poster={``} videoInfo={moсkVideo} isPlaying={false}/>);
  video.setState({
    isPlaying: true,
  });
  expect(video.state().isPlaying).toEqual(true);
});

it(`Stop video`, () => {
  const moсkVideo = {
    url: ``,
    type: ``,
  };

  const video = mount(<VideoPlayer poster={``} videoInfo={moсkVideo} isPlaying={true}/>);
  video.setState({
    isPlaying: false,
  });
  expect(video.state().isPlaying).toEqual(false);
});
