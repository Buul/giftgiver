import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const app = shallow(<App title="test" />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `addGift` button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('#btnAdd').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('#giftList').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().handleRemoveGift(id);
      });

      it('remove the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
