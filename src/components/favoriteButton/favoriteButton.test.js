import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteButton from './favoriteButton.jsx';

it(`FavoriteButton correctly renders after relaunch`, () => {
  const tree = renderer.create(<FavoriteButton idFilm={0} isFavorite={false} toggleFavoriteFilm={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
