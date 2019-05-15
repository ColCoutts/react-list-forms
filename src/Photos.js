import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

//eslint-disable-next-line
function Photos({ photos }) {
  const imageList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {imageList}
    </ul>
  );
}

Photos.PropTypes = {
  photos: PropTypes.array.isRequired
};  

export default Photos;
