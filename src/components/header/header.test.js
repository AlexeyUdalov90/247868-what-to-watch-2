import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer.create(<Header isAuthorizationRequired={false} avatarUrl={``} />).toJSON();

  expect(tree).toMatchSnapshot();
});
