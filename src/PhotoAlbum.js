import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';

//eslint-disable-next-line
function PhotoAlbum({ title, photos }) {
  return (
    <div className={styles.PhotoAlbum}>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
