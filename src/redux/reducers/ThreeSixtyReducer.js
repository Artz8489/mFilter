import * as constant from '../constants/ThreeSixtyConstants';
const initialState = {
  loading: true,
  upload: { uploading: false, data: undefined },
  tickets: [],
};

const ThreeSixtyReducer = (state = initialState, { type, response, error }) => {
  switch (type) {
    // Get list of tickets
    case constant.THREESIXTY_INIT:
      return {
        ...state,
        loading: true,
      };
    case constant.THREESIXTY_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: response,
      };
    case constant.THREESIXTY_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: error.message,
      };
    // Upload
    case constant.THREESIXTY_UPLOAD_INIT:
      return {
        ...state,
        upload: { uploading: true },
      };
    case constant.THREESIXTY_UPLOAD_SUCCESS:
      return {
        ...state,
        upload: { uploading: false, data: response },
      };
    case constant.THREESIXTY_UPLOAD_ERROR:
      return {
        ...state,
        upload: {
          uploading: false,
          uploadError: error.message,
        },
      };
    default:
      return state;
  }
};
export default ThreeSixtyReducer;
