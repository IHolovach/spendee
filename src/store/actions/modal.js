// Action types constants
export const modalActionTypes = {
  SET_MODAL: 'SET_MODAL',
  REMOVE_MODAL: 'REMOVE_MODAL',
};

// Action creators
export const setModal = (modal) => ({
  type: modalActionTypes.SET_MODAL,
  modal,
});

export const removeModal = () => ({
  type: modalActionTypes.REMOVE_MODAL,
});
