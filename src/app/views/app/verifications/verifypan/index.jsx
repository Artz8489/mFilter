import React, { useState, useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  InitVerification,
  PostVerification,
} from '../../../../../redux/actions/VerificationAction';
import VerificationTable from '../VerificationTable';
const initialValues = {
  pannumber: '',
};

const schema = yup.object().shape({
  pannumber: yup.string().required(),
});
const col = [
  { Header: 'First Name', accessor: 'result.source_output.first_name' },
  { Header: 'Middle Name', accessor: 'result.source_output.middle_name' },
  { Header: 'Last Name', accessor: 'result.source_output.last_name' },
  { Header: 'Gender', accessor: 'result.source_output.gender' },
  { Header: 'PAN', accessor: 'result.source_output.id_number' },
  { Header: 'Name On Card', accessor: 'result.source_output.name_on_card' },
  { Header: 'Source', accessor: 'result.source_output.source' },
  {
    Header: 'Aadhar Seeding Status',
    accessor: 'result.source_output.aadhaar_seeding_status',
  },
];
function VerifyPan({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Verify PAN</h5>
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
                    key: 'verify_pan',
                    value: {
                      pan_number: values.pannumber,
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
                        name='pannumber'
                        readonly={false}
                        component={Input}
                        placeholder='Enter PAN number'
                        label='PAN Number'
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
                  data={verification.verification_response[0].verify_pan}
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

export default connect(mapStateToProps)(VerifyPan);
