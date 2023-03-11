import * as constant from "../constants/DashboardConstants";
const initialState = {
    incident_data: [],
    incidentloading: true,
    incidentdata_error: null,

    incidentvolumne_data: [],
    incidentvolumneloading: true,
    incidentvolumne_error: null,

    activecases_data: [],
    activecaseloading: true,
    activecases_error: null,

    subchannel_data: [],
    subchannelloading: true,
    subchannel_error: null,

    toptenlocation_data: [],
    toptenlocation_loading: true,
    toptenlocation_error: null,

    categorylevelcount_data: [],
    categorylevelcount_loading: true,
    categorylevelcount_error: null,

    publisherlevelcount_data: [],
    publisherlevelcount_loading: true,
    publisherlevelcount_error: null,

    dashboard_data: {},
    dashboard_data_loading: true,
    dashboard_data_error: null,
};

const DashboardReducer = (state = initialState, { type, response, setSideDrawer }) => {


    switch (type) {
        case constant.TOTAL_INCIDENTS:
            return {
                ...state,
                incidentloading: true,
            };

        case constant.INCIDENT_VOLUMES:
            return {
                ...state,
                incidentvolumneloading: true,
            };

            case constant.DASHBOARD_DATA:
                return {
                    ...state,
                    dashboard_data_loading: true,
                    dashboard_data: response
                };

        case constant.ACTIVECASE_CHANNEL:
            return {
                ...state,
                activecaseloading: true,
            };

        case constant.SUBCHANNEL_INIT:
            return {
                ...state,
                subchannelloading: true,
            };

        case constant.TOPTEN_LOCATION_INIT:
            return {
                ...state,
                toptenlocation_loading: true,
            };

    case constant.SET_SIDE_DRAWER:
        return {
            ...state,
            setSideDrawer: setSideDrawer,
        };
        case constant.CATEGORY_LEVEL_COUNT:
            return {
                ...state,
                categorylevelcount_loading: true,
            };

        case constant.PUBLISHER_LEVEL_COUNT:
            return {
                ...state,
                publisherlevelcount_loading: true,
            };

        // success
        case constant.DASHBOARD_DATA_SUCCESS:

            return {
                ...state,
                dashboard_data_loading: false,
                dashboard_data:  response.data,
            };

        case constant.TOTAL_INCIDENTS_SUCCESS:
            return {
                ...state,
                incidentloading: false,
                incident_data: response.data,
            };

        case constant.INCIDENT_VOLUMES_SUCCESS:
            return {
                ...state,
                incidentvolumneloading: false,
                incidentvolumne_data: response.data,
            };

        case constant.ACTIVECASE_CHANNEL_SUCCESS:
            return {
                ...state,
                activecaseloading: false,
                activecases_data: response.data,
            };

        case constant.SUBCHANNEL_SUCCESS:
            return {
                ...state,
                subchannelloading: false,
                subchannel_data: response.data,
            };

        case constant.TOPTEN_LOCATION_SUCCESS:
            return {
                ...state,
                toptenlocation_loading: false,
                toptenlocation_data: response.data,
            };

        case constant.CATEGORY_LEVEL_COUNT_SUCCESS:
            return {
                ...state,
                categorylevelcount_loading: false,
                categorylevelcount_data: response.data,
            };

        case constant.PUBLISHER_LEVEL_COUNT_SUCCESS:
            return {
                ...state,
                publisherlevelcount_loading: false,
                publisherlevelcount_data: response.data,
            };

        // error

        case constant.TOTAL_INCIDENTS_ERROR:
            return {
                ...state,
                incidentloading: false,
                incidentdata_error: response,
            };

        case constant.INCIDENT_VOLUMES_ERROR:
            return {
                ...state,
                incidentvolumneloading: false,
                incidentvolumne_error: response,
            };

        case constant.ACTIVECASE_CHANNEL_ERROR:
            return {
                ...state,
                activecaseloading: false,
                activecases_error: response,
            };

        case constant.SUBCHANNEL_ERROR:
            return {
                ...state,
                subchannelloading: false,
                subchannel_error: response,
            };

        case constant.TOPTEN_LOCATION_ERROR:
            return {
                ...state,
                toptenlocation_loading: false,
                toptenlocation_error: response,
            };

        case constant.CATEGORY_LEVEL_COUNT_ERROR:
            return {
                ...state,
                categorylevelcount_loading: false,
                categorylevelcount_error: response,
            };

        case constant.PUBLISHER_LEVEL_COUNT_ERROR:
            return {
                ...state,
                publisherlevelcount_loading: false,
                publisherlevelcount_error: response,
            };

        default:
            return state;
    }
}
export default DashboardReducer