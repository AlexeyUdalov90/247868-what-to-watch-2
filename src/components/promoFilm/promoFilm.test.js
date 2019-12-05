import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {PromoFilm} from './promoFilm.jsx';

it(`PromoFilm correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><PromoFilm promoFilm={{}} promoFilmLoading={false} toggleFavoriteFilm={jest.fn()} isAuthorizationRequired={false} avatarUrl={``} /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
