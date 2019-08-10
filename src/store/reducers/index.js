import { combineReducers } from 'redux';

import modal from './modal';
import config from './config';
import transactions from './transactions';
import categories from './categories';
import error from './error';

export default combineReducers({
  modal,
  config,
  categories,
  transactions,
  error,
});
