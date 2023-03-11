import * as constant from "../constants/DownloadConstants";
const initialState = {
  download_report_list:[]

};

const DownloadReducer = (state = initialState, { type, response }) => {
    switch (type) {



        case constant.DOWNLOAD_INIT:
  
            return {
                ...state,
                downloadLoading: true,
            };

        case constant.DOWNLOAD_INIT_SUCCESS:
   
            return {
                ...state,
                downloadLoading: false,
                status: true,
                download_report_list: response,
            };

        case constant.DOWNLOAD_INIT_ERROR:
   
            return {
                ...state,
                downloadLoading: false,
                status: false,
                error: response,
            };
        case constant.DOWNLOAD_INIT_CLEAR:
            return {
                ...state,
                status: false,
                error: '',
            };

            default:
                return state;


    }
}
export default DownloadReducer;