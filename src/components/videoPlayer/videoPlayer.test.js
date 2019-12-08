import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './videoPlayer.jsx';

it(`Video player correctly renders after relaunch`, () => {

  const tree = renderer.create(<VideoPlayer poster={``} previewVideoLink={``} isPlaying={false} onPlay={jest.fn()} onStop={jest.fn()} onLoaded={jest.fn()} />, {
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
