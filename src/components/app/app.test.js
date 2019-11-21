import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    films={[]}
    onClickTitle={jest.fn()}
    onChangeFilter={jest.fn()}
    genres={[]}
    isAuthorizationRequired={false}
    avatarUrl={``}
    onSubmitSignIn={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
