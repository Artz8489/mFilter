import { takeLatest, put, call } from "redux-saga/effects";
import * as constant from "../constants/ReportConstants";
import ReportServices from "../services/ReportService";

import { API } from "../setupAxios";
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

// export function* DownloadReportSaga(payload) {
//     try {
//         const response = yield call(ReportServices.DownloadReportlist, payload.packageName,payload.fromDate,payload.toDate,payload.country,payload.country,payload.publisher,payload.channel,payload.brand,payload.status,payload.priority,payload.category);
//         // console.log('resssss in saga report',response);
//         yield put({ type: constant.REPORT_INCIDENTS_SUCCESS, response })
//     } catch (error) {
//         yield put({ type: constant.REPORT_INCIDENTS_ERROR, error })
//     }
// }

export function* ViewReportIncidentsSaga(payload) {
  try {
    let queryParams = {...payload.reportdata }
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.report_list + "?" + searchParams;

    const response = yield API.get(url);
    // const response = yield call(
    //   ReportServices.ViewReportlist,
    //   payload.reportdata
    // );
    yield put({ type: constant.REPORT_INCIDENTS_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.REPORT_INCIDENTS_ERROR, error });
  }
}
export function* CreateTicketSaga(payload) {
  try {
    let queryParams = {payload}
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.create_ticket + payload.mutliSelectID;

    const response = yield API.post(url,payload.body,payload.mutliSelectID);
    // const response = yield call(ReportServices.Createticket, payload.body,payload.mutliSelectID);
    yield put({ type: constant.CREATE_TICKET_INIT_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.CREATE_TICKET_INIT_ERROR, error });
  }
}

// Multiple ticket
export function* CreateMultipleTicketSaga(payload) {
  try {
    
    let url = ApiUrl + EndPoints.create_multiple_ticket ;

    const response = yield API.post(url,payload.body);
    yield put({ type: constant.CREATE_MULTIPLE_TICKET_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.CREATE_MULTIPLE_TICKET_ERROR, error });
  }
}

export function* UpdatePriorityStatusSaga(payload) {
  try {
    let url = ApiUrl + EndPoints.save_ticket;
    const response = yield API.post(url,payload.body);
    yield put({ type: constant.UPDATE_PRIORITY_STATUS_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.UPDATE_PRIORITY_STATUS_ERROR, error });
  }
}

export function* CloseTicketSaga(payload) {
  try {
    let url = ApiUrl + EndPoints.close_ticket;
    const response = yield API.delete(url,{data:payload.body});
    // const response = yield call(ReportServices.CloseTicket, payload.body);
    yield put({ type: constant.ClOSE_TICKET_INIT_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.ClOSE_TICKET_INIT_ERROR, error });
  }
}

export function* GetTicketdetails(payload) {
  try {
    // const response = yield call(
    //   ReportServices.GetTicketdetails,
    //   payload.mutliSelectID 
    // );

    let queryParams = {...payload.mutliSelectID }
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.ticket_detail + payload.mutliSelectID;

    const response = yield API.get(url);
    yield put({ type: constant.TICKET_DETAILS_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.TICKET_DETAILS_ERROR, error });
  }
}

export function* GetTicketCustomer() {
  try {
   
    let url = ApiUrl + EndPoints.ticket_customer;
    const response = yield API.get(url);

    // const response = yield call(ReportServices.GetTicketCustomer);
    yield put({ type: constant.TICKET_CUSTOMER_SUCCESS, response });
  } catch (error) {
    yield put({ type: constant.TICKET_CUSTOMER_ERROR, error });
  }
}

export default function* ReportSaga() {
  yield takeLatest(constant.REPORT_INCIDENTS, ViewReportIncidentsSaga);
  // yield takeLatest(constant.DOWNLOAD_REPORT_INIT,DownloadReportSaga );
  yield takeLatest(constant.CREATE_TICKET_INIT, CreateTicketSaga);
  yield takeLatest(constant.CREATE_MULTIPLE_TICKET_INIT, CreateMultipleTicketSaga);
  yield takeLatest(constant.UPDATE_PRIORITY_STATUS_INIT, UpdatePriorityStatusSaga);
  yield takeLatest(constant.ClOSE_TICKET_INIT, CloseTicketSaga);
  yield takeLatest(constant.TICKET_DETAILS_INIT, GetTicketdetails);
  yield takeLatest(constant.TICKET_CUSTOMER_INIT, GetTicketCustomer);
}
