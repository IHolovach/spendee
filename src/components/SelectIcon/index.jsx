import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './style.css';

const SelectIcon = ({
  className,
  icons,
  typeId,
  onChange,
}) => {
  const isIconExists = !!icons.length;
  const defaultValue = Object.keys(icons)[0].id;

  return (
    isIconExists
      ? (
        <select
          className={`select ${className}`}
          name="select-icon"
          data-name="icon"
          data-type-id={typeId}
          value={defaultValue}
          onChange={onChange}
        >
          {icons.map((icon) => (
            <option
              key={icon.id}
              value={icon.id}
            >
              <Icon
                className="select_icon"
                color={icon.color}
                icon={icon.icon}
                id={icon.id}
              />
            </option>
          ))}
        </select>
      )
      : null
  );
};

SelectIcon.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  typeId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

SelectIcon.defaultProps = {
  className: '',
};

export default SelectIcon;
