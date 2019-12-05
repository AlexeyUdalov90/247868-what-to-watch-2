import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {App} from './app.jsx';

jest.mock(`../main/main.jsx`, () => jest.fn().mockReturnValue(null));

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><App genres={[]} onChangeFilter={jest.fn()} onSubmitSignIn={jest.fn()} loadFilms={jest.fn()} loadPromoFilm={jest.fn()} /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
