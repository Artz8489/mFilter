import * as constant from "../constants/CommonConstants";
import {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  } from "../../app/utils/helpers"
import {
    MENU_LIST_VALUE
  } from "../../app/utils/const"
//   } from "../../../utils/helpers"

const initialState = {
    package_name: [],
    country_name:[],
    category_list:[],
    brand_list:[],
    priority_list:[],
    publisher_list:[],
    status_list:[],
    menu_list: [],
    filter_list: [],
    channel_list: [],
    loading: false,
    channel_loading : false,
    error: null,
    setGlobalPackageName : [],
    setGlobalRefreshRendering : true
};
const CommonReducer = (state = initialState, { type, response,setGlobalPackageName,setGlobalRefreshRendering }) => {
    switch (type) {
        case constant.PACKAGENAME_INIT:
        case constant.MENULIST_INIT:
        case constant.FILTERLIST_INIT:
            case constant.CHANNEL_LIST_INIT:
                return {
                    ...state,
                    channel_loading: true
                }
                case constant.COUNTRY_LIST_INIT:
                    return {
                        ...state,
                        country_loading: true
                    }
                case constant.CATEGORY_LIST_INIT:
                    return {
                        ...state,
                        category_loading: true
                    }
                case constant.BRAND_LIST_INIT:
                    return {
                    ...state,
                    brand_loading: true
                }
                case constant.PRIORITY_LIST_INIT:
                    return {
                    ...state,
                   priority_loading: true
                }
                case constant.PUBLISHER_LIST_INIT:
                    return {
                    ...state,
                   publisher_loading: true
                }
                case constant.STATUS_LIST_INIT:
                    return {
                    ...state,
                    status_loading: true
                }
            return {
                ...state,
                commonLoading: true
            };
        case constant.PACKAGENAME_INIT_SUCCESS:
            return {
                ...state,
                packageLoading: false,
                commonLoading: false,
                package_name: response.data,
            };

        case constant.MENULIST_INIT_SUCCESS:
            setLocalStorage(MENU_LIST_VALUE.MENU, JSON.stringify(response.menus))
            return {
                ...state,
                menuLoading: false,
                commonLoading: false,
                menu_list: response,
            }

        case constant.FILTERLIST_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                commonLoading: false,
                filter_list: response.filter,
            }
            case constant.CHANNEL_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    channel_loading: false,
                    channel_list: response,
                }
            case constant.COUNTRY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    country_loading: false,
                    country_name: response,
                }
            case constant.CATEGORY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    category_loading: false,
                    category_list: response,
                }
            case constant.BRAND_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    brand_loading: false,
                    brand_list: response,
                }
            case constant.PRIORITY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    priority_loading: false,
                    priority_list: response,
                }
            case constant.PUBLISHER_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    publisher_loading: false,
                    publisher_list: response,
                }
            case constant.STATUS_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    status_loading: false,
                    status_list: response,
                }


                case constant.SET_GLOBAL_PACKAGE_NAME:
                    return {
                        ...state,
                        setGlobalPackageName: setGlobalPackageName,
                    };
                    // REFREH 
                case constant.SET_GLOBAL_REFRESH_RENDERING:
                    return {
                        ...state,
                        setGlobalRefreshRendering: setGlobalRefreshRendering,
                    };

        case constant.PACKAGENAME_INIT_ERROR:
        case constant.MENULIST_INIT_ERROR:
        case constant.FILTERLIST_INIT_ERROR:
            case constant.CHANNEL_LIST_INIT_ERROR:
                case constant.COUNTRY_LIST_INIT_ERROR:
                case constant.CATEGORY_LIST_INIT_ERROR:
                case constant.BRAND_LIST_INIT_ERROR:
                case constant.PRIORITY_LIST_INIT_ERROR:
                case constant.PUBLISHER_LIST_INIT_ERROR:
                case constant.STATUS_LIST_INIT_ERROR:
            return {
                ...state,
                loading: false,
                commonLoading: false,
                error: response,
            };
        default:
            return state;
    }
}
export default CommonReducer