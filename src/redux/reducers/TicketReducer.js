import * as constant from "../constants/TicketConstants";
const initialState = {
    incident_data: [],
    incidentloading: true,
    incidentdata_error: null,

    search_incident_data: [],
    search_incidentloading: true,
    search_incidentdata_error: null,

    priority_incident_data: [],
    priority_incidentloading: true,
    priority_incidentdata_error: null,

    assignee_incident_data: [],
    assignee_incidentloading: true,
    assignee_incidentdata_error: null,

    status_incident_data: [],
    status_incidentloading: true,
    status_incidentdata_error: null,

    update_incident_data: [],
    update_incidentloading: true,
    update_incidentdata_error: null,
};

const TicketpagReducer = (state = initialState, { type, response }) => {


    switch (type) {
        case constant.TICKET_INCIDENTS:
            return {
                ...state,
                incidentloading: true,
            };

        case constant.TICKETSEARCH_INCIDENTS:
            return {
                ...state,
                search_incidentloading: true,
            };

        case constant.TICKETPRIORITY_INCIDENTS:
            return {
                ...state,
                priority_incidentloading: true,
            };

        case constant.TICKETASSIGNEE_INCIDENTS:
            return {
                ...state,
                assignee_incidentloading: true,
            };

        case constant.TICKETSTATUS_INCIDENTS:
            return {
                ...state,
                status_incidentloading: true,
            };
        //   ----------success-------
        case constant.TICKET_INCIDENTS_SUCCESS:

            return {
                ...state,
                incidentloading: false,
                incident_data: response.issues,
                
            };

        case constant.TICKETSEARCH_INCIDENTS_SUCCESS:
            return {
                ...state,
                search_incidentloading: false,
                search_incident_data: response.issues,
            };

        case constant.TICKETPRIORITY_INCIDENTS_SUCCESS:
            return {
                ...state,
                priority__incidentloading: false,
                priority__incident_data: response.data.issue_priorities,
            };

        case constant.TICKETASSIGNEE_INCIDENTS_SUCCESS:
            return {
                ...state,
                assignee__incidentloading: false,
                assignee__incident_data: response.data.memberships,
            };
        case constant.TICKETSTATUS_INCIDENTS_SUCCESS:
            return {
                ...state,
                status__incidentloading: false,
                status__incident_data: response.data.issue_statuses,
            };
            

        // ----------error------------
        case constant.TICKET_INCIDENTS_ERROR:
            return {
                ...state,
                incidentloading: false,
                incidentdata_error: response,
            };

        case constant.TICKETSEARCH_INCIDENTS_ERROR:
            return {
                ...state,
                search_incidentloading: false,
                search_incidentdata_error: response,
            };
        case constant.TICKETPRIORITY_INCIDENTS_ERROR:
            return {
                ...state,
                priority_incidentloading: false,
                priority_incidentdata_error: response,
            };

        case constant.TICKETASSIGNEE_INCIDENTS_ERROR:
            return {
                ...state,
                assignee_incidentloading: false,
                assignee_incidentdata_error: response,
            };
        case constant.TICKETSTATUS_INCIDENTS_ERROR:
            return {
                ...state,
                status_incidentloading: false,
                status_incidentdata_error: response,
            };
        
        case constant.TICKET_UPDATE_INIT:
            return {
                ...state,
                loading: true,
                update_incident_data: response
            };

        case constant.TICKET_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                package_name: response,
            };

        case constant.TICKET_UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: response,
            };

        default:
            return state;
    }
}

export default TicketpagReducer