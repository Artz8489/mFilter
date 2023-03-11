import { actions } from "../../app/modules/Auth";
import * as constant from "../constants/Publisher";

const initialState = {
  publisherAdd_data: '',
  publisherAdd_loading: true,
  publisherAdd_error: null,

  publisherGet_data: '',
  publisherGet_loading: true,
  publisherGet_error: null,

  publisherUpdate_data: '',
  publisherUpdate_loading: true,
  publisherUpdate_error: null,

  publisherDelete_data: '',
  publisherDelete_loading: true,
  publisherDelete_error: null,
};

const PublisherReducer = (state = initialState, { type, response }) => {
  switch (type) {
    case constant.PUBLISHER_ADD:
      return {
        ...state,
        publisherAdd_loading: true,
      };
    case constant.PUBLISHER_ADD_SUCCESS:
      return {
        ...state,
        publisherAdd_loading: false,
        publisherAdd_data: response,
      };
    case constant.PUBLISHER_ADD_ERROR:
      return {
        ...state,
        publisherAdd_loading: false,
        publisherAdd_error: response,
      }
    case constant.PUBLISHER_ADD_CLEAR:
      return {
        ...state,
        publisherAdd_data: {},
        publisherAdd_error: {},
      }
    case constant.PUBLISHER_GET:
      return {
        ...state,
        publisherGet_loading: true,
      };
    case constant.PUBLISHER_GET_SUCCESS:
      return {
        ...state,
        publisherGet_loading: false,
        publisherGet_data: response,
      };
    case constant.PUBLISHER_GET_ERROR:
      return {
        ...state,
        publisherGet_loading: false,
        publisherGet_error: response,
      }
    case constant.PUBLISHER_GET_CLEAR:
      return {
        ...state,
        publisherGet_data: {},
        publisherGet_error: {},
      }
    case constant.PUBLISHER_UPDATE:
      return {
        ...state,
        publisherUpdate_loading: true,
      };
    case constant.PUBLISHER_UPDATE_SUCCESS:
      return {
        ...state,
        publisherUpdate_loading: false,
        publisherUpdate_data: response,
      };
    case constant.PUBLISHER_UPDATE_ERROR:
      return {
        ...state,
        publisherUpdate_loading: false,
        publisherUpdate_error: response,
      }
    case constant.PUBLISHER_UPDATE_CLEAR:
      return {
        ...state,
        publisherUpdate_data: {},
        publisherUpdate_error: {},
      }

    case constant.PUBLISHER_DELETE:
      return {
        ...state,
        publisherDelete_loading: true,
      };
    case constant.PUBLISHER_DELETE_SUCCESS:
      return {
        ...state,
        publisherDelete_loading: false,
        publisherDelete_data: response,
      };
    case constant.PUBLISHER_DELETE_ERROR:
      return {
        ...state,
        publisherDelete_loading: false,
        publisherDelete_error: response,
      }
    case constant.PUBLISHER_DELETE_CLEAR:
      return {
        ...state,
        publisherDelete_data: {},
        publisherDelete_error: {},
      }
    default:
      return state;
  }
}

export default PublisherReducer