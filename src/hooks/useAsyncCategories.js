import { useState, useEffect } from 'react';

import {
  getIncomeCategories,
  getExpenseCategories,
} from '../store/actions/categories';
import store from '../store';

export default function useAsyncCategories() {
  const { dispatch } = store;
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchCategories() {
    await dispatch(getIncomeCategories());
    await dispatch(getExpenseCategories());
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return isLoaded;
}
