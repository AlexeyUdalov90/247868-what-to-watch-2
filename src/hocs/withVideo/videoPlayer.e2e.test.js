import React from 'react';
import {configure, shallow} from 'enzyme';
// import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import withVideo from './withVideo.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withVideo(MockComponent);

it(`Loaded video`, () => {
  const video = shallow(<MockComponentWrapped poster={``} previewVideoLink={``} isPlaying={false}/>);
  video.props().onLoaded();
  expect(video.state().isLoading).toEqual(false);
});

it(`Play video`, () => {
  const video = shallow(<MockComponentWrapped poster={``} previewVideoLink={``} isPlaying={false}/>);
  video.props().onPlay();
  expect(video.state().isPlaying).toEqual(true);
});

it(`Stop video`, () => {
  const video = shallow(<MockComponentWrapped poster={``} previewVideoLink={``} isPlaying={true}/>);
  video.props().onStop();
  expect(video.state().isPlaying).toEqual(false);
});
