import { useState, useEffect } from 'react';

import {
  getCategoryTypes,
  getColors,
  getCurrency,
  getIcons,
} from '../store/actions/config';
import store from '../store';

export default function useAsyncProducts() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTransactions() {
    await dispatch(getCurrency());
    await dispatch(getIcons());
    await dispatch(getColors());
    await dispatch(getCategoryTypes());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return isLoaded;
}
