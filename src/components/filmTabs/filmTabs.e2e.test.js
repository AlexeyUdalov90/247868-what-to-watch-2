import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmTabs from './filmTabs.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on tab item`, () => {
  const changeActiveTabHandler = jest.fn();
  const filmTabs = mount(<FilmTabs activeTab={0} onChangeActiveTab={changeActiveTabHandler} film={{starring: []}} reviews={[]} reviewsLoading={false} />);
  const filmTab = filmTabs.find(`.movie-nav__link`).at(1);
  filmTab.simulate(`click`);

  expect(changeActiveTabHandler).toHaveBeenCalled();
});
