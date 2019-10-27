import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './filmCard.jsx';

it(`FilmCard correctly renders after relaunch`, () => {
  const moks = {
    id: 0,
    name: ``,
    imageUrl: ``,
  };
  const tree = renderer.create(<FilmCard film={moks} onClickTitle={jest.fn()} onMouseEnterFilm={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
