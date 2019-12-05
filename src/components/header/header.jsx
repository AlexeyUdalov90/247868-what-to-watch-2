import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const getUserIdentification = (isAuthorizationRequired, avatarUrl) => {
  if (isAuthorizationRequired) {
    return <Link to="/login" className="user-block__link">Sign in</Link>;
  }

  return <div className="user-block__avatar">
    <img src={avatarUrl} alt="User avatar" width="63" height="63" />
  </div>;
};

const Header = ({isAuthorizationRequired, avatarUrl}) => {
  return <header className="page-header movie-card__head">
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
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
