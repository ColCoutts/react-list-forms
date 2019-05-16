import React from 'react';
import PropTypes from 'prop-types';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color}>
        {colorList}
      </li>
    );
  });
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
