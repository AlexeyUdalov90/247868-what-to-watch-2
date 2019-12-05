import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmCard from './filmCard.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Mouse enter on film card`, () => {
  const moсks = {
    name: ``,
    previewImage: ``,
    previewVideoLink: ``,
  };
  const mouseEnterHandler = jest.fn();
  shallow(<Router><FilmCard film={moсks} onClickTitle={jest.fn()} isPlaying={false} onMouseEnterFilm={mouseEnterHandler} onMouseLeaveFilm={jest.fn()} /></Router>)
    .children()
    .find(`.small-movie-card`)
    .simulate(`mouseenter`);

  expect(mouseEnterHandler).toHaveBeenCalled();
});
