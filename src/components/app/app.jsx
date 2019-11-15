import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator, filterFilms} from '../../reducer.js';
import Main from '../main/main.jsx';
import DetailPage from '../detailPage/detailPage.jsx';

const App = ({films, onClickTitle, onChangeFilter, genres}) => {
  return <React.Fragment>{getPageScreen(films, onClickTitle, onChangeFilter, genres)}</React.Fragment>;
};

const getPageScreen = (films, onClickTitle, onChangeFilter, genres) => {
  switch (location.pathname) {
    case `/`:
      return <Main films={films} onClickTitle={onClickTitle} onChangeFilter={onChangeFilter} genres={genres} />;
    case `/detail`:
      return <DetailPage film={films[0]} />;
  }
  return null;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickTitle: PropTypes.func,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: filterFilms(state.films, state.genreActive),
  genres: state.genres,
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
