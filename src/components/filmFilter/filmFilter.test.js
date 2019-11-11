import React from 'react';
import renderer from 'react-test-renderer';

import FilmFilter from './filmFilter.jsx';

it(`FilmFilter correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmFilter films={[]} genreActive={``} onChangeFilter={jest.fn()}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
