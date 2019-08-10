import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const VisibilityBtn = ({
  className,
  id,
  onClick,
}) => (
  <button
    type="button"
    data-id={id}
    className={`visibility-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon="eye" />
  </button>
);

VisibilityBtn.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

VisibilityBtn.defaultProps = {
  className: '',
};

export default VisibilityBtn;
