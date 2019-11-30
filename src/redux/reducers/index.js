import { combineReducers } from 'redux';

import parking from './parking.reducer';
import vendor from './vendor.reducer';

export default combineReducers({ parking, vendor });
