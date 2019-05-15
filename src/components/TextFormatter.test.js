import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('textFormatter component', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
