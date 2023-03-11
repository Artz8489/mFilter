import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Verifications = ({ match }) => (
  <Suspense>
    <Switch>
      {
        <Redirect
          exact={true}
          from='/verifications'
          to='/verifications/address'
        />
      }
      <Route
        path={`/address_check`}
        component={lazy(() => import(`./address`))}
      />
      <Route path={'/gstin_search'} component={lazy(() => import(`./gstin`))} />
      <Route
        path={'/bank_verification_v1'}
        component={lazy(() => import(`./bankverfication`))}
      />
      <Route
        path={`/basic_epfo_search`}
        component={lazy(() => import(`./basicepfo`))}
      />
      <Route
        path={`/company_search_cin`}
        component={lazy(() => import(`./companysearch`))}
      />
      <Route
        path={`/court-case`}
        component={lazy(() => import(`./courtcase`))}
      />
      <Route
        path={`/ip_address_details`}
        component={lazy(() => import(`./ipdetail`))}
      />
      <Route
        path={'/ip_location'}
        component={lazy(() => import(`./iplocation`))}
      />
      <Route path={`/pan2gst`} component={lazy(() => import(`./pantogst`))} />
      <Route
        path={`/verify_aadhar`}
        component={lazy(() => import(`./verifyaadthar`))}
      />
      <Route
        path={`/verify_domain`}
        component={lazy(() => import(`./verifydomain`))}
      />
      <Route
        path={`/verify_email`}
        component={lazy(() => import(`./verifyemail`))}
      />
      <Route
        path={'/verify_pan'}
        component={lazy(() => import(`./verifypan`))}
      />
      <Route
        path={'/verify_passport'}
        component={lazy(() => import(`./verifypassport`))}
      />
      <Route
        path={'/verify_sol_ind_voter_id'}
        component={lazy(() => import(`./verifyvoteid`))}
      />
      <Route
        path={`/verify_vehicle_rc`}
        component={lazy(() => import(`./verifyvechiclerc`))}
      />
      <Route
        path={`/world-watch-risk-screening`}
        component={lazy(() => import(`./worldwatch`))}
      />
      <Route
        path={`/epfo-employee`}
        component={lazy(() => import(`./epfoemployee`))}
      />
      <Route
        path={`/verify_driving_licence`}
        component={lazy(() => import(`./verifydrivinglicense`))}
      />
      <Route
        path={`/bulk-bank-verification`}
        component={lazy(() => import(`./bulkbankverification`))}
      />
    </Switch>
  </Suspense>
);

export default Verifications;
