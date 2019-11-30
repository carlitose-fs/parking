import { call, put, takeLatest } from 'redux-saga/effects';
import { vendorGetSuccess, vendorGetFailed } from '../actions';
import { GET_VENDOR_DATA } from '../actions/types';

function* fetchVendorData() {
  try {
    const data = yield call(getVat);
    yield put(vendorGetSuccess(data.data));
  } catch (e) {
    yield put(vendorGetFailed());
  }
}

function* vendorSaga() {
  yield takeLatest(GET_VENDOR_DATA, fetchVendorData);
}

export default vendorSaga;
