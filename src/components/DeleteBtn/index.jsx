import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const DeleteBtn = ({
  className,
  id,
  onClick,
}) => (
  <button
    type="button"
    data-id={id}
    className={`delete-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon="trash" />
  </button>
);

DeleteBtn.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

DeleteBtn.defaultProps = {
  className: '',
};

export default DeleteBtn;
