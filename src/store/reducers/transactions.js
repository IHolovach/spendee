import { transactionsActionTypes } from '../actions/transactions';

const initialState = {
  isLoaded: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case transactionsActionTypes.START_LOADING:

      return {
        ...state,
        isLoaded: false,
      };

    case transactionsActionTypes.END_LOADING:

      return {
        ...state,
        isLoaded: true,
      };

    case transactionsActionTypes.UPDATE_TRANSACTIONS:

      return {
        ...state,
        list: action.transactions,
        isLoaded: true,
      };

    default:
      return state;
  }
};
