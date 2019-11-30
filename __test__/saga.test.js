import { put, takeLatest } from 'redux-saga/effects';
import vendorSaga, { fetchVendorData } from '../src/redux/saga/vendor.saga';
import parkingSaga, { fetchParkingData } from '../src/redux/saga/parking.saga';
import json from '../src/redux/saga/mock/model.json';

const {
  GET_PARKING_DATA, GET_VENDOR_DATA, VENDOR_GET_SUCCESS,
  PARKING_GET_SUCCESS,
} = require('../src/redux/actions/types');

describe('Vendor saga', () => {
  it('should dispatch action GET_VENDOR_DATA ', () => {
    const generator = vendorSaga();
    expect(generator.next().value)
      .toEqual(takeLatest(GET_VENDOR_DATA, fetchVendorData));
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action VENDOR_GET_SUCCESS with result from fetchVendorData API', () => {
    const mockResponse = json.vendors;
    const generator = fetchVendorData();
    generator.next();
    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: VENDOR_GET_SUCCESS, payload: json.vendors }));
    expect(generator.next().done).toBeTruthy();
  });
});

describe('Parkings saga', () => {
  it('should dispatch action GET_PARKING_DATA ', () => {
    const generator = parkingSaga();
    expect(generator.next().value)
      .toEqual(takeLatest(GET_PARKING_DATA, fetchParkingData));
    expect(generator.next().done).toBeTruthy();
  });
  it('should dispatch action PARKING_GET_SUCCESS with result from fetchParkingData API', () => {
    const mockResponse = json.parkings;
    const generator = fetchParkingData();
    generator.next();
    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: PARKING_GET_SUCCESS, payload: json.parkings }));
    expect(generator.next().done).toBeTruthy();
  });
});
