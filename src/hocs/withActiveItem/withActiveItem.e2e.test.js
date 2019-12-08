import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './withActiveItem.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change activeItem when call onChangeActiveItem`, () => {
  const wrapper = shallow(<MockComponentWrapped activeItem={-1} />);

  expect(wrapper.props().activeItem).toEqual(-1);
  wrapper.props().onChangeActiveItem(1);
  expect(wrapper.props().activeItem).toEqual(1);
});
