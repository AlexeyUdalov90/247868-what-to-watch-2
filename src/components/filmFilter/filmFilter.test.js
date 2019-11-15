import React from 'react';
import renderer from 'react-test-renderer';

import FilmFilter from './filmFilter.jsx';

it(`FilmFilter correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmFilter genres={[]} activeItem={0} onChangeActiveItem={jest.fn()} onChangeFilter={jest.fn()}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
