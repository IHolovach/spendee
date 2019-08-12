import React from 'react';
import PropTypes from 'prop-types';

import Transaction from '../../../components/Transaction';

import './style.css';

const TransactionList = ({
  className,
  transactions, // amount info
}) => {
  const isTransactions = !!(transactions.length);

  return (
    isTransactions
      ? (
        transactions.map(transaction => (
          <div className={`transaction ${className}`}>
            {transaction.date}
            ,
            {transaction.note}
            ,
            {transaction.currency.id}
          </div>
        ))
      )
      : <div>You haven't transactions</div>
  );
};

TransactionList.propTypes = {
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

TransactionList.defaultProps = {
  className: '',
};

export default TransactionList;
