import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('photoAlbum component', () => {
  it('renders a snapshot', () => {
    const photos = [
      '/img1',
      '/img2'
    ];
    const wrapper = shallow(<PhotoAlbum title="My Photos" photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
