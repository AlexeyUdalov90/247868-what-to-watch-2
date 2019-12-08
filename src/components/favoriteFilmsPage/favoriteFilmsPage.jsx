import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import FilmList from '../filmList/filmList.jsx';
import {loadFavoriteFilms} from '../../redusers/actionCreator.js';
import withActiveItem from '../../hocs/withActiveItem/withActiveItem.js';

const FilmListWrapped = withActiveItem(FilmList);

class FavoriteFilmsPage extends PureComponent {
  componentDidMount() {
    this.props.loadFavoriteFilms();
  }

  render() {
    const {isAuthorizationRequired, avatarUrl, favoriteFilms, favoriteFilmsLoading} = this.props;
    return (
      <div className="user-page">
        <Header isAuthorizationRequired={isAuthorizationRequired} avatarUrl={avatarUrl} personalClass={`user-page__head`}>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__movies-list">
            <FilmListWrapped films={favoriteFilms} filmLoading={favoriteFilmsLoading} />
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>);
  }
}

FavoriteFilmsPage.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  avatarUrl: PropTypes.string,
  favoriteFilms: PropTypes.array,
  favoriteFilmsLoading: PropTypes.bool,
  loadFavoriteFilms: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteFilms: state.load.favoriteFilms,
  favoriteFilmsLoading: state.load.favoriteFilmsLoading,
  isAuthorizationRequired: state.load.isAuthorizationRequired,
  avatarUrl: state.load.userData.avatarUrl,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavoriteFilms: () => {
      dispatch(loadFavoriteFilms());
    }
  };
};

export {FavoriteFilmsPage};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteFilmsPage);
