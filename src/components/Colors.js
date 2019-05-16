import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color}>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
