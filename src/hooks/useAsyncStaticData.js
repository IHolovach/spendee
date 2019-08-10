import { useState, useEffect } from 'react';

import { getCurrency } from '../store/actions/config';
import store from '../store';

export default function useAsyncProducts() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTransactions() {
    await dispatch(getCurrency());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return isLoaded;
}
