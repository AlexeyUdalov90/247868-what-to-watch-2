import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './filmCard.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on title`, () => {
  const moсks = {
    id: 0,
    name: ``,
    imageUrl: ``,
    video: {
      url: ``,
      type: ``,
    },
  };
  const clickHandler = jest.fn();
  const filmCard = shallow(<FilmCard film={moсks} onClickTitle={clickHandler} onMouseEnterFilm={jest.fn()} onMouseLeaveFilm={jest.fn()} />);
  const title = filmCard.find(`.small-movie-card__title`);
  title.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});

it(`Mouse enter on film card`, () => {
  const moсks = {
    id: 0,
    name: ``,
    imageUrl: ``,
    video: {
      url: ``,
      type: ``,
    },
  };
  const mouseEnterHandler = jest.fn();
  shallow(<FilmCard film={moсks} onClickTitle={jest.fn()} isPlaying={false} onMouseEnterFilm={mouseEnterHandler} onMouseLeaveFilm={jest.fn()} />)
    .find(`.small-movie-card`)
    .simulate(`mouseenter`);

  expect(mouseEnterHandler).toHaveBeenCalled();
});
