import { fork } from 'redux-saga/effects';
import DashboardSaga from './DashboardSaga';
import CommonSaga from './CommonSaga';
import ReportSaga from './ReportSaga';
import TicketSaga from './TicketSaga';
import DownloadReportSaga from './DownloadSaga';
import LoginSaga from './LoginSaga';
import VerificationSaga from './VerificationSaga';
import ThreeSixtySaga from './ThreeSixtySaga';
import DigitalFootPrintSaga from './DigitalFootPrintSaga';
import DeepDiveSaga from './DeepDiveSaga';
import ViewPublisherSaga from './Publisher'
import MtrackSaga from './MtrackSaga';
import CampaignSaga from './CampaignSaga';

export default function* rootSaga(getState) {
  yield fork(DashboardSaga);
  yield fork(CommonSaga);
  yield fork(ReportSaga);
  yield fork(TicketSaga);
  yield fork(DownloadReportSaga);
  yield fork(LoginSaga);
  yield fork(VerificationSaga);
  yield fork(ThreeSixtySaga);
  yield fork(DigitalFootPrintSaga);
  yield fork(DeepDiveSaga);
  yield fork(ViewPublisherSaga);
  yield fork(MtrackSaga);
    yield fork(CampaignSaga);
}
