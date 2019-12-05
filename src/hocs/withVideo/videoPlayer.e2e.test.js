import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withVideo from './withVideo.js';

configure({adapter: new Adapter()});

const MockComponent = () => <video />;
const MockComponentWrapped = withVideo(MockComponent);

window.HTMLMediaElement.prototype.play = () => { };
window.HTMLMediaElement.prototype.pause = () => { };

it(`Play video`, () => {

  const video = mount(<MockComponentWrapped poster={``} previewVideoLink={``} isPlaying={false}/>);
  video.setState({
    isPlaying: true,
  });
  expect(video.state().isPlaying).toEqual(true);
});

it(`Stop video`, () => {

  const video = mount(<MockComponentWrapped poster={``} previewVideoLink={``} isPlaying={true}/>);
  video.setState({
    isPlaying: false,
  });
  expect(video.state().isPlaying).toEqual(false);
});
