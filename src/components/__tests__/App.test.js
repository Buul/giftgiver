import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow(<App title="test" />);

describe('App', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(wrapper.state().gifts).toEqual([]);
  });

  it('add a new gift to `state` when clicking the `add gift` button', () => {
    wrapper.find('#btnAdd').simulate('click');

    expect(wrapper.state().gifts).toEqual([{ id: 1 }]);
  });
});
