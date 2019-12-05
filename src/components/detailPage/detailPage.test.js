import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {DetailPage} from './detailPage.jsx';

it(`DetailPage correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><DetailPage
    film={{
      name: ``,
      posterImage: ``,
      backgroundImage: ``,
      description: ``,
      rating: 0,
      scoresCount: 0,
      direction: ``,
      starring: [``, ``, ``],
      released: 0,
      genre: ``,
    }}
    filmLoading={false}
    moreLikeFilms={[]}
    isAuthorizationRequired={false}
    avatarUrl={``}
    toggleFavoriteFilm={jest.fn()}
    reviewsLoading={false}
    loadReviews={jest.fn()}
    reviews={[]}
  /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
