import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header.jsx';

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><Header isAuthorizationRequired={false} avatarUrl={``} /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
