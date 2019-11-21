import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from './signIn.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`SignIn works correctly`, () => {
  it(`Change email`, () => {
    const changeEmailrHandler = jest.fn();
    const changePasswordHandler = jest.fn();
    const submitFormHandler = jest.fn();
    const signIn = mount(<SignIn
      emailValue={``}
      passwordValue={``}
      onChangeEmailHandler={changeEmailrHandler}
      onChangePasswordHandler={changePasswordHandler}
      onSubmitSignIn={submitFormHandler}
    />);

    const emailInput = signIn.find(`input[type="email"]`);
    emailInput.simulate(`change`);

    expect(changeEmailrHandler).toHaveBeenCalled();
  });

  it(`Change password`, () => {
    const changeEmailrHandler = jest.fn();
    const changePasswordHandler = jest.fn();
    const submitFormHandler = jest.fn();
    const signIn = mount(<SignIn
      emailValue={``}
      passwordValue={``}
      onChangeEmailHandler={changeEmailrHandler}
      onChangePasswordHandler={changePasswordHandler}
      onSubmitSignIn={submitFormHandler}
    />);

    const passwordInput = signIn.find(`input[type="password"]`);
    passwordInput.simulate(`change`);

    expect(changePasswordHandler).toHaveBeenCalled();
  });

  it(`Submit form`, () => {
    const changeEmailrHandler = jest.fn();
    const changePasswordHandler = jest.fn();
    const submitFormHandler = jest.fn();
    const signIn = mount(<SignIn
      emailValue={`0`}
      passwordValue={`0`}
      onChangeEmailHandler={changeEmailrHandler}
      onChangePasswordHandler={changePasswordHandler}
      onSubmitSignIn={submitFormHandler}
    />);

    const signInForm = signIn.find(`.sign-in__form`);
    signInForm.simulate(`submit`);

    expect(submitFormHandler).toHaveBeenCalled();
  });
});
