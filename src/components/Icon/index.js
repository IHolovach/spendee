import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

const Icon = ({
  className,
  id,
  color,
  icon,
}) => {
  const customClassName = classNames('category-icon ', {
    'orange-category': (color === '#fea800'),
    'green-category': (color === '#5ec4ac'),
    'red-category': (color === '#f6534c'),
  });

  return (
    <div
      data-id={id}
      className={customClassName}
    >
      <FontAwesomeIcon icon={icon}/>
    </div>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
