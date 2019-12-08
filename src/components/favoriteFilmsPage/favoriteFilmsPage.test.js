import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {FavoriteFilmsPage} from './favoriteFilmsPage.jsx';

it(`FavoriteFilmsPage correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><FavoriteFilmsPage
    isAuthorizationRequired={false}
    avatarUrl={``}
    favoriteFilms={[]}
    favoriteFilmsLoading={false}
    loadFavoriteFilms={jest.fn()}
  /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
