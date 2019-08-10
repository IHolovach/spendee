import Config from '../../config';
import {
  getRequest,
  postRequest,
} from '../requests';

export default class TransactionsService {
  static async getTransactions() {
    try {
      return await getRequest(Config.api.transactions);
    } catch (err) {
      return err;
    }
  }

  static async postTransaction(data) {
    try {
      return await postRequest(Config.api.transactions, data);
    } catch (err) {
      return err;
    }
  }
}
