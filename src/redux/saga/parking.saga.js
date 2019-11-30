import { call, put, takeLatest } from 'redux-saga/effects';
import { parkingGetSuccess, parkingGetFailed } from '../actions';
import { GET_PARKING_DATA } from '../actions/types';

function* fetchParkingData() {
  try {
    const data = yield call(getVat);
    yield put(parkingGetSuccess(data.data));
  } catch (e) {
    yield put(parkingGetFailed());
  }
}

function* parkingSaga() {
  yield takeLatest(GET_PARKING_DATA, fetchParkingData);
}

export default parkingSaga;
