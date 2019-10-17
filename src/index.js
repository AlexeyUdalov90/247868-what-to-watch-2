import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/main/main.jsx';

const init = () => {
  ReactDom.render(<Main />, document.querySelector(`#root`));
};

init();
