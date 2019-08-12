import ConfigService from '../../services/api/config';

// Action types constants
export const configActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_CONFIG: 'UPDATE_CONFIG',
};

const dataTypes = {
  currency: 'currency',
  icons: 'icons',
  colors: 'colors',
  categoryTypes: 'categoryTypes',
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

export const getIcons = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const icons = await ConfigService.getIcons();

    dispatch(updateConfig(dataTypes.icons, icons));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const getColors = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const colors = await ConfigService.getColors();

    dispatch(updateConfig(dataTypes.colors, colors));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const getCategoryTypes = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const categoryTypes = await ConfigService.getCategoryTypes();

    dispatch(updateConfig(dataTypes.categoryTypes, categoryTypes));
  } catch (e) {
    dispatch(endLoading());
  }
};
