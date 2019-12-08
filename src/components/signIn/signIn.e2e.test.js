import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from './signIn.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`SignIn works correctly`, () => {
  it(`Change email`, () => {
    const changeEmailrHandler = jest.fn();
    const signIn = mount(<MemoryRouter><SignIn
      emailValue={``}
      passwordValue={``}
      onChangeEmailHandler={changeEmailrHandler}
      onChangePasswordHandler={jest.fn()}
      onSubmitSignIn={jest.fn()}
      isInvalidEmail={false}
      onValidEmail={jest.fn()}
    /></MemoryRouter>);

    const emailInput = signIn.find(`input[type="email"]`);
    emailInput.simulate(`change`);

    expect(changeEmailrHandler).toHaveBeenCalled();
  });

  it(`Validation email`, () => {
    const onValidEmail = jest.fn();
    const signIn = mount(<MemoryRouter><SignIn
      emailValue={``}
      passwordValue={``}
      onChangeEmailHandler={jest.fn()}
      onChangePasswordHandler={jest.fn()}
      onSubmitSignIn={jest.fn()}
      isInvalidEmail={false}
      onValidEmail={onValidEmail}
    /></MemoryRouter>);

    const emailInput = signIn.find(`input[type="email"]`);
    emailInput.simulate(`blur`);

    expect(onValidEmail).toHaveBeenCalled();
  });

  it(`Change password`, () => {
    const changePasswordHandler = jest.fn();
    const signIn = mount(<MemoryRouter><SignIn
      emailValue={``}
      passwordValue={``}
      onChangeEmailHandler={jest.fn()}
      onChangePasswordHandler={changePasswordHandler}
      onSubmitSignIn={jest.fn()}
      isInvalidEmail={false}
      onValidEmail={jest.fn()}
    /></MemoryRouter>);

    const passwordInput = signIn.find(`input[type="password"]`);
    passwordInput.simulate(`change`);

    expect(changePasswordHandler).toHaveBeenCalled();
  });

  it(`Submit form`, () => {
    const submitFormHandler = jest.fn();
    const signIn = mount(<MemoryRouter><SignIn
      emailValue={`0`}
      passwordValue={`0`}
      onChangeEmailHandler={jest.fn()}
      onChangePasswordHandler={jest.fn()}
      onSubmitSignIn={submitFormHandler}
      isInvalidEmail={false}
      onValidEmail={jest.fn()}
    /></MemoryRouter>);

    const signInForm = signIn.find(`.sign-in__form`);
    signInForm.simulate(`submit`);

    expect(submitFormHandler).toHaveBeenCalled();
  });
});
