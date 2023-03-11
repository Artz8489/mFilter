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
  pan: '',
};
const schema = yup.object().shape({
  pan: yup.string().required(),
});
const col = [
  { Header: 'PAN Number', accessor: 'essentials.panNumber' },
  { Header: 'State', accessor: 'essentials.state' },
  { Header: 'GSTIN', accessor: 'result.gstin' },
  {
    Header: 'Centre Jurisdiction',
    accessor: 'result.gstnDetailed.0.centreJurisdiction',
  },
  {
    Header: 'Constitution Of Business',
    accessor: 'result.gstnDetailed.0.constitutionOfBusiness',
  },
  { Header: 'GSTIN Status', accessor: 'result.gstnDetailed.0.gstinStatus' },
  {
    Header: 'Name Of Business',
    accessor: 'result.gstnDetailed.0.legalNameOfBusiness',
  },
  {
    Header: 'Address',
    accessor: 'result.gstnDetailed.0.principalPlaceAddress',
  },
  { Header: 'Street', accessor: 'result.gstnDetailed.0.principalPlaceStreet' },
  {
    Header: 'Locality',
    accessor: 'result.gstnDetailed.0.principalPlaceLocality',
  },
  {
    Header: 'District',
    accessor: 'result.gstnDetailed.0.principalPlaceDistrict',
  },
  {
    Header: 'PIN Code',
    accessor: 'result.gstnDetailed.0.principalPlacePincode',
  },
  { Header: 'State', accessor: 'result.gstnDetailed.0.principalPlaceState' },
  {
    Header: 'Registration Date',
    accessor: 'result.gstnDetailed.0.registrationDate',
  },
  {
    Header: 'State Jurisdiction',
    accessor: 'result.gstnDetailed.0.stateJurisdiction',
  },
  { Header: 'Tax Payer Type', accessor: 'result.gstnDetailed.0.taxPayerType' },
  {
    Header: 'Trade Name Of Business',
    accessor: 'result.gstnDetailed.0.tradeNameOfBusiness',
  },
];
function PanToGst({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>PAN to GST</h5>
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
                    key: 'pan2gst',
                    value: {
                      panNumber: values.pan,
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
                        name='pan'
                        component={Input}
                        placeholder='Enter PAN'
                        label='PAN '
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
                  data={verification.verification_response[0].pan2gst}
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

export default connect(mapStateToProps)(PanToGst);
