import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/CampaignConstants";
import CampaignServices from "../services/CampaignServices";

// export function* ViewCampaignIncidentsSaga(payload) {
// console.log('payload  --------', payload)
//     try{
//         const response = yield call(CampaignServices.ViewCampaignincidents ,payload.campaigndata);
//         yield put({ type: constant.CAMPAIGN_INCIDENTS_SUCCESS,response })
//     } catch (error) {
//         yield put({ type: constant.CAMPAIGN_INCIDENTS_ERROR,error })
//     }
// }

export function* ViewCampaignSaga(payload) {
    try{
        const response = yield call(CampaignServices.ViewCampaign ,payload.campaignData);
        yield put({ type: constant.CAMPAIGN_ADD_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.CAMPAIGN_ADD_ERROR,error })
    }
}

export function* ViewGetCampaignSaga(payload){
    try{
        const response = yield call(CampaignServices.ViewCampaignGet ,payload.campaignGetData);
        yield put({ type: constant.CAMPAIGN_GET_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.CAMPAIGN_GET_ERROR,error })
    }
}

export function* ViewUpdateCampaignSaga(payload){
    try{
        const response = yield call(CampaignServices.ViewCampaignUpdate ,payload.campaignUpdatetData);
        yield put({ type: constant.CAMPAIGN_UPDATE_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.CAMPAIGN_UPDATE_ERROR,error })
    }
}
export function* ViewDeleteCampaignSaga(payload) {
    try{
        const response = yield call(CampaignServices.ViewCampaignDelete ,payload);
        yield put({ type: constant.CAMPAIGN_DELETE_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.CAMPAIGN_DELETE_ERROR,error })
    }
}

export default function* CampaignSaga() {
    yield takeLatest(constant.CAMPAIGN_ADD, ViewCampaignSaga);
    yield takeLatest(constant.CAMPAIGN_GET, ViewGetCampaignSaga);
    yield takeLatest(constant.CAMPAIGN_UPDATE, ViewUpdateCampaignSaga);
    yield takeLatest(constant.CAMPAIGN_DELETE, ViewDeleteCampaignSaga);
}