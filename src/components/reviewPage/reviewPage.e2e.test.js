import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ReviewPage} from './reviewPage.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`SignIn works correctly`, () => {
  it(`Click on rating label`, () => {
    const onChangeRating = jest.fn();
    const wrapper = mount(<MemoryRouter><ReviewPage
      film={{}}
      isAuthorizationRequired={false}
      avatarUrl={``}
      disabledButton={false}
      comment={``}
      onChangeCommentHandler={jest.fn()}
      onChangeRatingHandler={onChangeRating}
      onSubmitHandler={jest.fn()}
    /></MemoryRouter>);

    wrapper.find(`.rating__label`).at(0).simulate(`click`);

    expect(onChangeRating).toHaveBeenCalled();
  });

  it(`Change comment`, () => {
    const onChangeComment = jest.fn();
    const wrapper = mount(<MemoryRouter><ReviewPage
      film={{}}
      isAuthorizationRequired={false}
      avatarUrl={``}
      disabledButton={false}
      comment={``}
      onChangeCommentHandler={onChangeComment}
      onChangeRatingHandler={jest.fn()}
      onSubmitHandler={jest.fn()}
    /></MemoryRouter>);

    wrapper.find(`.add-review__textarea`).simulate(`change`);

    expect(onChangeComment).toHaveBeenCalled();
  });

  it(`Submit form`, () => {
    const onSubmitForm = jest.fn();
    const wrapper = mount(<MemoryRouter><ReviewPage
      film={{}}
      isAuthorizationRequired={false}
      avatarUrl={``}
      disabledButton={false}
      comment={``}
      onChangeCommentHandler={jest.fn()}
      onChangeRatingHandler={jest.fn()}
      onSubmitHandler={onSubmitForm}
    /></MemoryRouter>);

    wrapper.find(`.add-review__form`).simulate(`submit`);

    expect(onSubmitForm).toHaveBeenCalled();
  });
});
