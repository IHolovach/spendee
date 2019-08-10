import { configActionTypes } from '../actions/config';

const initialState = {
  isLoaded: false,
  currency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case configActionTypes.START_LOADING:

      return {
        ...state,
        isLoaded: false,
      };

    case configActionTypes.END_LOADING:

      return {
        ...state,
        isLoaded: true,
      };

    case configActionTypes.UPDATE_CONFIG:

      return {
        ...state,
        [action.dataType]: action.data,
        isLoaded: true,
      };

    default:
      return state;
  }
};
