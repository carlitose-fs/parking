import { GET_PARKING_DATA,
  PARKING_GET_SUCCESS,
  PARKING_GET_FAIL } from './types';

export const getParkingData = () => ({ type: GET_PARKING_DATA });
export const parkingGetFail = err => ({ type: PARKING_GET_FAIL, payload: err });
export const parkingGetSuccess = data => ({ type: PARKING_GET_SUCCESS, payload: data });
