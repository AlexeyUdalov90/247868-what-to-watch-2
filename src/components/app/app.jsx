import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';


import {changeGenre, loadFilms, loadPromoFilm} from '../../redusers/actionCreator.js';
import {Operation} from '../../redusers/reducer.js';
import Main from '../main/main.jsx';
import DetailPage from '../detailPage/detailPage.jsx';
import SignIn from '../signIn/signIn.jsx';

import withAuthForm from '../../hocs/withAuthForm/withAuthForm.js';

const SignInWrapped = withAuthForm(SignIn);

class App extends Component {
  componentDidMount() {
    this.props.loadFilms();
    this.props.loadPromoFilm();
  }
  render() {
    const {onChangeFilter, genres, onSubmitSignIn} = this.props;

    return <Switch>
      <Route path='/' exact render={() => {
        return <Main onChangeFilter={onChangeFilter} genres={genres} />;
      }} />
      <Route path='/login' exact render={() => <SignInWrapped onSubmitSignIn={onSubmitSignIn} />} />
      <Route path='/films/:id' exact component={DetailPage} />
    </Switch>;
  }
}

App.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genres: state.load.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(changeGenre(genre));
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
