import { takeLatest, put, call } from 'redux-saga/effects';
import * as constant from '../constants/DeepDiveConstants';
import DeepDiveService from '../services/DeepDiveService';

export function* getDeepDiveSaga() {
  try {
    const response = yield call(DeepDiveService.GetDeepDiveUrl);
    console.log('response', response);
    yield put({ type: constant.DEEPDIVE_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.DEEPDIVE_ERROR, error });
  }
}
export default function* DeepDiveSaga() {
  yield takeLatest(constant.DEEPDIVE_INIT, getDeepDiveSaga);
}
