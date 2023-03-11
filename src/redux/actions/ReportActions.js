import * as constant from '../constants/ReportConstants';

export const FetchReport = (reportdata) =>{
    return{
        type: constant.REPORT_INCIDENTS,
      reportdata

    }
 };
 
export const DownloadReport = (packageName,fromDate,toDate,country,publisher,channel,brand,status,priority,category) => {
    return {
        type: constant.DOWNLOAD_REPORT_INIT,
       packageName,
        fromDate,
        toDate,
        country,
        country,
        publisher,
        channel,
        brand,
        status,
        priority,
        category

    }
};

export const FetchTicket = (mutliSelectID) => {
    return {
        type: constant.TICKET_DETAILS_INIT,
        mutliSelectID

    }
};

export const FetchTicketCustomer = () => {
    return {
        type: constant.TICKET_CUSTOMER_INIT,
     

    }
};


export const PostTicket = (body,mutliSelectID) => {
    return {
        type: constant.CREATE_TICKET_INIT,
  body,
  mutliSelectID

    }
};

export const PostMultipleTicket = (body) => {
    return {
        type: constant.CREATE_MULTIPLE_TICKET_INIT,
  body


    }
};

export const UpdatePriorityStatusTicket = (body) => {
    return {
        type: constant.UPDATE_PRIORITY_STATUS_INIT,
  body

    }
};

export const CloseTicket = (body) => {
    return {
        type: constant.ClOSE_TICKET_INIT,
  body

    }
};



