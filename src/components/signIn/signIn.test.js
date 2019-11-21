import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './signIn.jsx';

it(`SignIn correctly renders after relaunch`, () => {
  const tree = renderer.create(<SignIn
    emailValue={``}
    passwordValue={``}
    onChangeEmailHandler={jest.fn()}
    onChangePasswordHandler={jest.fn()}
    onSubmitSignIn={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
