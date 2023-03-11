import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/CommonConstants";
import CommonServices from "../services/CommonService";

export function* ViewPackagenameSaga() {
    try {
        const response = yield call(CommonServices.ViewPackagename);
        if (response.status === 200) {
            yield put({ type: constant.PACKAGENAME_INIT_SUCCESS, response })
        }
        else {
            yield put({ type: constant.PACKAGENAME_INIT_SUCCESS, response :[] })
        }
      
    } catch (error) {
        yield put({ type: constant.PACKAGENAME_INIT_ERROR, error })
    }
}

export function* ViewMenulistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewMenulist, payload.packageName);
 
        yield put({ type: constant.MENULIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.MENULIST_INIT_ERROR, error })
    }
}

export function* ViewFilterlistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewFilterlist, payload.packageName);
        yield put({ type: constant.FILTERLIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.FILTERLIST_INIT_ERROR, error })
    }
}

export function* ViewChannellistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewChannellist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.CHANNEL_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.CHANNEL_LIST_INIT_ERROR, error })
    }
}
export function* ViewCountrylistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewCountrylist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.COUNTRY_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.COUNTRY_LIST_INIT_ERROR, error })
    }
}
export function* ViewCategorylistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewCategorylist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.CATEGORY_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.CATEGORY_LIST_INIT_ERROR, error })
    }
}
export function* ViewBrandlistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewBrandlist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.BRAND_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.BRAND_LIST_INIT_ERROR, error })
    }
}
export function* ViewPrioritylistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewPrioritylist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.PRIORITY_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.PRIORITY_LIST_INIT_ERROR, error })
    }
}
export function* ViewPublisherlistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewPublisherlist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.PUBLISHER_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_LIST_INIT_ERROR, error })
    }
}
export function* ViewStatuslistSaga(payload) {
    try {
        const response = yield call(CommonServices.ViewStatuslist, payload.packageName,payload.fromDate,payload.toDate);
        yield put({ type: constant.STATUS_LIST_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.STATUS_LIST_INIT_ERROR, error })
    }
}


export default function* CommonSaga() {
    yield takeLatest(constant.PACKAGENAME_INIT, ViewPackagenameSaga);
    yield takeLatest(constant.MENULIST_INIT, ViewMenulistSaga);
    yield takeLatest(constant.FILTERLIST_INIT, ViewFilterlistSaga);
    yield takeLatest(constant.CHANNEL_LIST_INIT, ViewChannellistSaga);
    yield takeLatest(constant.COUNTRY_LIST_INIT, ViewCountrylistSaga);
    yield takeLatest(constant.CATEGORY_LIST_INIT, ViewCategorylistSaga);
    yield takeLatest(constant.BRAND_LIST_INIT, ViewBrandlistSaga);
    yield takeLatest(constant.PRIORITY_LIST_INIT, ViewPrioritylistSaga);
    yield takeLatest(constant.PUBLISHER_LIST_INIT, ViewPublisherlistSaga);
    yield takeLatest(constant.STATUS_LIST_INIT, ViewStatuslistSaga);
}