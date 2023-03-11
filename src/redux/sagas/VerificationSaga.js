import { takeLatest, put, call } from 'redux-saga/effects';
import * as constant from '../constants/VerificationConstants';
import VerificationServices from '../services/VerificationService';

export function* VerifySaga(payload) {
  try {
    const response = yield call(VerificationServices.Verify, payload.body);
    yield put({ type: constant.VERIFICATION_FETCH_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.VERIFICATION_FETCH_ERROR, error });
  }
}
export function* bulkBankVerify(payload) {
  try {
    const response = yield call(
      VerificationServices.bulkBankVerify,
      payload.body
    );
    yield put({
      type: constant.BULK_BANK_VERIFICATION_FETCH_SUCCESS,
      response,
    });
  } catch (error) {
    yield put({ type: constant.BULK_BANK_VERIFICATION_FETCH_ERROR, error });
  }
}

export default function* VerificationSaga() {
  yield takeLatest(constant.VERIFICATION_INIT, VerifySaga);
  yield takeLatest(constant.BULK_BANK_VERIFICATION_INIT, bulkBankVerify);
}
