import { categoriesActionTypes } from '../actions/categories';

const initialState = {
  isLoaded: false,
  income: [],
  expense: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoriesActionTypes.START_LOADING:

      return {
        ...state,
        isLoaded: false,
      };

    case categoriesActionTypes.END_LOADING:

      return {
        ...state,
        isLoaded: true,
      };

    case categoriesActionTypes.UPDATE_CATEGORIES:

      return {
        ...state,
        [action.typeId]: action.categories,
        isLoaded: true,
      };

    default:
      return state;
  }
};
