import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/main/main.jsx';
import films from './moks/films.js';

const titleClickHandler = function () {

};

const init = () => {
  ReactDom.render(<Main films={films} onClickTitle={titleClickHandler} />, document.querySelector(`#root`));
};

init();
