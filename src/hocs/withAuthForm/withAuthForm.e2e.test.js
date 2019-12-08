import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../../components/signIn/signIn.jsx';
import withAuthForm from './withAuthForm.js';

Enzyme.configure({adapter: new Adapter()});

const MockComponentWrapped = withAuthForm(SignIn);

it(`Channge email address`, () => {
  const changeEmail = jest.fn();
  mount(<MemoryRouter><MockComponentWrapped emailValue={``} passwordValue={``} onChangeEmailHandler={changeEmail} onChangePasswordHandler={jest.fn()} onSubmitSignIn={jest.fn()} /></MemoryRouter>)
    .find(`input[type="email"]`)
    .simulate(`change`);

  expect(changeEmail).toHaveBeenCalled();
});
