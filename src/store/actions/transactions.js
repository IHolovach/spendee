import TransactionsService from '../../services/api/transactions';

// Action types constants
export const transactionsActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_TRANSACTIONS: 'UPDATE_TRANSACTIONS',
};

// Action creators
export const startLoading = () => ({
  type: transactionsActionTypes.START_LOADING,
});

export const endLoading = () => ({
  type: transactionsActionTypes.END_LOADING,
});

export const updateTransactions= (transactions) => ({
  type: transactionsActionTypes.UPDATE_TRANSACTIONS,
  transactions,
});

export const getTransactions = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data: transactions } = await TransactionsService.getTransactions();

    dispatch(updateTransactions(transactions));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const postTransaction = (data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await TransactionsService.postTransaction(data);
    const { data: transactions } = await TransactionsService.getTransactions();

    dispatch(updateTransactions(transactions));
  } catch (e) {
    dispatch(endLoading());
  }
};
