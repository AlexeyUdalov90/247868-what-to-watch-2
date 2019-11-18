import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app.jsx';
import {reducer, Operation} from './redusers/reducer.js';
import createAPI from './api.js';

const titleClickHandler = function () {

};

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.checkAuth());
  store.dispatch(Operation.loadFilms());

  ReactDom.render(<Provider store={store}>
    <App onClickTitle={titleClickHandler} />
  </Provider>, document.querySelector(`#root`));
};

init();
