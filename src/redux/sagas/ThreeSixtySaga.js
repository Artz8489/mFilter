import { takeLatest, put, call } from 'redux-saga/effects';
import * as constant from '../constants/ThreeSixtyConstants';
import ThreeSixtyService from '../services/ThreeSixtyService';

export function* GetTicketsSaga() {
  try {
    const response = yield call(ThreeSixtyService.GetTickets);
    yield put({ type: constant.THREESIXTY_FETCH_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.THREESIXTY_FETCH_ERROR, error });
  }
}
export function* UploadFilesSaga(payload) {
  try {
    const response = yield call(ThreeSixtyService.UploadFile, payload);
    console.log('Upload response', response);
    yield put({ type: constant.THREESIXTY_UPLOAD_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.THREESIXTY_UPLOAD_ERROR, error });
  }
}

export default function* ThreeSixtySaga() {
  yield takeLatest(constant.THREESIXTY_INIT, GetTicketsSaga);
  yield takeLatest(constant.THREESIXTY_UPLOAD_INIT, UploadFilesSaga);
}
