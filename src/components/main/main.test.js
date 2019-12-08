import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

jest.mock(`../promoFilm/promoFilm.jsx`, () => jest.fn().mockReturnValue(null));

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer.create(<Main
    films={[]}
    onChangeFilter={jest.fn()}
    genres={[]}
    filmLoading={false}
    showItems={8}
    incrementShowItems={jest.fn()}
    resetShowItems={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
