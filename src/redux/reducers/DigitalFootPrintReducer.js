import * as constant from '../constants/DigitalFootPrintConstants';
const initialState = {
  digitalFootPrint: [],
  loading: false,
};

const DigitalFootPrintReducer = (state = initialState, { type, response }) => {
  switch (type) {
    case constant.DIGITALFOOTPRINT_INIT:
      return { ...state, loading: true };
    case constant.DIGITALFOOTPRINT_SUCCESS:
      return {
        ...state,
        loading: false,
        digitalFootPrint: response,
      };
    case constant.DIGITALFOOTPRINT_ERROR:
      console.log('DIGITALFOOTPRINT_ERROR', response);
      return {
        ...state,
        loading: false,
        error: response,
      };
    default:
      return state;
  }
};
export default DigitalFootPrintReducer;
