import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color Component', () => {
  it('renders a color', () => {
    const rgb = {
      red: 255,
      green: 0,
      blue: 0
    };

    const wrapper = shallow(<Color name="Red" rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();
  });
});
