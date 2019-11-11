import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './filmCard.jsx';

it(`FilmCard correctly renders after relaunch`, () => {
  const moks = {
    name: ``,
    previewImage: ``,
    previewVideoLink: ``,
  };
  const tree = renderer.create(<FilmCard film={moks} onClickTitle={jest.fn()} onMouseEnterFilm={jest.fn()} onMouseLeaveFilm={jest.fn()} />, {
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
