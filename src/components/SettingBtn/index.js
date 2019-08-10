import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const SettingBtn = ({
  className,
  id,
  onClick,
}) => (
  <button
    type="button"
    data-id={id}
    className={`setting-btn opacity-on-hover ${className}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon="cog" />
  </button>
);

SettingBtn.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SettingBtn.defaultProps = {
  className: '',
};

export default SettingBtn;
