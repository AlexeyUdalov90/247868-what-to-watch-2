import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './filmCard.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on title`, () => {
  const clickHandler = jest.fn();
  const filmCard = shallow(<FilmCard film={``} onClickTitle={clickHandler} />);
  const title = filmCard.find(`.small-movie-card__title`);
  title.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});
