import React from 'react';
import renderer from 'react-test-renderer';

import FilmList from './filmList.jsx';

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmList films={[]} activeItem={0} onChangeActiveItem={jest.fn()} filmLoading={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});
