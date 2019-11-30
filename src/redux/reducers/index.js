import { combineReducers } from 'redux';

import parking from './parking.reducer';
import vendor from './vendor.reducer';
import cart from './cart.reducer';

export default combineReducers({ parking, vendor, cart });
