import React from 'react';
import PropTypes from 'prop-types';

//eslint-disable-next-line
function Photo({ photo }) {
  return <img src={photo} />;
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;
