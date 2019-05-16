import React from 'react';
import PropTypes from 'prop-types';

const decimalFromHex = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const rgbFromHex = hex => {
  return {
    red: decimalFromHex(hex.slice(1, 3)),
    green: decimalFromHex(hex.slice(3, 5)),
    blue: decimalFromHex(hex.slice(5, 7))
  };
};

function Color({ name, hex }) {
  const rgb = rgbFromHex(hex);

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '.8em',
    height: '.8em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || hex}<div style={colorStyle}></div></dd>

      <dt>HEX</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>RED-- {rgb.red}</p>
        <p>GREEN-- {rgb.green}</p>
        <p>BLUE-- {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
