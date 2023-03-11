import * as constant from "../constants/MtrackConstants";

const initialState = {
  revenue_data: [],
  revenueloading: true,
  revenuedata_error: null,

  cost_data: [],
  costloading: true,
  costdata_error: null,

  events_data: [],
  eventsloading: true,
  eventsdata_error: null,

  clicks_data: [],
  clicksloading: true,
  clicksdata_error: null,

  pubevents_data: [],
  pubeventsloading: true,
  pubeventsdata_error: null,

  pubclicks_data: [],
  pubclicksloading: true,
  pubclicksdata_error: null,

  overpubclicks_data: [],
  overpubclicksloading: true,
  overpubclicksdata_error: null,

  fraudpubclicks_data: [],
  fraudpubclicksloading: true,
  fraudpubclicksdata_error: null,

  eventpubclicks_data: [],
  eventpubclicksloading: true,
  eventpubclicksdata_error: null,


};

const MtrackReducer = (state = initialState, { type, response, setSideDrawer }) => {
  switch (type) {
    case constant.TOTAL_REVENUE:
      return {
        ...state,
        revenueloading: true,
      };
    case constant.TOTAL_REVENUE_SUCCESS:
      return {
        ...state,
        revenueloading: false,
        revenue_data: response.data,
      };
    case constant.TOTAL_REVENUE_ERROR:
      return {
        ...state,
        revenueloading: false,
        revenuedata_error: response.data,
      }

    case constant.TOTAL_COST:
      return {
        ...state,
        costloading: true,
      };
    case constant.TOTAL_COST_SUCCESS:
      return {
        ...state,
        costloading: false,
        cost_data: response.data,
      };
    case constant.TOTAL_COST_ERROR:
      return {
        ...state,
        costloading: false,
        costdata_error: response.data,
      }

    case constant.TOTAL_EVENTS:
      return {
        ...state,
        eventsloading: true,
      };
    case constant.TOTAL_EVENTS_SUCCESS:
      return {
        ...state,
        eventsloading: false,
        events_data: response.data,
      };
    case constant.TOTAL_EVENTS_ERROR:
      return {
        ...state,
        eventsloading: false,
        eventsdata_error: response.data,
      }

    case constant.TOTAL_CLICKS:
      return {
        ...state,
        clicksloading: true,
      };
    case constant.TOTAL_CLICKS_SUCCESS:
      return {
        ...state,
        clicksloading: false,
        clicks_data: response.data,
      };
    case constant.TOTAL_CLICKS_ERROR:
      return {
        ...state,
        clicksloading: false,
        clicksdata_error: response.data,
      }

    case constant.TOTAL_PUBEVENTS:
      return {
        ...state,
        pubeventsloading: true,
      };
    case constant.TOTAL_PUBEVENTS_SUCCESS:
      return {
        ...state,
        pubeventsloading: false,
        pubevents_data: response.data,
      };
    case constant.TOTAL_PUBEVENTS_ERROR:
      return {
        ...state,
        pubeventsloading: false,
        pubeventsdata_error: response.data,
      }
    case constant.TOTAL_PUBCLICKS:
      return {
        ...state,
        pubclicksloading: true,
      };
    case constant.TOTAL_PUBCLICKS_SUCCESS:
      return {
        ...state,
        pubclicksloading: false,
        pubclicks_data: response.data,
      };
    case constant.TOTAL_PUBCLICKS_ERROR:
      return {
        ...state,
        pubclicksloading: false,
        pubclicksdata_error: response.data,
      }
    case constant.TOTAL_OVERPUBCLICKS:
      return {
        ...state,
        overpubclicksloading: true,
      };
    case constant.TOTAL_OVERPUBCLICKS_SUCCESS:
      return {
        ...state,
        overpubclicksloading: false,
        overpubclicks_data: response.event,
      };
    case constant.TOTAL_OVERPUBCLICKS_ERROR:
      return {
        ...state,
        overpubclicksloading: false,
        overpubclicksdata_error: response,
      }
    case constant.TOTAL_FRAUDPUBCLICKS:
      return {
        ...state,
        fraudpubclicksloading: true,
      };
    case constant.TOTAL_FRAUDPUBCLICKS_SUCCESS:
      return {
        ...state,
        fraudpubclicksloading: false,
        fraudpubclicks_data: response,
      };
    case constant.TOTAL_FRAUDPUBCLICKS_ERROR:
      return {
        ...state,
        fraudpubclicksloading: false,
        fraudpubclicksdata_error: response,
      }
    case constant.TOTAL_EVENTPUBCLICKS:
      return {
        ...state,
        eventpubclicksloading: true,
      };
    case constant.TOTAL_EVENTPUBCLICKS_SUCCESS:
      return {
        ...state,
        eventpubclicksloading: false,
        eventpubclicks_data: response,
      };
    case constant.TOTAL_EVENTPUBCLICKS_ERROR:
      return {
        ...state,
        eventpubclicksloading: false,
        eventpubclicksdata_error: response,
      }
    default:
      return state;
  }
};

export default MtrackReducer