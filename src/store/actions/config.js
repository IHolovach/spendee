import ConfigService from '../../services/api/config';

// Action types constants
export const configActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_CONFIG: 'UPDATE_CONFIG',
};

const dataTypes = {
  currency: 'currency',
};

// Action creators
export const startLoading = () => ({
  type: configActionTypes.START_LOADING,
});

export const endLoading = () => ({
  type: configActionTypes.END_LOADING,
});

export const updateConfig = (dataType, data) => ({
  type: configActionTypes.UPDATE_CONFIG,
  dataType,
  data,
});

export const getCurrency = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const currency = await ConfigService.getCurrency();

    dispatch(updateConfig(dataTypes.currency, currency));
  } catch (e) {
    dispatch(endLoading());
  }
};
