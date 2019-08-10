import { useState, useEffect } from 'react';

import { getTransactions } from '../store/actions/transactions';
import store from '../store';

export default function useAsyncProducts() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTransactions() {
    await dispatch(getTransactions());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return isLoaded;
}
