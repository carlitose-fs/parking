import { INITIAL_STATE } from '../data/parking.data';
import {
  PARKING_GET_SUCCESS,
  PARKING_GET_FAIL,
} from '../actions/types';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PARKING_GET_SUCCESS:
      return { ...state, parkings: payload };
    case PARKING_GET_FAIL:
      return { ...state, error: payload };
    default: return state;
  }
};
