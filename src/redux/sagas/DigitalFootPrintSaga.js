import { takeLatest, put, call } from 'redux-saga/effects';
import * as constant from '../constants/DigitalFootPrintConstants';
import DigitalFootPrintService from '../services/DigitalFootPrintService';
import { API } from "../setupAxios";
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

export function* viewDigitalFootPrintSaga(payload) {
  try {
    let url = ApiUrl + EndPoints.DIGITAL_FOOT_PRINT;
    const response = yield API.get(url);

    // const response = yield call(DigitalFootPrintService.getReport);
    yield put({ type: constant.DIGITALFOOTPRINT_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.DIGITALFOOTPRINT_ERROR, error });
  }
}
export default function* DigitalFootPrintSaga() {
  yield takeLatest(constant.DIGITALFOOTPRINT_INIT, viewDigitalFootPrintSaga);
}
