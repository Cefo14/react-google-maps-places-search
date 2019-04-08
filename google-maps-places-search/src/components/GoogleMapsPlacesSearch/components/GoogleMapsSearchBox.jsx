import React from 'react';
import PropTypes from 'prop-types';

const GoogleMapsSearchBox = ({ setRef }) => (
  <input
    type="text"
    name="searchBox"
    className="google-maps-search-box"
    ref={
      node => setRef(node)
    }
  />
);

GoogleMapsSearchBox.propTypes = {
  setRef: PropTypes.func.isRequired,
};

export default GoogleMapsSearchBox;
