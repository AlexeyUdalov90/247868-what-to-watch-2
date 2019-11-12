import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmFilter from './filmFilter.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on filter item`, () => {
  const changeFilterHandler = jest.fn();
  const changeActiveItemHandler = jest.fn();
  const filmFilter = mount(<FilmFilter genres={[]} activeItem={0} onChangeActiveItem={changeActiveItemHandler} onChangeFilter={changeFilterHandler} />);
  const filterItem = filmFilter.find(`.catalog__genres-link`);
  filterItem.simulate(`click`);

  expect(changeFilterHandler).toHaveBeenCalled();
  expect(changeActiveItemHandler).toHaveBeenCalled();
});
