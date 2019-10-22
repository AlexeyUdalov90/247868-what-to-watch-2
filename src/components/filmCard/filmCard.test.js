import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './filmCard.jsx';

it(`FilmCard correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmCard film={``} onClickTitle={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
