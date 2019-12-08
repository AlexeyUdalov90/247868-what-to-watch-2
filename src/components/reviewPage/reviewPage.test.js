import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import {ReviewPage} from './reviewPage.jsx';

it(`ReviewPage correctly renders after relaunch`, () => {
  const tree = renderer.create(<Router><ReviewPage
    film={{}}
    isAuthorizationRequired={false}
    avatarUrl={``}
    disabledButton={false}
    comment={``}
    onChangeCommentHandler={jest.fn()}
    onChangeRatingHandler={jest.fn()}
    onSubmitHandler={jest.fn()}
  /></Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
