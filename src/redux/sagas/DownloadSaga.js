import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/DownloadConstants";
import DownloadService from "../services/DownloadService";
import { API, API_DOWNLOAD_CALL } from "../setupAxios";
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

export function* DownloadReportSaga(payload) {
    try {
        let queryParams = payload.downloaddata 
        let searchParams = new URLSearchParams()
        Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
        let url = ApiUrl + EndPoints.download_report + "?" + searchParams;
    
        const response = yield API_DOWNLOAD_CALL.get(url);

        yield put({ type: constant.DOWNLOAD_INIT_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.DOWNLOAD_INIT_ERROR, error })
    }
}

export default function* DownloadSaga() {
    yield takeLatest(constant.DOWNLOAD_INIT, DownloadReportSaga);


}