
import { actions } from "../../app/modules/Auth";
import * as constant from "../constants/LoginConstants";

const initialState = {
    login_data: '',
    loginloading: true,
    login_error: null,

    change_data: '',
    changeloading: true,
    change_error: null,
};

const LoginpagReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.LOGIN_INCIDENTS:
            return {
                ...state,
                loginloading: true,
            };
        case constant.LOGIN_INCIDENTS_SUCCESS:
            return {
                ...state,
                loginloading: false,
                login_data: response,
            };
        case constant.LOGIN_INCIDENTS_ERROR:
            return {
                ...state,
                loginloading: false,
                login_error: response,
            }
        case constant.LOGIN_INCIDENTS_CLEAR:
            return {
                ...state,
                login_data: {},
                login_error: {},
            }


        case constant.CHANGE_INCIDENTS:
            return {
                ...state,
                changeloading: true,
            };
        case constant.CHANGE_INCIDENTS_SUCCESS:
            return {
                ...state,
                changeloading: false,
                change_data: response,
            };
        case constant.CHANGE_INCIDENTS_ERROR:
            return{
                ...state,
                changeloading: false,
                change_error: response  
            }

        default:
            return state;
    }
}
export default LoginpagReducer
