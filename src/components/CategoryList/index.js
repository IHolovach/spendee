import React from 'react';
import PropTypes from 'prop-types';

import Category from '../Category';

import './style.css';

const CategoryList = ({
  className,
  categories,
  transactions, // amount info
  onCheckboxChange,
  onEdit,
  onVisibilityChange,
  onDelete,
}) => {
  const isCategories = !!(categories.length);

  return (
    isCategories
      ? (
        categories.map(category => (
          <Category
            category={category}
            transactions={transactions}
            onCheckboxChange={onCheckboxChange}
            onEdit={onEdit}
            onVisibilityChang={onVisibilityChange}
            onDelete={onDelete}
          />
        ))
      )
      : null
  );
};

CategoryList.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  transactions: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onVisibilityChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

CategoryList.defaultProps = {
  className: '',
};

export default CategoryList;
