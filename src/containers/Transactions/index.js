import React from 'react';

import useAsyncTransactions from '../../hooks/useAsyncTransactions';
import useAsyncStaticData from '../../hooks/useAsyncStaticData';
import Transactions from '../../components/List';
import CartContainer from '../../container-components/Cart';

import './style.css';

const Cart = () => {
  const isTransactionsLoading = useAsyncTransactions();
  const isStaticDataLoading = useAsyncStaticData();

  if (!isTransactionsLoading || !isStaticDataLoading) return null;

  return (
    <TransactionsContainer>
      {containerProps => (
        <Transactions
          className="cart"
          listTitle="Cart"
          products={containerProps.products}
          sku={containerProps.sku}
          total={containerProps.total}
          onQuantityChange={containerProps.onQuantityChange}
          onDeleteItem={containerProps.onDeleteItem}
          onChangeSku={containerProps.onChangeSku}
        />
      )}
    </TransactionsContainer>
  );
};

export default Cart;
