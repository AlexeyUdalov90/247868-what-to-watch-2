import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FavoriteButton from './favoriteButton.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on favorite button`, () => {
  const toggleFavoriteFilmHandler = jest.fn();
  const favoriteButton = mount(<FavoriteButton idFilm={0} isFavorite={false} toggleFavoriteFilm={toggleFavoriteFilmHandler} />);
  const button = favoriteButton.find(`.movie-card__button`);
  button.simulate(`click`);

  expect(toggleFavoriteFilmHandler).toHaveBeenCalled();
});
