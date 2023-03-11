/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useEffect } from 'react';
import {
  Redirect,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { Layout } from '../_metronic/layout';
import AppPages from './AppPages';
import { AuthPage } from './modules/Auth';
import Login from './modules/Auth/pages/Login';
import ErrorsPage from './modules/ErrorsExamples/ErrorsPage';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../app/utils/helpers";
import { AUTH_DATA } from "../app/utils/const";

export function Routes() {

  const isAuthorized = JSON.parse(
    getLocalStorage(AUTH_DATA.AUTH)
  )

  return (
    <Switch>
      {!isAuthorized ? (
        <>
          <Route
            exact
            path='/'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/incident-dashboard'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/degree-search'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/demo'
            component={() => <Redirect to='/auth/login' />}
          />

          <Route
            exact
            path='/verifications/address'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/issue'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/packages'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/deepdive'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/report'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/ticketing-system'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/issues'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/user'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/verification'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='digital_foot_prints'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/changepassword'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/package-detail'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/usermanagement'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/package-user'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/mtrackit'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route
            exact
            path='/mtrackit_dashboard'
            component={() => <Redirect to='/auth/login' />}
          />
           {/* <Route
            exact
            path='/mtrackit_publisher'
            component={() => <Redirect to='/auth/login' />}
          /> */}
          <Route
            exact
            path='add-user'
            component={() => <Redirect to='/auth/login' />}
          />
          <Route path='/auth/login' component={AuthPage} />
          <Route path='/error' component={ErrorsPage} />
        </>
      ) : (
        <>
          <Layout>
            <AppPages />
          </Layout>
        </>
      )}
    </Switch>
  );
}

