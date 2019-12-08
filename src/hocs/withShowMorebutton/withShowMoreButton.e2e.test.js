import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withShowMoreButton from './withShowMoreButton.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withShowMoreButton(MockComponent);

it(`Should increment showItems when call incrementShowItems`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().showItems).toEqual(8);
  wrapper.props().incrementShowItems();
  expect(wrapper.state().showItems).toEqual(28);
});

it(`Should reset showItems when call resetShowItems`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().incrementShowItems();
  expect(wrapper.state().showItems).toEqual(28);
  wrapper.props().resetShowItems();
  expect(wrapper.state().showItems).toEqual(8);
});
