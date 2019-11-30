import { call, put, takeLatest } from 'redux-saga/effects';
import { parkingGetSuccess, parkingGetFail } from '../actions';
import { GET_PARKING_DATA } from '../actions/types';
import json from './mock/model.json';

const getParkings = () => new Promise((resolve) => {
  setImmediate(() => resolve(json.parkings));
});


export function* fetchParkingData() {
  try {
    const data = yield call(getParkings);
    yield put(parkingGetSuccess(data));
  } catch (e) {
    yield put(parkingGetFail(e));
  }
}

function* parkingSaga() {
  yield takeLatest(GET_PARKING_DATA, fetchParkingData);
}

export default parkingSaga;
