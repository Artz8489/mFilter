// import { takeLatest, put, call } from "redux-saga/effects";
// import * as constant from "../constants/Publisher";
// import PublisherServices from "../services/PublisherServices";

// export function* ViewPublisherSaga(payload) {
//     try{
//         const response = yield call(PublisherServices.ViewPublisher ,payload.publisherData);
//         yield put({ type: constant.PUBLISHER_ADD_SUCCESS,response })
//     } catch (error) {
//         yield put({ type: constant.PUBLISHER_ADD_ERROR,error })
//     }
// }

// export function* ViewGetPublisherSaga(payload) {
//     try{
//         const response = yield call(PublisherServices.ViewPublisherGet ,payload.publisherGetData);
//         yield put({ type: constant.PUBLISHER_GET_SUCCESS,response })
//     } catch (error) {
//         yield put({ type: constant.PUBLISHER_GET_ERROR,error })
//     }
// }

// export function* ViewPublisherUpdateSaga(payload) {
//     try{
//         const response = yield call(PublisherServices.ViewPublisherUpdate ,payload.publisherUpdateData);
//         yield put({ type: constant.PUBLISHER_UPDATE_SUCCESS,response })
//     } catch (error) {
//         yield put({ type: constant.PUBLISHER_UPDATE_ERROR,error })
//     }
// }

// export function* ViewPublisherDeleteSaga(payload) {
//     try{
//         const response = yield call(PublisherServices.ViewPublisherDelete ,payload.publisherDeleteData);
//         yield put({ type: constant.PUBLISHER_DELETE_SUCCESS,response })
//     } catch (error) {
//         yield put({ type: constant.PUBLISHER_DELETE_ERROR,error })
//     }
// }

// export default function* PublisherSaga() {
//     yield takeLatest(constant.PUBLISHER_ADD, ViewPublisherSaga);
//     yield takeLatest(constant.PUBLISHER_GET, ViewGetPublisherSaga);
//     yield takeLatest(constant.PUBLISHER_UPDATE, ViewPublisherUpdateSaga);
//     yield takeLatest(constant.PUBLISHER_DELETE, ViewPublisherDeleteSaga);
// }

import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/Publisher";
import PublisherServices from "../services/PublisherServices";

export function* ViewPublisherSaga(payload) {
    try{
        const response = yield call(PublisherServices.ViewPublisher ,payload.publisherData);
        yield put({ type: constant.PUBLISHER_ADD_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_ADD_ERROR,error })
    }
}

export function* ViewGetPublisherSaga(payload) {
    try{
        const response = yield call(PublisherServices.ViewPublisherGet ,payload.publisherGetData);
        yield put({ type: constant.PUBLISHER_GET_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_GET_ERROR,error })
    }
}

export function* ViewPublisherUpdateSaga(payload) {
    try{
        const response = yield call(PublisherServices.ViewPublisherUpdate, payload);
        yield put({ type: constant.PUBLISHER_UPDATE_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_UPDATE_ERROR,error })
    }
}

export function* ViewPublisherDeleteSaga(payload) {
    try{
        const response = yield call(PublisherServices.ViewPublisherDelete ,payload);
        yield put({ type: constant.PUBLISHER_DELETE_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.PUBLISHER_DELETE_ERROR,error })
    }
}

export default function* PublisherSaga() {
    yield takeLatest(constant.PUBLISHER_ADD, ViewPublisherSaga);
    yield takeLatest(constant.PUBLISHER_GET, ViewGetPublisherSaga);
    yield takeLatest(constant.PUBLISHER_UPDATE, ViewPublisherUpdateSaga);
    yield takeLatest(constant.PUBLISHER_DELETE, ViewPublisherDeleteSaga);
}