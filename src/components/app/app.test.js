import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App genres={[]} onChangeFilter={jest.fn()} onSubmitSignIn={jest.fn()} loadFilms={jest.fn()} loadPromoFilm={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
