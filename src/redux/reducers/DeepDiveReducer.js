import * as constant from '../constants/DeepDiveConstants';
const initialState = {
  deepDive: null,
  loading: false,
};

const DeepDiveReducer = (state = initialState, { type, response, error }) => {
  switch (type) {
    case constant.DEEPDIVE_INIT:
      return { ...state, loading: true };
    case constant.DEEPDIVE_SUCCESS:
      console.log(response);
      return {
        ...state,
        loading: false,
        deepDive: response,
      };
    case constant.DEEPDIVE_ERROR:
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
};
export default DeepDiveReducer;
