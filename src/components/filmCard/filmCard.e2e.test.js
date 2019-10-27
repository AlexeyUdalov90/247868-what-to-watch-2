import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './filmCard.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on title`, () => {
  const moks = {
    id: 0,
    name: ``,
    imageUrl: ``,
  };
  const clickHandler = jest.fn();
  const filmCard = shallow(<FilmCard film={moks} onClickTitle={clickHandler} onMouseEnterFilm={jest.fn()} />);
  const title = filmCard.find(`.small-movie-card__title`);
  title.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});

it(`Mouse enter on film card`, () => {
  const moks = {
    id: 0,
    name: ``,
    imageUrl: ``,
  };
  const mouseEnterHandler = jest.fn();
  shallow(<FilmCard film={moks} onClickTitle={jest.fn()} onMouseEnterFilm={mouseEnterHandler} />)
    .find(`.small-movie-card`)
    .simulate(`mouseenter`);

  expect(mouseEnterHandler).toHaveBeenCalledWith(moks);
});
