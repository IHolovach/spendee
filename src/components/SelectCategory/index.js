import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import './style.css';

const SelectCategory = ({
  className,
  incomeCategories,
  expenseCategories,
  transactionId,
  onChange,
}) => {
  const defaultValue = '0';

  return (
    <select
      className={`select ${className}`}
      name="select-category"
      data-name="category"
      data-transaction-id={transactionId}
      value={defaultValue}
      onChange={onChange}
    >
      {incomeCategories.map((item) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.id}
        </option>
      ))}
      {expenseCategories.map((item) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.id}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  incomeCategory: state.categories.incomeCategories,
  expenseCategory: state.categories.expenseCategory,
});

SelectCategory.propTypes = {
  className: PropTypes.string,
  incomeCategories: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  expenseCategories: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  transactionId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectCategory.defaultProps = {
  className: '',
};

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(SelectCategory);
