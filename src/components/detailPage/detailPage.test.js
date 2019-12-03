import React from 'react';
import renderer from 'react-test-renderer';
import {DetailPage} from './detailPage.jsx';

it(`DetailPage correctly renders after relaunch`, () => {
  const tree = renderer.create(<DetailPage
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
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
