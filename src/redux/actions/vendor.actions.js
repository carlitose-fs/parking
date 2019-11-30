import { GET_VENDOR_DATA,
  VENDOR_GET_SUCCESS,
  VENDOR_GET_FAIL } from './types';

export const getVendorData = () => ({ type: GET_VENDOR_DATA });
export const vendorGetFail = err => ({ type: VENDOR_GET_FAIL, payload: err });
export const vendorGetSuccess = data => ({ type: VENDOR_GET_SUCCESS, payload: data });
