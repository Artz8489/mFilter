import * as constant from '../constants/LoginConstants';

export const FetchLoginIncidents = (logindata) => {
    return {
        type: constant.LOGIN_INCIDENTS,
        logindata
    }
};

// export const clearLoginIncidents = () => {
//     return {
//         type: constant.LOGIN_INCIDENTS_CLEAR,
//     }
// };

export const FetchChangeIncidents = (changedata) => {
    return {
        type: constant.CHANGE_INCIDENTS,
        changedata
    }
}
