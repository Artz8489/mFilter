import { actions } from "../../app/modules/Auth";
import * as constant from "../constants/CampaignConstants";

const initialState = {
    campaignAdd_data: '',
    campaignAdd_loading: true,
    campaignAdd_error: null,

    campaignGet_data: '',
    campaignGet_loading: true,
    campaignGet_error: null,

    campaignUpdate_data: '',
    campaignUpdate_loading: true,
    campaignUpdate_error: null,

    campaignDelete_data: '',
    campaignDelete_loading: true,
    campaignDelete_error: null,
};

const CampaignpageReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.CAMPAIGN_ADD:
            return {
                ...state,
                campaignAdd_loading: true,
            };
        case constant.CAMPAIGN_ADD_SUCCESS:
            return {
                ...state,
                campaignAdd_loading: false,
                campaignAdd_data: response,
            };
        case constant.CAMPAIGN_ADD_ERROR:
            return {
                ...state,
                campaignAdd_loading: false,
                campaignAdd_error: response,
            }
        // case constant.CAMPAIGN_INCIDENTS_CLEAR:
        //     return {
        //         ...state,
        //         campaign_data: {},
        //         campaign_error: {},
        //     }
        case constant.CAMPAIGN_GET:
            return {
                ...state,
                campaignGet_loading: true,
            };
        case constant.CAMPAIGN_GET_SUCCESS:
            return {
                ...state,
                campaignGet_loading: false,
                campaignGet_data: response,
            };
        case constant.CAMPAIGN_GET_ERROR:
            return {
                ...state,
                campaignGet_loading: false,
                campaignGet_error: response,
            }
        case constant.CAMPAIGN_GET_CLEAR:
            return {
                ...state,
                campaignGet_data: {},
                campaignGet_error: {},
            }
        case constant.CAMPAIGN_UPDATE:
            return {
                ...state,
                campaignUpdate_loading: true,
            };
        case constant.CAMPAIGN_UPDATE_SUCCESS:
            return {
                ...state,
                campaignUpdate_loading: false,
                campaignUpdate_data: response,
            };
        case constant.CAMPAIGN_UPDATE_ERROR:
            return {
                ...state,
                campaignUpdate_loading: false,
                campaignUpdate_error: response,
            }
        case constant.CAMPAIGN_UPDATE_CLEAR:
            return {
                ...state,
                campaignUpdate_data: {},
                campaignUpdate_error: {},
            }
        case constant.CAMPAIGN_DELETE:
            return {
                ...state,
                campaignDelete_loading: true,
            };
        case constant.CAMPAIGN_DELETE_SUCCESS:
            return {
                ...state,
                campaignDelete_loading: false,
                campaignDelete_data: response,
            };
        case constant.CAMPAIGN_DELETE_ERROR:
            return {
                ...state,
                campaignDelete_loading: false,
                campaignDelete_error: response,
            }
        case constant.CAMPAIGN_DELETE_CLEAR:
            return {
                ...state,
                campaignDelete_data: {},
                campaignDelete_error: {},
            }
        default:
            return state;
    }
}

export default CampaignpageReducer