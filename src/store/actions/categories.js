import CategoriesService from '../../services/api/categories';

// Action types constants
export const categoriesActionTypes = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  UPDATE_CATEGORIES: 'UPDATE_CATEGORIES',
};

// Action creators
export const startLoading = () => ({
  type: categoriesActionTypes.START_LOADING,
});

export const endLoading = () => ({
  type: categoriesActionTypes.END_LOADING,
});

export const updateCategories = (typeId, categories) => ({
  type: categoriesActionTypes.UPDATE_CATEGORIES,
  typeId,
  categories,
});

export const getIncomeCategories = (type) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data: categories } = await CategoriesService.getCategories(type);

    dispatch(updateCategories(type, categories));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const getExpenseCategories = (type) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data: categories } = await CategoriesService.getCategories(type);

    dispatch(updateCategories(type, categories));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const postCategory = (type, data) => async (dispatch, store) => {
  const { categories } = store.getState();

  try {
    dispatch(startLoading());
    await CategoriesService.editCategory(type, data);
    const { data: categories } = await CategoriesService.postCategory(type);

    dispatch(updateCategories(type, categories));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const editCategory = (type, data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await CategoriesService.editCategory(type, data);
    const { data: categories } = await CategoriesService.getCategories(type);

    dispatch(updateCategories(type, categories));
  } catch (e) {
    dispatch(endLoading());
  }
};

export const deleteCategory = (type, data) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await CategoriesService.deleteCategory(type, data);
    const { data: categories } = await CategoriesService.getCategories(type);

    dispatch(updateCategories(type, categories));
  } catch (e) {
    dispatch(endLoading());
  }
};
