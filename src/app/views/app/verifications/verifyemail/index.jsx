import React, { useState, useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import {
  InitVerification,
  PostVerification,
} from '../../../../../redux/actions/VerificationAction';
import VerificationTable from '../VerificationTable';

const initialValues = {
  email: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
});
const col = [
  { Header: 'Email', accessor: '0.input' },
  { Header: 'Is Reachable', accessor: '0.is_reachable' },
  { Header: 'is Disposible', accessor: '0.misc.is_disposable' },
  { Header: 'Is Role Account', accessor: '0.misc.is_role_account' },
  { Header: 'Accepts Mail', accessor: '0.mx.accepts_mail' },
  { Header: 'SMTP Connect', accessor: '0.smtp.can_connect_smtp' },
  { Header: 'Has Full Inbox', accessor: '0.smtp.has_full_inbox' },
  { Header: 'Is SMTP Catch All', accessor: '0.smtp.is_catch_all' },
  { Header: 'Is Deliverable', accessor: '0.smtp.is_deliverable' },
  { Header: 'Is SMTP Dissabled', accessor: '0.smtp.is_disabled' },
  { Header: 'Address', accessor: '0.syntax.address' },
  { Header: 'Domain', accessor: '0.syntax.domain' },
  { Header: 'Is Valid Syntax', accessor: '0.syntax.is_valid_syntax' },
  { Header: 'Username', accessor: '0.syntax.username' },
];

function VerifyEmail({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Verify Email</h5>
        </Card.Header> */}
        <Card.Body className='pt-4 pb-4'>
          <Formik
            enableReinitialize={true}
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              const body = {
                api_list: [
                  {
                    key: 'verify_email',
                    value: {
                      to_emails: [values.email],
                    },
                  },
                ],
              };
              dispatch(PostVerification(body));
              resetForm();
            }}>
            {({ values, setFieldValue, handleBlur }) => (
              <div className='userform-Ctr'>
                <Form>
                  <Row gutter={[20, 20]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        name='email'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Email'
                        label='Email'
                        type='email'
                      />
                    </Col>
                  </Row>
                  <div className='text-left'>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className='w-100' style={{ textAlign: 'right' }}>
                          <Button type='submit' className='w-50'>
                            Search
                          </Button>
                        </div>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className='w-100' style={{ textAlign: 'left' }}>
                          <Button className='w-50'>Clear</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </Card.Body>
      </Card>
      {verification &&
        verification.verification_response instanceof Array &&
        verification.verification_response.length > 0 && (
          <Card>
            <Card.Header>
              <h6>Response</h6>
            </Card.Header>
            <Card.Body>
              <div className='App'>
                <VerificationTable
                  column={col}
                  data={verification.verification_response[0].verify_email}
                />
              </div>
            </Card.Body>
          </Card>
        )}
    </>
  );
}

const mapStateToProps = state => {
  const { verification } = state;
  return { verification };
};

export default connect(mapStateToProps)(VerifyEmail);
