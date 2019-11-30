import { all } from 'redux-saga/effects';
import parkingSaga from './parking.saga';
import vendorSaga from './vendor.saga';

export default function* rootSaga() {
  yield all([
    parkingSaga(),
    vendorSaga(),
  ]);
}
