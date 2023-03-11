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
  aadhar: '',
};
const schema = yup.object().shape({
  aadhar: yup.string().required(),
});

const col = [
  {
    Header: 'Age Band Lower Limit',
    accessor: 'result.source_output.age_band.lower_limit',
  },
  {
    Header: 'Age Band Upper Limit',
    accessor: 'result.source_output.age_band.upper_limit',
  },
  { Header: 'Gender', accessor: 'result.source_output.gender' },
  { Header: 'Mobile Number', accessor: 'result.source_output.mobile_number' },
  { Header: 'State', accessor: 'result.source_output.state' },
];
function VerifyAadthar({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className="pb-3">
                    <h5>Verify Aadhar</h5>
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
                    key: 'verify_aadhar',
                    value: {
                      aadhaar_number: values.aadhar,
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
                        readonly={false}
                        name='aadhar'
                        component={Input}
                        placeholder='Enter Aadhar'
                        label='Aadhar'
                        type='text'
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
                  data={verification.verification_response[0].verify_aadhar}
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

export default connect(mapStateToProps)(VerifyAadthar);
