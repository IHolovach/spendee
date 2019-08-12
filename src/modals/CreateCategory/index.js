import React from 'react';
import PropTypes from 'prop-types';

import SelectIcon from '../../components/SelectIcon';
import SelectColor from '../../components/SelectColor';
import SelectCategoryType from '../../components/SelectCategoryType';

import './style.css';

const CreateCategory = ({
  className,
  onIconChange,
  onColorChange,
  onNameChange,
  onTypeChange,
}) => {
  return (
    <div className={`add-transaction ${className}`}>
      <SelectIcon
        className="create-category_icon"
        onChange={onIconChange}
      />
      <SelectColor
        className="create-category_color"
        onChange={onColorChange}
      />
      <input
        type="text"
        name="name"
        className="create-category_name"
        onChange={onNameChange}
      />
      <SelectCategoryType
        className="create-category_type"
        onChange={onTypeChange}
      />
    </div>
  );
};

CreateCategory.propTypes = {
  className: PropTypes.string,
  onIconChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

CreateCategory.defaultProps = {
  className: '',
};

export default CreateCategory;
