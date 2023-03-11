import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/LoginConstants";
import LoginServices from "../services/LoginServices";

export function* LoginIncidentsSaga(payload) {
    try {
        const response = yield call(LoginServices.Loginincidents ,payload.logindata);
        
        yield put({ type: constant.LOGIN_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.LOGIN_INCIDENTS_ERROR,error })
    }
}

export function* ChangeIncidentsSaga(payload){
    try {
        const response = yield call(LoginServices.Changeincidents ,payload.changedata);
        yield put({ type: constant.CHANGE_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.CHANGE_INCIDENTS_ERROR,error })
    }
}

export default function* LoginSaga() {
    yield takeLatest(constant.LOGIN_INCIDENTS, LoginIncidentsSaga);
    yield takeLatest(constant.CHANGE_INCIDENTS, ChangeIncidentsSaga);
}
