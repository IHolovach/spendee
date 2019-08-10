import { modalActionTypes } from '../actions/modal';

const modalState = {
  isSet: null,
};

export default (state = modalState, action) => {
  switch (action.type) {
    case modalActionTypes.SET_MODAL: {
      return {
        ...state,
        isSet: action.modal,
      };
    }

    case modalActionTypes.REMOVE_MODAL: {
      return {
        ...state,
        isSet: null,
      };
    }

    default:
      return state;
  }
};
