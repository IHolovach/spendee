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
}
