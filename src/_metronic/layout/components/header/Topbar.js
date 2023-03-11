import React, { useMemo, useEffect, useState } from 'react';
import objectPath from 'object-path';
import { useLocation, useHistory } from 'react-router';
import SVG from 'react-inlinesvg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_helpers';
import { useHtmlClassService } from '../../_core/MetronicLayout';
// import { SearchDropdown } from '../extras/dropdowns/search/SearchDropdown';
// import { UserNotificationsDropdown } from '../extras/dropdowns/UserNotificationsDropdown';
// import { QuickActionsDropdown } from '../extras/dropdowns/QuickActionsDropdown';
// import { MyCartDropdown } from '../extras/dropdowns/MyCartDropdown';
// import { LanguageSelectorDropdown } from '../extras/dropdowns/LanguageSelectorDropdown';
import * as constant from '../../../../redux/constants/DashboardConstants';
import { useDispatch } from 'react-redux';
import { QuickUserToggler } from '../extras/QuiclUserToggler';
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from '../../_core/MetronicSubheader';
import { PictureAsPdfSharp } from '@material-ui/icons';
import {
  unsetLocalStorage,
  setLocalStorage,
  getLocalStorage,
} from '../../../../app/utils/helpers';

import moment from 'moment';
import { TOKEN, addEvents, removeEvents } from '../../../../app/utils/const';

export function Topbar() {
  const [counter, setCounter] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  const history = useHistory();

  const dispatch = useDispatch();
  const uiService = useHtmlClassService();
  const subheader = useSubheader();
  const location = useLocation();
  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        'extras.search.display'
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        'extras.notifications.display'
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        'extras.quick-actions.display'
      ),
      viewCartDisplay: objectPath.get(uiService.config, 'extras.cart.display'),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        'extras.quick-panel.display'
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        'extras.languages.display'
      ),
      viewUserDisplay: objectPath.get(uiService.config, 'extras.user.display'),
      asideSelfMinimizeToggle: objectPath.get(
        uiService.config,
        'aside.self.minimize.toggle'
      ),
    };
  }, [uiService]);

  const isAuthorized = TOKEN && TOKEN.token ? true : false;

  const lastInteractionTime = getLocalStorage('session_timeout');

  const eventHandler = () => {
    if (isAuthorized) {
      setLocalStorage('session_timeout', moment());
    }
  };

  useEffect(() => {
    if (location.pathname === '/incident-dashboard') {
      subheader.setTitle('Dashboard');
    }
    if (location.pathname === '/report') {
      subheader.setTitle('Report');
    }
    if (location.pathname === '/issues') {
      subheader.setTitle('Tickets');
    }
    // let temp_time = new Date();
    // temp_time.setMinutes(temp_time.getMinutes() + 1)
    // setLocalStorage('LOGIN_TIME',new Date())
    // setLocalStorage('EXPIRED_TIME',temp_time)
    let temp_time = new Date();
    // temp_time.setMinutes(temp_time.getMinutes() + 1);
    temp_time.setHours(temp_time.getHours() + 3);
    setLocalStorage('LOGIN_TIME', new Date());
    setLocalStorage('EXPIRED_TIME', temp_time);
  }, []);

  useEffect(() => {
    // 3600 -1 hours & 10800 -3 hours
    const getLoginTime = getLocalStorage('LOGIN_TIME');
    const getExpiredTime = getLocalStorage('EXPIRED_TIME');
    setTimeout(() => setCounter(counter + 5), 10600);
    if (moment().isSameOrAfter(moment(getExpiredTime))) {
      clearTimeout(counter);
      unsetLocalStorage();
      localStorage.removeItem('token');
      localStorage.removeItem('auth_data');
      localStorage.removeItem('dpackage');
      localStorage.removeItem('startDateValue');
      localStorage.removeItem('startDate');
      localStorage.removeItem('endDate');
      localStorage.removeItem('session_timeout');
      window.location = '/auth/login';
      console.log('auth expire ----------------');
    }
  }, [counter]);
  useEffect(() => {
    let now = moment(new Date());
    let end = moment(lastInteractionTime);
    let duration = moment.duration(now.diff(end));
    let timeInteractionMins = duration.asMinutes();
    const SESSION_IDLE_TIME = 120;
    const getIdleTimeOut = SESSION_IDLE_TIME;
    const checkSession = Math.floor(timeInteractionMins) >= getIdleTimeOut;
    if (checkSession) {
      clearTimeout(sessionTime);
      unsetLocalStorage();
      window.location.href = '/auth/login';
    } else {
      setTimeout(() => {
        setSessionTime(val => val + 60);
      }, 7200);
    }
  }, [sessionTime]);

  useEffect(() => {
    addEvents(eventHandler);
    return () => {
      removeEvents(eventHandler);
    };
  }, []);

  return (
    <div className='col-lg-12'>
      <div className='topbar'>
        <div className='col-lg-6'>
          <div className='d-flex justify-content-start flex-start'>
            <h5 className='text-dark font-weight-bold my-7 mr-5'>
              <>{subheader.title}</>
            </h5>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='d-flex justify-content-end flex-end my-3'>
            {layoutProps.viewQuickPanelDisplay &&
              (location.pathname === '/incident-dashboard' ||
              location.pathname === '/report' ? (
                // ((subheader && subheader.title == "Dashboard") ||
                // (subheader && subheader.title == "Report") ? (
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip id='quick-panel-tooltip'>Filter</Tooltip>}>
                  <div
                    className='topbar-item'
                    data-toggle='tooltip'
                    title='Filter'
                    data-placement='right'>
                    {layoutProps.asideSelfMinimizeToggle && (
                      <div
                        className='btn btn-icon btn-clean btn-lg mr-1'
                        // id="kt_quick_panel_toggle"
                        // id="kt_aside_toggle"
                      >
                        {/* onClick={()=> {console.log('onclickToogle')}}              */}

                        <button
                          className='brand-toggle btn btn-sm px-0'
                          onClick={() => {
                            dispatch({
                              type: constant.SET_SIDE_DRAWER,
                              setSideDrawer: true,
                            });
                          }}>
                          <span className='svg-icon svg-icon-xl svg-icon-primary'>
                            <SVG
                              pointerEvents='none'
                              src={toAbsoluteUrl(
                                'media/svg/icons/General/Filter.svg'
                              )}
                            />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </OverlayTrigger>
              ) : (
                ''
              ))}

            {layoutProps.viewUserDisplay && <QuickUserToggler />}
          </div>
        </div>
      </div>
    </div>
  );
}
