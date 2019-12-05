import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {Router} from 'react-router-dom';

import App from './components/app/app.jsx';
import {reducer, Operation} from './redusers/reducer.js';
import createAPI from './api.js';
import history from './history.js';

const init = () => {
  const api = createAPI(() => {
    history.push(`/login`);
  });
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.checkAuth());

  ReactDom.render(<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.querySelector(`#root`));
};

init();
