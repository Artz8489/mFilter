import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/MtrackConstants";

import { API } from "../setupAxios";
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

export function* ViewTotalRevenueSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata};
        const url = ApiUrl + EndPoints.revenue
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_REVENUE_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_REVENUE_ERROR, error })
    }
}
export function* ViewTotalCostSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata};
        const url = ApiUrl + EndPoints.cost
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_COST_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_COST_ERROR, error })
    }
}
export function* ViewTotalEventsSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata};
        const url = ApiUrl + EndPoints.events
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_EVENTS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_EVENTS_ERROR, error })
    }
}
export function* ViewTotalClicksSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata};
        const url = ApiUrl + EndPoints.clicks
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_CLICKS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_CLICKS_ERROR, error })
    }
}
export function* ViewTotalPubeventsSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata, ...payload.fromDate , ...payload.toDate , publisher_name: 'all' };
        const url = ApiUrl + EndPoints.pubevents
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_PUBEVENTS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_PUBEVENTS_ERROR, error })
    }
}

export function* ViewTotalPubclicksSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata, ...payload.fromDate , ...payload.toDate , publisher_name: 'all' };
        const url = ApiUrl + EndPoints.pubcosts
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_PUBCLICKS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_PUBCLICKS_ERROR, error })
    }
}

export function* ViewTotalOverpubclicksSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata, ...payload.fromDate , ...payload.toDate , publisher_name: 'all' };
        const url = ApiUrl + EndPoints.pubover
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_OVERPUBCLICKS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_OVERPUBCLICKS_ERROR, error })
    }
}

export function* ViewTotalFraudpubclicksSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata, ...payload.fromDate , ...payload.toDate , publisher_name: 'all' };
        const url = ApiUrl + EndPoints.pubfraud
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_FRAUDPUBCLICKS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_FRAUDPUBCLICKS_ERROR, error })
    }
}
export function* ViewTotalEventpubclicksSaga(payload) {

    try {
        // const response = yield call(DashboardServices.ViewTotalincidents, payload.dashboarddata);
        // const params = {...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore", }


        // const params =  {
        //     ...payload.dashboarddata, status: 'all',  package_name: localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
        //     conversion_package_name: 'web.biba.cp%C3%A5v&',
        //     fromDate:'2020-01-10',
        //     toDate: '2023-01-10',
        //     publisher_name:'all',
        //     campaign_name:'all'
        // }
        const params = {...payload.dashboarddata, ...payload.fromDate , ...payload.toDate , publisher_name: 'all' };
        const url = ApiUrl + EndPoints.pubevent
        const response = yield API.get(url, { params });
   
        yield put({ type: constant.TOTAL_EVENTPUBCLICKS_SUCCESS, response })
    } catch (error) {
        yield put({ type: constant.TOTAL_EVENTPUBCLICKS_ERROR, error })
    }
}

export default function* DashboardSaga() {
    yield takeLatest(constant.TOTAL_REVENUE, ViewTotalRevenueSaga);
    yield takeLatest(constant.TOTAL_COST, ViewTotalCostSaga);
    yield takeLatest(constant.TOTAL_EVENTS, ViewTotalEventsSaga);
    yield takeLatest(constant.TOTAL_CLICKS, ViewTotalClicksSaga);
    yield takeLatest(constant.TOTAL_PUBEVENTS, ViewTotalPubeventsSaga);
    yield takeLatest(constant.TOTAL_PUBCLICKS, ViewTotalPubclicksSaga);
    yield takeLatest(constant.TOTAL_OVERPUBCLICKS, ViewTotalOverpubclicksSaga);
    yield takeLatest(constant.TOTAL_FRAUDPUBCLICKS, ViewTotalFraudpubclicksSaga);
    yield takeLatest(constant.TOTAL_EVENTPUBCLICKS, ViewTotalEventpubclicksSaga);

}