import React from 'react';
import renderer from 'react-test-renderer';
import FilmTabs from './filmTabs.jsx';

it(`FilmTabs correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmTabs activeTab={0} onChangeActiveTab={jest.fn()} film={{starring: []}} reviews={[]} reviewsLoading={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});
