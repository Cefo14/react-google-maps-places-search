import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const GoogleMapsSearchBox = ({ setRef }) => (
  <div className="google-maps-search-box">
    <input
      type="text"
      name="searchBox"
      ref={
        node => setRef(node)
      }
      placeholder="Search place..."
    />
    <FontAwesomeIcon icon={faSearch} />
  </div>
);

GoogleMapsSearchBox.propTypes = {
  setRef: PropTypes.func.isRequired,
};

export default GoogleMapsSearchBox;
