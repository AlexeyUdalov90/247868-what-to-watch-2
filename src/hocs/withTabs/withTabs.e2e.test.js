import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withTabs from './withTabs.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withTabs(MockComponent);

it(`Should change activeTab when call onChangeActiveTab`, () => {
  const wrapper = shallow(<MockComponentWrapped activeTab={0} film={{}} reviews={[]} reviewsLoading={false} />);

  expect(wrapper.props().activeTab).toEqual(0);
  wrapper.props().onChangeActiveTab(1);
  expect(wrapper.props().activeTab).toEqual(1);
});
