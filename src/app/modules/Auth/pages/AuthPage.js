/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../../_metronic/_helpers';
import { ContentRoute } from '../../../../_metronic/layout';
import Login from './Login';
// import Registration from "./Registration";
// import ForgotPassword from "./ForgotPassword";
import '../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss';

export function AuthPage() {
  return (
    <>
      <div className='d-flex flex-column flex-root'>
        {/*begin::Login*/}
        <div
          className='login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white'
          id='kt_login'>
          {/*begin::Aside*/}
          <div
            className='login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10'
            style={{
              backgroundImage: `url(${toAbsoluteUrl('/media/bg/bg-4.jpg')})`,
            }}>
            {/*begin: Aside Container*/}
            <div className='d-flex flex-row-fluid flex-column justify-content-between'>
              {/* start:: Aside header */}
              <Link to='/' className='flex-column-auto mt-5 pb-lg-0 pb-10'>
                <img
                  alt='Logo'
                  className='max-h-120px'
                  src={toAbsoluteUrl('/media/logos/logo.png')}
                />
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className='flex-column-fluid d-flex flex-column justify-content-center'>
                <h3 className='font-size-h1 mb-5 text-white'>
                  Welcome to mFilterIt!
                </h3>

                <h5 className='font-size-h3 mb-5 text-white'>
                  Incident Mangement
                </h5>

                <p className='font-weight-lighter text-white opacity-80'>
                  Brand Safety,Brand Infringement,Brand Relevancy,Continuous
                  Monitoring
                </p>
              </div>
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className='d-none flex-column-auto d-lg-flex justify-content-between mt-10'>
                <div className='opacity-70 font-weight-bold	text-white'>
                  &copy; 2022 mFilterIt
                </div>
                <div className='d-flex'>
                  <Link to='' className='text-white'>
                    Privacy
                  </Link>
                  <Link to='' className='text-white ml-10'>
                    Legal
                  </Link>
                  <Link to='' className='text-white ml-10'>
                    Contact
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className='d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden'>
            <div className='d-flex flex-column-fluid flex-center mt-30 mt-lg-0'>
              <Switch>
                <ContentRoute path='/auth/login' component={Login} />
                {/* <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                /> */}
                {/* <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                /> */}
                <Redirect from='/auth' exact={true} to='/auth/login' />
                <Redirect to='/auth/login' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
