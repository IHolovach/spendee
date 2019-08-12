import React from 'react';

import useAsyncTransactions from '../../hooks/useAsyncTransactions';
import useAsyncStaticData from '../../hooks/useAsyncStaticData';
import TransactionsContainer from '../../container-components/Transactions';
import AddTransactionBtn from './AddTransactionBtn';
import TransactionList from './TransactionList';

import './style.css';

const Transactions = () => {
  const isTransactionsLoading = useAsyncTransactions();
  const isStaticDataLoading = useAsyncStaticData();

  if (!isTransactionsLoading || !isStaticDataLoading) return null;

  return (
    <TransactionsContainer>
      {containerProps => (
        <div className="transactions">
          <AddTransactionBtn onClick={containerProps.addTransactionModal} />
          <TransactionList transactions={containerProps.transactions} />
        </div>
      )}
    </TransactionsContainer>
  );
};

export default Transactions;
