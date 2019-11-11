import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator, filterFilms} from '../../reducer.js';
import Main from '../main/main.jsx';
import DetailPage from '../detailPage/detailPage.jsx';

const App = ({films, onClickTitle, onChangeFilter, genreActive}) => {
  return <React.Fragment>{getPageScreen(films, onClickTitle, onChangeFilter, genreActive)}</React.Fragment>;
};

const getPageScreen = (films, onClickTitle, onChangeFilter, genreActive) => {
  switch (location.pathname) {
    case `/`:
      return <Main films={films} onClickTitle={onClickTitle} onChangeFilter={onChangeFilter} genreActive={genreActive} />;
    case `/detail`:
      return <DetailPage film={films[0]} />;
  }
  return null;
};

App.propTypes = {
  genreActive: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickTitle: PropTypes.func,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genreActive: state.genreActive,
  films: filterFilms(state.films, state.genreActive),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(ActionCreator.changeGenre(genre));
    },
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
