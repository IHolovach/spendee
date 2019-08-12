import { modalActionTypes } from '../actions/modal';

const modalState = {
  content: null,
};

export default (state = modalState, action) => {
  switch (action.type) {
    case modalActionTypes.SET_MODAL: {
      return {
        ...state,
        content: action.modal,
      };
    }

    case modalActionTypes.REMOVE_MODAL: {
      return {
        ...state,
        content: null,
      };
    }

    default:
      return state;
  }
};
