import Config from '../../config';
import { getRequest } from '../requests';

export default class ConfigService {
  static async getCurrency() {
    try {
      return await getRequest(Config.api.currency);
    } catch (err) {
      return err;
    }
  }

  static async getIcons() {
    try {
      return await getRequest(Config.api.icons);
    } catch (err) {
      return err;
    }
  }

  static async getColors() {
    try {
      return await getRequest(Config.api.colors);
    } catch (err) {
      return err;
    }
  }

  static async getCategoryTypes() {
    try {
      return await getRequest(Config.api.categoryTypes);
    } catch (err) {
      return err;
    }
  }
}
