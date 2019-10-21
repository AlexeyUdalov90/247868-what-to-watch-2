import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/main/main.jsx';

const init = () => {
  ReactDom.render(<Main films={[`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`]} />, document.querySelector(`#root`));
};

init();
