import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../../app/utils/helpers';
// } from "../../../utils/helpers";
import { AUTH_DATA } from '../../app/utils/const';

const getauthvalue = JSON.parse(getLocalStorage(AUTH_DATA.AUTH));

const id = getauthvalue && getauthvalue?.id;
const project_id =
  getauthvalue && getauthvalue?.redmine?.project_id
    ? getauthvalue?.redmine?.project_id
    : '';

const EndPoints = {
  counts_data: `/api/bi/plots/counts`,
  package_name: `/api/user/package`,
  menu_list: `/api/user/menu`,
  filter_list: `/api/user/filter`,
  incident_volume: `/api/bi/plots/incident_volume`,
  activecases_channel: `/api/bi/plots/active_cases_by_channel`,
  sub_channel: `/api/bi/plots/sub_channel`,
  topten_location: `/api/bi/plots/top_ten_location`,
  category_level_count: `/api/bi/plots/category_level_count`,
  publisher_level_count: `/api/bi/plots/publisher_level_count`,
  channel_list: `/api/bi/filters/channel`,
  country_list: `/api/bi/filters/country`,
  category_list: `/api/bi/filters/category`,
  brand_list: `/api/bi/filters/brand`,
  priority_list: `/api/bi/filters/priority`,
  publisher_list: `/api/bi/filters/publisher`,
  status_list: `/api/bi/filters/status`,
  report_list: `/api/bi/lazyreport`,
  create_ticket: `/api/bi/ticket/`,
  create_multiple_ticket: `/api/bi/report/bulk_ticket`,
  ticket_detail: `/api/ticket/single/`,
  ticket_customer: `/api/bi/ticket-customer/${id}`,
  priority: `/api/bi/ticket-priority`,
  ticket: `/api/ticket/all/tickets`,
  search_ticket: `/api/ticket/single`,
  download_report: `/api/bi/report/download`,
  status_ticket: `/api/bi/ticket-status`,
  ticket_update: `/api/ticket`,
  login: `/api/user/login`,
  change: `/api/user/change_password`,
  close_ticket: `/api/bi/report/bulk_ticket`,
  save_ticket: `/api/bi/report/update_priority_and_status_bulk`,
  THREESIXTY_UPLOAD: `/api/bi/360`,
  DIGITAL_FOOT_PRINT: '/api/digitalfootprint',
  campaign: `/api/mtrackit/campaign`,
  publisher: `/api/mtrackit/publisher`,
  revenue: `/api/mtrackit/plots/total_revenue`,
  cost: `/api/mtrackit/plots/total_cost`,
  events: `/api/mtrackit/plots/total_events`,
  clicks: `/api/mtrackit/plots/total_clicks`,
  pubevents: `/api/mtrackit/plots/top_five_publishers_event`,
  pubcosts: `/api/mtrackit/plots/top_five_publishers_cost`,
  pubover: `/api/mtrackit/plots/click_event_publishers`,
  pubfraud: `/api/mtrackit/plots/event_frauds_publishers`,
  pubevent: `/api/mtrackit/plots/revenue_cost_publishers`,
  DEEP_DIVE_ANALYSIS: `/api/user/deepdive?package_name=PACKAGE`,
  VERIFICATION_URL: `https://merchantonboarding.mfilterit.net/api/v1/master?api_key=KEY`,
  BULK_BANK_VERIFICATION_URL: `https://merchantonboarding.mfilterit.net/api/v1/bulk_process`,
  THREESIXTY_GET_TICKET: `/api/bi/360`,
};

// https://devwebfraud.mfilterit.net/api/mtrackit/plots/total_revenue?
// package_name=web.biba.cpv&toDate=2022-07-08&fromDate=2022-05-08&
// publisher_name=all&campaign_id=all&event_type=all

// const ApiUrl = 'https://devwebfraud.mfilterit.net';
const ApiUrl = "https://infringementapi.mfilterit.net"

export { EndPoints, ApiUrl };
