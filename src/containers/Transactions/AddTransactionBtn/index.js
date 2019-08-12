import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const AddTransactionBtn = ({
  className,
  onClick,
}) => (
  <button
    type="button"
    className={`add-transaction-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    <span className="add-transaction-btn_icon">
      <FontAwesomeIcon icon="plus" />
    </span>
    Add Transaction
  </button>
);

AddTransactionBtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

AddTransactionBtn.defaultProps = {
  className: '',
};

export default AddTransactionBtn;
