import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer.create(<Main
    films={[]}
    onChangeFilter={jest.fn()}
    genres={[]}
    filmLoading={false}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
