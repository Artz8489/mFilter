/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from "../helpers/Endpoints";
import axios from "axios";
const ReportServices = {};
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 50000);

ReportServices.ViewReportlist = function(queryParams) {
  let searchParams = new URLSearchParams();
  Object.keys(queryParams).forEach((key) =>
    searchParams.append(key, queryParams[key])
  );
  let url = ApiUrl + EndPoints.report_list + "?" + searchParams;
  return fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
    .then(async (response) => {
      const data = await response.json();
      return data;
      
      
      // return data;
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    })
    .catch((error) => {});
};
ReportServices.DownloadReportlist = function(
  packageName,
  fromDate,
  toDate,
  country,
  publisher,
  channel,
  brand,
  status,
  priority,
  category
) {
  let url =
    ApiUrl +
    EndPoints.download_report +
    "?package_name=" +
    packageName +
    "&fromDate=" +
    fromDate +
    "&toDate=" +
    toDate +
    "&country=" +
    country +
    "&publisher=" +
    publisher +
    "&channel=" +
    channel +
    "&brand=" +
    brand +
    "&status=" +
    status +
    "&priority=" +
    priority +
    "&category=" +
    category;
  return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
    .then(async (response) => {
      const data = await response.json();
      return data;
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

ReportServices.GetTicketdetails = function(ticket_id) {
  let url = ApiUrl + EndPoints.ticket_detail + ticket_id;
  return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
    .then(async (response) => {
      const data = await response.json();
      return data;
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
ReportServices.GetTicketCustomer = function() {
  let url = ApiUrl + EndPoints.ticket_customer;
  return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
    .then(async (response) => {
      const dataRes = await response.json();

      return dataRes.data;
      if (!response.ok) {
        const error = (dataRes && dataRes.message) || response.statusText;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

ReportServices.GetPriority = function() {
  let url = ApiUrl + EndPoints.priority;
  return fetch(url,{ mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
    .then(async (response) => {
      const data = await response.json();
      return data;
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

ReportServices.Createticket = function async(body,mutliSelectID) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" ,'Access-Control-Allow-Origin':'*'},
    mode: 'cors',
    body: JSON.stringify(body),
  };
  let url = ApiUrl + EndPoints.create_ticket + mutliSelectID;
  return fetch(url,requestOptions)
    .then(async (response) => {
      const data = await response.json();

      return data;

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

// mutilpe ticket
ReportServices.CreateMultipleTicket = function async(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" ,'Access-Control-Allow-Origin':'*'},
    mode: 'cors',
    body: JSON.stringify(body),
  };
  let url = ApiUrl + EndPoints.create_multiple_ticket ;
  return fetch(url,requestOptions)
    .then(async (response) => {
      const data = await response.json();

      return data;

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

ReportServices.CloseTicket = function async(body) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" ,'Access-Control-Allow-Origin':'*'},
    mode: 'cors',
    body: JSON.stringify(body),
    json: true,
  };
  let url = ApiUrl + EndPoints.close_ticket;
  return fetch(url , requestOptions)
    .then(async (response) => {
      const data = await response.json();

      return data;

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

ReportServices.UpdatePriorityStatus = function async(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" ,'Access-Control-Allow-Origin':'*'},
    mode: 'cors',
    body: body.json(),
  
  };
  let url = ApiUrl + EndPoints.save_ticket;
  return fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json();

      return data;

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};

export default ReportServices;
