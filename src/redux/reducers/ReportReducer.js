import * as constant from "../constants/ReportConstants";
const initialState = {
  report_list:[],
  downloadd_report_list:[],
  create_ticket:[],
  create_multiple_ticket:[],
  close_ticket:[],
  ticket_details:[],
  ticket_customer:[],
  update_priority_status:[]
};

const ReportReducer = (state = initialState, { type, response }) => {
    switch (type) {



        case constant.REPORT_INCIDENTS:
  
            return {
                ...state,
                loading_report: true,
            };

        case constant.REPORT_INCIDENTS_SUCCESS:
   
            return {
                ...state,
                loading_report: false,
                report_list: response.data,
                total_count: response.total,
                statusCode: response.code,
            };

        case constant.REPORT_INCIDENTS_ERROR:
   
            return {
                ...state,
                loading_report: false,
                error: response,
            };





        case constant.DOWNLOAD_REPORT_INIT:
  
            return {
                ...state,
                loading: true,
            };

        case constant.DOWNLOAD_REPORT_SUCCESS:
   
            return {
                ...state,
                loading: false,
                downloadd_report_list: response,
            };

        case constant.DOWNLOAD_REPORT_ERROR:
   
            return {
                ...state,
                loading: false,
                error: response,
            };





        case constant.TICKET_DETAILS_INIT:
  
            return {
                ...state,
                ticket_details_loading: true,
            };

        

        case constant.TICKET_DETAILS_SUCCESS:
            return {
                 ...state,
                 ticket_details_loading: false,
                ticket_details: response,
            };

            case constant.TICKET_DETAILS_ERROR:
                return {
                    ...state,
                    ticket_details_loading: false,
                    error: response,
                };




            case constant.TICKET_CUSTOMER_INIT:

                return {
                    ...state,
                    loading: false,
                    ticket_customer: response,
                };

                case constant.TICKET_CUSTOMER_SUCCESS:
                    return {
                        ...state,
                loading: false,
                ticket_customer: response,
                    };
                    case constant.TICKET_CUSTOMER_ERROR:
                        return {
                            ...state,
                            loading: false,
                            error: response,
                        };








        case constant.CREATE_TICKET_INIT:
            return {
                ...state,
                create_loading: true,
            };

        case constant.CREATE_TICKET_INIT_SUCCESS:
            return {
                ...state,
                create_loading: false,
                create_ticket: response,
            };

        case constant.CREATE_TICKET_INIT_ERROR:
            return {
                ...state,
                create_loading: false,
                error: response,
            };
            case constant.CREATE_TICKET_CLEAR:
                return {
                    ...state,
                    error: {},
                    create_ticket: []
                };

        case constant.CREATE_MULTIPLE_TICKET_INIT:
            return {
                ...state,
                create_multiple_loading: true,
            };

        case constant.CREATE_MULTIPLE_TICKET_SUCCESS:
            return {
                ...state,
                create_multiple_loading: false,
                create_multiple_ticket: response,
            };

        case constant.CREATE_MULTIPLE_TICKET_ERROR:
            return {
                ...state,
                create_multiple_loading: false,
                error: response,
            };
            case constant.CREATE_MULTIPLE_TICKET_CLEAR:
                return {
                    ...state,
                    error: {},
                    create_multiple_ticket: []
                };

        case constant.UPDATE_PRIORITY_STATUS_INIT:
            return {
                ...state,
                update_priority_status_loading: true,
            };

        case constant.UPDATE_PRIORITY_STATUS_SUCCESS:
            return {
                ...state,
                update_priority_status_loading: false,
                update_priority_status: response,
            };

        case constant.UPDATE_PRIORITY_STATUS_ERROR:
            return {
                ...state,
                update_priority_status_loading: false,
                error: response,
            };
        case constant.UPDATE_PRIORITY_STATUS_CLEAR:
            return {
                ...state,
                error: {},
                update_priority_status: []
            };



        case constant.ClOSE_TICKET_INIT:
            return {
                ...state,
                close_ticket_loading: true,
            };

        case constant.ClOSE_TICKET_INIT_SUCCESS:
            return {
                ...state,
                close_ticket_loading: false,
                close_ticket: response,
            };

        case constant.ClOSE_TICKET_INIT_ERROR:
            return {
                ...state,
                close_ticket_loading: false,
                error: response,
            };
            case constant.ClOSE_TICKET_INIT_CLEAR:
                return {
                    ...state,
                    error: {},
                    close_ticket: []
                };


        default:
            return state;
    }
}
export default ReportReducer