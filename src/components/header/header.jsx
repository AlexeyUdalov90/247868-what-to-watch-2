import React from 'react';
import PropTypes from 'prop-types';

const getUserIdentification = (isAuthorizationRequired, avatarUrl) => {
  if (isAuthorizationRequired) {
    return <a href="sign-in.html" className="user-block__link">Sign in</a>;
  }

  return <div className="user-block__avatar">
    <img src={avatarUrl} alt="User avatar" width="63" height="63" />
  </div>;
};

const Header = ({isAuthorizationRequired, avatarUrl}) => {
  return <header className="page-header movie-card__head">
    <div className="logo">
      <a className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div className="user-block">
      {getUserIdentification(isAuthorizationRequired, avatarUrl)}
    </div>
  </header>;
};

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Header;
