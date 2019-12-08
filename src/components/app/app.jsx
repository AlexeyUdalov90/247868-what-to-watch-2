import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import {loadFilms, loadPromoFilm} from '../../redusers/actionCreator.js';
import {Operation} from '../../redusers/reducer.js';
import Main from '../main/main.jsx';
import DetailPage from '../detailPage/detailPage.jsx';
import SignIn from '../signIn/signIn.jsx';
import FavoriteFilmsPage from '../favoriteFilmsPage/favoriteFilmsPage.jsx';
import ReviewPage from '../reviewPage/reviewPage.jsx';

import withAuthForm from '../../hocs/withAuthForm/withAuthForm.js';
import withAuth from '../../hocs/withAuth/withAuth.js';
import withShowMoreButton from '../../hocs/withShowMorebutton/withShowMoreButton.js';

const MainWrapped = withShowMoreButton(Main);
const SignInWrapped = withAuthForm(SignIn);

class App extends PureComponent {
  componentDidMount() {
    this.props.loadFilms();
    this.props.loadPromoFilm();
  }
  render() {
    const {onSubmitSignIn} = this.props;
    return <Switch>
      <Route path='/' exact component={MainWrapped} />
      <Route path='/login' exact render={() => <SignInWrapped onSubmitSignIn={onSubmitSignIn} />} />
      <Route path='/films/:id' exact component={withRouter(DetailPage)} />
      <Route path='/mylist' exact component={withAuth(FavoriteFilmsPage)} />
      <Route path='/films/:id/review' exact component={withAuth(withRouter(ReviewPage))}/>
    </Switch>;
  }
}

App.propTypes = {
  onSubmitSignIn: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSignIn: (email, password) => {
      dispatch(Operation.authorization(email, password));
    },
    loadFilms: () => {
      dispatch(loadFilms());
    },
    loadPromoFilm: () => {
      dispatch(loadPromoFilm());
    },
  };
};

export {App};

export default connect(null, mapDispatchToProps)(App);
