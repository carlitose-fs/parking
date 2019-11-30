import { call, put, takeLatest } from 'redux-saga/effects';
import { vendorGetSuccess, vendorGetFailed } from '../actions';
import { GET_VENDOR_DATA } from '../actions/types';
import json from './mock/model.json';

const getVendors = () => new Promise((resolve) => {
  setImmediate(() => resolve(json.vendors));
});


function* fetchVendorData() {
  try {
    const data = yield call(getVendors);
    yield put(vendorGetSuccess(data.data));
  } catch (e) {
    yield put(vendorGetFailed(e));
  }
}

function* vendorSaga() {
  yield takeLatest(GET_VENDOR_DATA, fetchVendorData);
}

export default vendorSaga;
