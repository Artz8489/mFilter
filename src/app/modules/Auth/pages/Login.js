import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FetchLoginIncidents } from '../../../../redux/actions/LoginAction';
import { useSelector, useDispatch } from 'react-redux';
import { FormatListBulletedTwoTone } from '@material-ui/icons';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../../../utils/helpers';
import jwt_decode from 'jwt-decode';

import { AUTH_DATA } from '../../../utils/const';

function Login(props) {
  const { intl, loginData } = props;

  const loginMessage = loginData && loginData.message ? loginData.message : '';
  const loginErrorMessage = loginData && loginData.error ? loginData.error : '';
  const loginStatus = loginData && loginData.status ? loginData.status : '';
  const userDetails = loginData && loginData.user ? loginData.user : {};
  const loginCode = loginData && loginData.code ? loginData.code : 0;
  const loginErrCode =
    loginData && loginData.error && loginData.error.code
      ? loginData.error.code
      : 0;
  const loginErrMsg =
    loginData && loginData.error && loginData.error.message
      ? loginData.error.message
      : '';
  const token =
    loginData && loginData?.token && loginData?.token ? loginData?.token : '';

  const [loading, setLoading] = useState(false);
  const [invalidCred, setInvalidCred] = useState('');
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required(' No password provided.'),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = fieldname => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return 'is-invalid';
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return 'is-valid';
    }

    return '';
  };

  useEffect(() => {
    if (loginStatus && loginMessage === 'Login success') {
      if (token) {
        const decoded = jwt_decode(token);
        setLocalStorage(AUTH_DATA.AUTH, JSON.stringify(decoded));
        localStorage.setItem('token', JSON.stringify(token));
        // dispatch(FetchMenulist());
      }
      window.location = '/incident-dashboard';
    }
  }, [loginStatus]);

  useEffect(() => {
    if (loginErrorMessage === 'Invalid email or password') {
      // console.log('coming');
      setInvalidCred('Invalid User/Password');
    }
    //  else  {
    //   setInvalidCred('');
    // }
    // dispatch(clearLoginIncidents())
  }, [loginErrorMessage]);

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        dispatch(FetchLoginIncidents(values));
        disableLoading();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className='login-form login-signin' id='kt_login_signin_form'>
      {/* begin::Head */}
      <div className='text-center mb-10 mb-lg-20'>
        <h3 className='font-size-h1'>
          <FormattedMessage id='AUTH.LOGIN.TITLE' />
        </h3>
        <p className='text-muted font-weight-bold'>
          Enter your username and password
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={e => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
        className='form fv-plugins-bootstrap fv-plugins-framework'>
        <div className='form-group fv-plugins-icon-container'>
          {invalidCred.length !== 0 ? (
            <h6 className='text-danger mb-5 text-center font-weight-bold'>
{/* Invalid email or password */}
              {invalidCred}
            </h6>
          ) : null}
          <input
            placeholder='Email'
            type='email'
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              'email'
            )}`}
            name='email'
            onKeyUp={() => {
              // setInvalidCred('');
              //  dispatch(clearLoginIncidents())
            }}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className='form-group fv-plugins-icon-container'>
          <input
            placeholder='Password'
            type='password'
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              'password'
            )}`}
            onKeyUp={() => {
              // setInvalidCred('');
              //  dispatch(clearLoginIncidents())
            }}
            name='password'
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className='form-group d-flex flex-wrap justify-content-between align-items-center'>
          <button
            id='kt_login_signin_submit'
            type='submit'
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3 w-100`}
            // onClick= {()=> {setInvalidCred('')}}
            >
            <span>Sign in</span>
            {loading && <span className='ml-3 spinner spinner-white'></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

const mapStateToProps = state => {
  const { login } = state;
  return {
    loginData: login && login.login_data ? login.login_data : {},
  };
};

export default connect(mapStateToProps)(Login);
