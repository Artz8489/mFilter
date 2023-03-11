import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import DashboardReducer from './reducers/DashboardReducer';
import CommonReducer from './reducers/CommonReducer';
import ReportReducer from './reducers/ReportReducer';
import TicketpagReducer from './reducers/TicketReducer';
import DownloadReducer from './reducers/DownloadReducer';
import LoginpagReducer from './reducers/LoginReducer';
import VerificationReducer from './reducers/VerificationReducer';
import ThreeSixtyReducer from './reducers/ThreeSixtyReducer';
import DigitalFootPrintReducer from './reducers/DigitalFootPrintReducer';
import DeepDiveReducer from './reducers/DeepDiveReducer';

import CampaignpageReducer from './reducers/CampaignReducer';
import PublisherReducer from './reducers/Publisher';
import MtrackReducer from './reducers/MtrackReducer';

export default function createReducer () {
  const rootReducer = combineReducers({
 
    dashboard: DashboardReducer,
    common: CommonReducer,
    report: ReportReducer,
    verification: VerificationReducer,
    threeSixty: ThreeSixtyReducer,
    tickets: TicketpagReducer,
    login: LoginpagReducer,
    download: DownloadReducer,
    digitalFootPrint: DigitalFootPrintReducer,
    deepDive: DeepDiveReducer,
  PublisherAdd: PublisherReducer,
    campaign: CampaignpageReducer,
      revenue: MtrackReducer,
  })
  return rootReducer
}

export function* rootSaga() {
}
