import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import FilmCard from './filmCard.jsx';

it(`FilmCard correctly renders after relaunch`, () => {
  const moks = {
    id: 1,
    name: ``,
    previewImage: ``,
    previewVideoLink: ``,
  };
  const tree = renderer.create(<Router><FilmCard film={moks} isPlaying={false} onMouseEnterFilmHandler={jest.fn()} onMouseLeaveFilmHandler={jest.fn()} /></Router>, {
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
