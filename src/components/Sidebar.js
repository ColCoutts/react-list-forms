import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ children }) {
  return (
    <nav>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
