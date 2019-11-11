import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './videoPlayer.jsx';

it(`Video player correctly renders after relaunch`, () => {

  const tree = renderer.create(<VideoPlayer poster={``} video={``} isPlaying={false} />, {
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
