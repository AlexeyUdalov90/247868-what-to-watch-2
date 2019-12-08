import React from 'react';
import renderer from 'react-test-renderer';

import FilmList from './filmList.jsx';

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmList films={[]} activeItem={0} onChangeActiveItem={jest.fn()} filmLoading={false} showItems={10} />).toJSON();

  expect(tree).toMatchSnapshot();
});
