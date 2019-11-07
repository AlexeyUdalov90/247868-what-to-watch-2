import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmFilter from './filmFilter.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on filter item`, () => {
  const clickHandler = jest.fn();
  const filmFilter = mount(<FilmFilter films={[]} genreActive={``} onChangeFilter={clickHandler} />);
  const filterItem = filmFilter.find(`.catalog__genres-link`);
  filterItem.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});
