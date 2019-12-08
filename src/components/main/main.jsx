import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PromoFilm from '../promoFilm/promoFilm.jsx';
import FilmFilter from '../filmFilter/filmFilter.jsx';
import FilmList from '../filmList/filmList.jsx';

import {changeGenre} from '../../redusers/actionCreator.js';
import withActiveItem from '../../hocs/withActiveItem/withActiveItem.js';
import getVisibleFilms from '../../selectors/getVisibleFilms.js';

const FilmListWrapped = withActiveItem(FilmList);
const FilmFilterWrapped = withActiveItem(FilmFilter);

const getShowMoreButton = (filmsLength, showFilms, incrementShowItems) => {
  if (filmsLength > showFilms) {
    return <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={incrementShowItems}>Show more</button>
    </div>;
  }
  return null;
};

const Main = ({onChangeFilter, genres, filmLoading, films, showItems, incrementShowItems, resetShowItems}) => {
  return <div>
    <PromoFilm />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmFilterWrapped genres={genres} onChangeFilter={onChangeFilter} resetFilmList={resetShowItems} />
        <div className="catalog__movies-list">
          <FilmListWrapped films={films} filmLoading={filmLoading} showItems={showItems}/>
        </div>

        {getShowMoreButton(films.length, showItems, incrementShowItems)}

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
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
  </div>;
};

Main.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filmLoading: PropTypes.bool,
  films: PropTypes.array,
  showItems: PropTypes.number,
  incrementShowItems: PropTypes.func,
  resetShowItems: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmLoading: state.load.filmLoading,
  films: getVisibleFilms(state),
  genres: state.load.genres,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (genre) => {
      dispatch(changeGenre(genre));
    },
  };
};

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
