import React from 'react';
import renderer from 'react-test-renderer';
import PromoFilm from './promoFilm.jsx';

it(`PromoFilm correctly renders after relaunch`, () => {
  const tree = renderer.create(<PromoFilm promoFilm={{}} promoFilmLoading={false} isAuthorizationRequired={false} avatarUrl={``} />).toJSON();

  expect(tree).toMatchSnapshot();
});
