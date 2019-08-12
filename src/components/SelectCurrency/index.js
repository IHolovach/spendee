import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import './style.css';

const SelectCurrency = ({
  className,
  currency,
  transactionId,
  onChange,
}) => {
  const defaultValue = Object.keys(currency)[0].id;

  return (
    <select
      className={`select ${className}`}
      name="select-currency"
      data-name="currency"
      data-transaction-id={transactionId}
      value={defaultValue}
      onChange={onChange}
    >
      {currency.map((item) => (
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
  currency: state.config.currency,
});

SelectCurrency.propTypes = {
  className: PropTypes.string,
  currency: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
  transactionId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectCurrency.defaultProps = {
  className: '',
};

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(SelectCurrency);
