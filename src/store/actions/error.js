// Action types constants
export const errorActionTypes = {
  ERROR: 'ERROR',
};

// Action creators
export const changeErrorValue = (error) => ({
  type: errorActionTypes.ERROR,
  error,
});
