import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './videoPlayer.jsx';

it(`Video player correctly renders after relaunch`, () => {
  const moсkVideo = {
    url: ``,
    type: ``,
  };
  const tree = renderer.create(<VideoPlayer poster={``} videoInfo={moсkVideo} isPlaying={false} />, {
    createNodeMock: (element) => {
      if (element.type === `video`) {
        return {
          current: {
            src: ``,
          },
        };
      }
      return null;
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
