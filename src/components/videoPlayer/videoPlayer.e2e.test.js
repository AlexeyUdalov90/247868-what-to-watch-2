import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './videoPlayer.jsx';

Enzyme.configure({adapter: new Adapter()});

window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };

it(`Play video`, () => {

  const video = mount(<VideoPlayer poster={``} video={``} isPlaying={false}/>);
  video.setState({
    isPlaying: true,
  });
  expect(video.state().isPlaying).toEqual(true);
});

it(`Stop video`, () => {

  const video = mount(<VideoPlayer poster={``} video={``} isPlaying={true}/>);
  video.setState({
    isPlaying: false,
  });
  expect(video.state().isPlaying).toEqual(false);
});
