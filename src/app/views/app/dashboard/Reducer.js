// import React, { useReducer } from 'react';
// import * as constant from "./DashboardConstants";
// const initialState = {
//     dashboard_data: {},
//     dashboard_data_loading: true,
//     dashboard_data_error: null,

// }

// function Reducer(state = initialState, { type, response }) {
//     switch (type) {
      
//       case constant.DASHBOARD_DATA:
//         console.log('action',action.type)
//         console.log('response',response)
//       return {    ...state,
//             dashboard_data_loading: true,
//             dashboard_data: response
//         };

//       default:
//         throw new Error();
//     }
//   }

//   export default Reducer