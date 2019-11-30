import { INITIAL_STATE } from '../data/vendor.data';
import {
  VENDOR_GET_SUCCESS,
  VENDOR_GET_FAIL,
} from '../actions/types';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case VENDOR_GET_SUCCESS:
      return { ...state, vendors: payload };
    case VENDOR_GET_FAIL:
      return { ...state, error: payload };
    default: return state;
  }
};
