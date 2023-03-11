import React, { useEffect, Suspense, lazy } from 'react';
import { Redirect, Switch, Route, useLocation } from 'react-router-dom';
import { LayoutSplashScreen, ContentRoute } from '../_metronic/layout';
import PageLoader from './PageLoader';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../app/utils/helpers';
import { AUTH_DATA } from '../app/utils/const';
const MtrackitDash = lazy(() => import('./views/app/mtrackitdash'));
const MtrackitDashboard = lazy(() => import('./views/app/mtrackitdash/index'));
// const MtrackitPublisher = lazy(()=>('./views/app/mtrackit/publisher/index'))
// App pages
const ThreeSixtyDegree = lazy(() => import('./views/app/360-degree'));
const Dashboard = lazy(() => import('./views/app/dashboard'));
// const AuthPage = lazy(() => import("./modules/Auth/pages/AuthPage"));

const DemoPages = lazy(() => import('./views/app/demo'));
const Issues = lazy(() => import('./views/app/issues'));
const Packages = lazy(() => import('./views/app/packages'));
const Reports = lazy(() => import('./views/app/reports'));
const TicketingSystem = lazy(() => import('./views/app/ticketing-system'));
const Tickets = lazy(() => import('./views/app/tickets'));
const Users = lazy(() => import('./views/app/users'));
const DigitalFootPrint = lazy(() => import('./views/app/digitalfootprint'));
const ChangePassword = lazy(() => import('./views/app/changepassword'));
const ErrorPage = lazy(() => import('./views/app/errors'));
const PackageUser = lazy(() => import('./views/app/packageuser'));
const UserManagement = lazy(() => import('./views/app/usermanagement'));
const Verifications = lazy(() => import('./views/app/verifications'));
const DeepDiveAnalysis = lazy(() => import('./views/app/deepDive'));

export function AppPages({ menuLists }) {
  const isAuthorized = JSON.parse(getLocalStorage(AUTH_DATA.AUTH));
  const pathName = useLocation().pathname;
  const getMenuList = getLocalStorage('MENU_LIST_VALUE');
  const menuList = getMenuList !== 'undefined' ? JSON.parse(getMenuList) : '';
  const getMenuRoute = arr => {
    const tempRoute = [];
    arr &&
      arr.length > 0 &&
      arr.map(menu => {
        if (menu.route) {
          tempRoute.push(menu.route);
        }
      });
    return tempRoute;
  };

  const checkVaild = path => {
    let valid = false;
    if (getMenuRoute(menuList).includes(path)) {
      valid = true;
    }
    return valid;
  };
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <ContentRoute
          path='/auth/login'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Dashboard {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/incident-dashboard'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Dashboard {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/degree-search'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <ThreeSixtyDegree {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/demo'
          render={props =>
            isAuthorized ? (
              <DemoPages {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          path='/issue'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Issues {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/packages'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Packages {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/deep-dive'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <DeepDiveAnalysis {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/report'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Reports {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/ticketing-system'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <TicketingSystem {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/issues'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Tickets {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        {/* Verification route starts here */}
        <ContentRoute
          path='/verification'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/address'
          path='/address_check'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/verifyemail'
          path='/verify_email'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/verifyemail'
          path='/verify_aadhar'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/verifyemail'
          path='/verify_pan'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/bank_verification_v1'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/basic_epfo_search'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/company_search_cin'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/gstin_search'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/pan2gst'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/verify_domain'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/ip_location'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/ip_address_details'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/verify_driving_licence'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/verify_passport'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/verify_sol_ind_voter_id'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          // path='/verifications/bank_verification_v1'
          path='/verify_vehicle_rc'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Verifications {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        {/* Verification routes end here */}
        <ContentRoute
          path='/add-user'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Users {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          path='/verification'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Users {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/digital_foot_prints'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <DigitalFootPrint {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/changepassword'
          render={props =>
            isAuthorized ? (
              <ChangePassword {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/package-detail'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <PackageUser {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        <ContentRoute
          path='/usermanagement'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <UserManagement {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          path='/package-user'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <PackageUser {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />
        <ContentRoute
          path='/user'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Users {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        />

        {/* <ContentRoute
          path='*'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <Dashboard {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        /> */}
        {/* <ContentRoute
          exact
          path='/mtrackit'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        /> */}
        {/* <ContentRoute
          exact
          path='/mtrackit/dashboard'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        /> */}
        {/* <ContentRoute
          exact
          path='/mtrackit/campaign'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />
        <ContentRoute
          exact
          path='/mtrackit/updateCampaign/:id'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />
        <ContentRoute
          exact
          path='/mtrackit/addCampaign'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />
        <ContentRoute
          exact
          path='/mtrackit/publisher'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />
        <ContentRoute
          exact
          path='/mtrackit/updatePublisher/:id'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />

        <ContentRoute
          exact
          path='/mtrackit/addPublisher'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        />
        <ContentRoute
          exact
          path='/mtrackit/report'
          render={(props) => isAuthorized
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/auth/login' />}
        /> */}
        <ContentRoute
          path='/mtrackit_dashboard'
          render={(props) => isAuthorized && checkVaild(pathName)
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/mtrackit_dashboard' />}
        />
         {/* <ContentRoute
          path='/mtrackit_publisher'
          render={(props) => isAuthorized && checkVaild(pathName)
            ? <MtrackitDashboard {...props} />
            : <Redirect to='/mtrackit_publisher' />}
        /> */}
        {/* <ContentRoute
          path='/usermanagement'
          render={props =>
            isAuthorized && checkVaild(pathName) ? (
              <UserManagement {...props} />
            ) : (
              <Redirect to='/incident-dashboard' />
            )
          }
        /> */}
 <ContentRoute
          path='*'
          render={(props) => isAuthorized && checkVaild(pathName)
            ? <Dashboard {...props} />
            : <Redirect to='/incident-dashboard' />}
        />


      </Switch>
    </Suspense>
  );
}

const mapStateToProps = state => {
  const { common } = state;
  return {
    menuLists: common && common?.menu_list ? common.menu_list?.menus : [],
  };
};
export default connect(mapStateToProps)(AppPages);
