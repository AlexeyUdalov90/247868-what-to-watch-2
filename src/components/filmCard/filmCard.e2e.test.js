import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './filmCard.jsx';

Enzyme.configure({adapter: new Adapter()});

jest.useFakeTimers();

it(`Mouse enter on film card`, () => {
  const moсks = {
    name: ``,
    previewImage: ``,
    previewVideoLink: ``,
  };
  const mouseEnterHandler = jest.fn();
  mount(<MemoryRouter><FilmCard film={moсks} onClick={jest.fn()} isPlaying={false} onMouseEnterFilmHandler={mouseEnterHandler} onMouseLeaveFilmHandler={jest.fn()} /></MemoryRouter>)
    .find(`.small-movie-card`)
    .simulate(`mouseenter`);

  jest.runAllTimers();

  expect(mouseEnterHandler).toHaveBeenCalled();
});
