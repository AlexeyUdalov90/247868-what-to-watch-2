import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const showErrorEmail = (isInvalidEmail) => {
  if (isInvalidEmail) {
    return <div className="sign-in__message">
      <p>Please enter a valid email address</p>
    </div>;
  }
  return null;
};

const SignIn = ({emailValue, passwordValue, isInvalidEmail, onChangeEmailHandler, onChangePasswordHandler, onSubmitSignIn, onValidEmail}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitSignIn}>
          {showErrorEmail(isInvalidEmail)}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${isInvalidEmail ? `sign-in__field--error` : ``}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={emailValue} onChange={onChangeEmailHandler} onBlur={onValidEmail} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={passwordValue} onChange={onChangePasswordHandler} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onChangeEmailHandler: PropTypes.func.isRequired,
  onChangePasswordHandler: PropTypes.func.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  isInvalidEmail: PropTypes.bool,
  onValidEmail: PropTypes.func,
};

export default SignIn;
