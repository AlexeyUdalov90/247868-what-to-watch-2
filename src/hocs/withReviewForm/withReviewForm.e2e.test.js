import React from 'react';
import {configure, mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewPage} from '../../components/reviewPage/reviewPage.jsx';
import withReviewFrom from './withReviewForm.js';

configure({adapter: new Adapter()});

const MockComponentWrapped = withReviewFrom(ReviewPage);

it(`Should change rating when call onChangeRatingHandler`, () => {
  const onChangeRating = jest.fn();
  const wrapper = mount(<MemoryRouter><MockComponentWrapped film={{}} isAuthorizationRequired={false} avatarUrl={``} disabledButton={false} comment={``} onChangeCommentHandler={jest.fn()} onChangeRatingHandler={onChangeRating} onSubmitHandler={jest.fn()} /></MemoryRouter>);

  wrapper.find(`.rating__label`).at(0).simulate(`click`);

  expect(onChangeRating).toHaveBeenCalled();
});

it(`Should change comment when call onChangeCommentHandler`, () => {
  const onChangeCommentHandler = jest.fn();
  const wrapper = mount(<MemoryRouter><MockComponentWrapped film={{}} isAuthorizationRequired={false} avatarUrl={``} disabledButton={false} comment={``} onChangeCommentHandler={onChangeCommentHandler} onChangeRatingHandler={jest.fn()} onSubmitHandler={jest.fn()} /></MemoryRouter>);

  wrapper.find(`.add-review__textarea`).simulate(`change`);

  expect(onChangeCommentHandler).toHaveBeenCalled();
});
