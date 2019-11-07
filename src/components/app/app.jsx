import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer.js';
import Main from '../main/main.jsx';

const App = ({films, onClickTitle, onChangeFilter, genreActive}) => {
  return <Main films={films} onClickTitle={onClickTitle} onChangeFilter={onChangeFilter} genreActive={genreActive} />;
};

App.propTypes = {
  genreActive: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitle: PropTypes.func,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genreActive: state.genreActive,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(ActionCreator.changeGenre(genre));
      dispatch(ActionCreator.changeFilmList(genre));
    },
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
