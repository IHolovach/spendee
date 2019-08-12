import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import SelectCategory from '../../components/SelectCategory';
import SelectCurrency from '../../components/SelectCurrency';

import './style.css';

const CreateTransaction = ({
  className,
  categories,
  currency,
  onCategoryChange,
  onDateChange,
  onNoteChange,
  onAmountChange,
  onCurrencyChange,
  addTransaction,
  getRandomInt,
}) => {
  const transactionId = getRandomInt(1000, 2000);

  return (
    <div className={`add-transaction ${className}`}>
      <div className="add-transaction__labels_level">
      </div>
      <div className="add-transaction__inputs_level">
        <SelectCategory
          className="add-transaction_category"
          categories={categories}
          onChange={onCategoryChange}
        />
        <div className="add-transaction_date">
          <DatePicker
            selected={new Date()}
            onChange={onDateChange}
          />
        </div>
        <input
          type="text"
          name="note"
          className="add-transaction_note"
          onChange={onNoteChange}
        />
        <input
          type="number"
          name="amount"
          className="add-transaction_amount"
          onChange={onAmountChange}
        />
        <SelectCurrency
          className="add-transaction_currency"
          currency={currency}
          onClick={onCurrencyChange}
        />
      </div>
      <div className="add-transaction__buttons_level">
        <button
          type="button"
          className="add-transaction_submit"
          data-transaction-id={transactionId}
          onClick={addTransaction}
        >
          Add transaction
        </button>
      </div>
    </div>
  );
};

CreateTransaction.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  currency: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onNoteChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired,
  getRandomInt: PropTypes.func.isRequired,
};

CreateTransaction.defaultProps = {
  className: '',
};

export default CreateTransaction;
