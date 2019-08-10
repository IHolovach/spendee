import { errorActionTypes } from '../actions/error';

export const errorInitialState = {
  error: {},
};

export default (state = errorInitialState, action) => {
  switch (action.type) {
    case errorActionTypes.ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
