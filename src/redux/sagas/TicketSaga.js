import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/TicketConstants";
import TicketServices from "../services/TicketServices";
import { API } from "../setupAxios";
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

export function* ViewTicketIncidentsSaga(payload) {
    try {
        const params ={ ...payload.paginationParams}
        let searchParams = new URLSearchParams()
        Object.keys(params).forEach(key => searchParams.append(key, params[key]));
        let url = ApiUrl + EndPoints.ticket + "?" + searchParams        
        const response = yield API.get(url);

        //  const response = yield call(TicketServices.ViewTicketincidents,payload.paginationParams);
        yield put({ type: constant.TICKET_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKET_INCIDENTS_ERROR,error })
    }
}

export function* ViewTicketSearchincidents(payload) {
    try {
        let url = ApiUrl + EndPoints.search_ticket + "/" + payload.ticketsearchdata
        const response = yield API.get(url);
        // const response = yield call(TicketServices.ViewTicketSearchincidents ,payload.ticketsearchdata);
        yield put({ type: constant.TICKETSEARCH_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKETSEARCH_INCIDENTS_ERROR,error })
    }
}
export function* ViewTicketPriorityincidents() {
    try {
        let url = ApiUrl + EndPoints.priority
        const response = yield API.get(url);
        // const response = yield call(TicketServices.ViewTicketPriorityincidents);
        yield put({ type: constant.TICKETPRIORITY_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKETPRIORITY_INCIDENTS_ERROR,error })
    }
}
export function* ViewTicketAssigneeincidents() {
    try {
        let url = ApiUrl + EndPoints.ticket_customer;
            const response = yield API.get(url);
        
        // const response = yield call(TicketServices.ViewTicketAssigneeincidents);
        yield put({ type: constant.TICKETASSIGNEE_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKETASSIGNEE_INCIDENTS_ERROR,error })
    }
}
export function* ViewTicketStatusincidents() {
    try {
        let url = ApiUrl + EndPoints.status_ticket
        const response = yield API.get(url);
        // const response = yield call(TicketServices.ViewTicketStatusincidents);
        yield put({ type: constant.TICKETSTATUS_INCIDENTS_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKETSTATUS_INCIDENTS_ERROR,error })
    }
}
export function* TicketUpdateSaga(payload) {
    try {
        let url = ApiUrl + EndPoints.ticket_update + "/" + payload.id
        const response = yield API.put(url, payload.formData);

        //  const response = yield call(TicketServices.UpdateTicketApi, payload.formData , payload.id );
        yield put({ type: constant.TICKET_UPDATE_SUCCESS,response })
    } catch (error) {
        yield put({ type: constant.TICKET_UPDATE_ERROR,error })
    }
}

export default function* TicketSaga() {
    yield takeLatest(constant.TICKET_INCIDENTS, ViewTicketIncidentsSaga);
    yield takeLatest(constant.TICKETSEARCH_INCIDENTS, ViewTicketSearchincidents);
    yield takeLatest(constant.TICKETPRIORITY_INCIDENTS, ViewTicketPriorityincidents);
    yield takeLatest(constant.TICKETASSIGNEE_INCIDENTS, ViewTicketAssigneeincidents);
    yield takeLatest(constant.TICKETSTATUS_INCIDENTS, ViewTicketStatusincidents);
   yield takeLatest(constant.TICKET_UPDATE_INIT, TicketUpdateSaga);

}


