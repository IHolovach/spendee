import Config from '../../config';
import {
  getRequest,
  postRequest,
  putRequest,
} from '../requests';

export default class CategoriesService {
  static async getCategories() {
    try {
      return await getRequest(Config.api.categories);
    } catch (err) {
      return err;
    }
  }

  static async postCategory(data) {
    try {
      return await postRequest(Config.api.categories, data);
    } catch (err) {
      return err;
    }
  }

  static async editCategory(type, data) {
    try {
      const body = {
        type,
        data,
      };
      return await putRequest(Config.api.categories, body);
    } catch (err) {
      return err;
    }
  }

  static async deleteCategory() {
    try {
      return await deleteRequest(Config.api.categories);
    } catch (err) {
      return err;
    }
  }
}
