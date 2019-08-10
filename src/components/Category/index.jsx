import React from 'react';
import PropTypes from 'prop-types';

import SettingBtn from '../SettingBtn';
import VisibilityBtn from '../VisibilityBtn';
import DeleteBtn from '../DeleteBtn';
import Icon from '../Icon';

import './style.css';

const Category = ({
  className,
  category,
  transactions,
  onCheckboxChange,
  onEdit,
  onVisibilityChange,
  onDelete,
}) => {
  const isCategoryExists = !!(category.name);

  return (
    isCategoryExists
      ? (
        <div
          key={product.id}
          className={`category-item-wrapper cart-flex ${className}`}
        >
          <input
            name="isDone"
            type="checkbox"
            className="checkbox-input"
            onChange={onCheckboxChange}
          />
          <Icon
            id={category.id}
            color={category.color}
            icon={category.icon}
          />
          <div className="category-item-name">
            {category.name}
          </div>
          <div className="category-item-transactions">
            {transactions.amount}
          </div>
          <SettingBtn
            id={category.id}
            onClick={onEdit}
          />
          <VisibilityBtn
            id={category.id}
            onClick={onVisibilityChange}
          />
          <DeleteBtn
            id={category.id}
            onClick={onDelete}
          />
        </div>
      )
      : null
  );
};

Category.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  sku: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChangeSku: PropTypes.func.isRequired,
};

Category.defaultProps = {
  className: '',
};

export default Category;
