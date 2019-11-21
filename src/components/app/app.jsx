import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import getVisibleFilms from '../../selectors/getVisibleFilms.js';
import {changeGenre} from '../../redusers/actionCreator.js';
import {Operation} from '../../redusers/reducer.js';
import Main from '../main/main.jsx';
import DetailPage from '../detailPage/detailPage.jsx';
import SignIn from '../signIn/signIn.jsx';

import withAuthForm from '../../hocs/withAuthForm/withAuthForm.js';

const SignInWrapped = withAuthForm(SignIn);

const App = ({films, onClickTitle, onChangeFilter, genres, isAuthorizationRequired, onSubmitSignIn, avatarUrl}) => {
  return <React.Fragment>{getPageScreen(films, onClickTitle, onChangeFilter, genres, isAuthorizationRequired, onSubmitSignIn, avatarUrl)}</React.Fragment>;
};

const getPageScreen = (films, onClickTitle, onChangeFilter, genres, isAuthorizationRequired, onSubmitSignIn, avatarUrl) => {
  if (isAuthorizationRequired) {
    return <SignInWrapped onSubmitSignIn={onSubmitSignIn} />;
  } else {
    switch (location.pathname) {
      case `/`:
        return <Main films={films} onClickTitle={onClickTitle} onChangeFilter={onChangeFilter} genres={genres} isAuthorizationRequired={isAuthorizationRequired} avatarUrl={avatarUrl} />;
      case `/detail`:
        return <DetailPage film={films[0]} />;
    }
  }
  return null;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickTitle: PropTypes.func,
  onChangeFilter: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: getVisibleFilms(state),
  genres: state.load.genres,
  isAuthorizationRequired: state.load.isAuthorizationRequired,
  avatarUrl: state.load.userData.avatarUrl,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(changeGenre(genre));
    },
    onSubmitSignIn: (email, password) => {
      dispatch(Operation.authorization(email, password));
    }
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
