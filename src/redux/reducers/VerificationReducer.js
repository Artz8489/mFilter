import * as constant from '../constants/VerificationConstants';
const initialState = {
  verification_response: {},
};

const VerificationReducer = (state = initialState, { type, response }) => {
  switch (type) {
    case constant.VERIFICATION_INIT:
      return state;
    case constant.VERIFICATION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        verification_response: response,
      };
    case constant.VERIFICATION_FETCH_ERROR:
      console.log('VERIFICATION_FETCH_ERROR', response);
      return {
        ...state,
        loading: false,
        error: response,
      };
    case constant.BULK_BANK_VERIFICATION_FETCH_SUCCESS:
      console.log('BULK_BANK_VERIFICATION_FETCH', response);
      return {
        ...state,
        loading: false,
        verification_response: response,
      };
    default:
      return state;
  }
};
export default VerificationReducer;
