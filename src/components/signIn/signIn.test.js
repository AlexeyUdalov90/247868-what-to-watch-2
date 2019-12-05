import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import SignIn from './signIn.jsx';

it(`SignIn correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><SignIn
    emailValue={``}
    passwordValue={``}
    onChangeEmailHandler={jest.fn()}
    onChangePasswordHandler={jest.fn()}
    onSubmitSignIn={jest.fn()}
  /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
