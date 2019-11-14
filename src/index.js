import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {reducer} from './reducer.js';

const titleClickHandler = function () {

};

const init = () => {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  ReactDom.render(<Provider store={store}>
    <App onClickTitle={titleClickHandler} />
  </Provider>, document.querySelector(`#root`));
};

init();
