import React, { useState, useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  InitVerification,
  PostVerification,
} from '../../../../../redux/actions/VerificationAction';
import VerificationTable from '../VerificationTable';
const initialValues = {
  rc: '',
};

const schema = yup.object().shape({
  rc: yup.string().required(),
});

const col = [
  {
    Header: 'Gross Weight',
    accessor: 'result.extraction_output.avg_gross_vehicle_weight',
  },
  {
    Header: 'Axle Configuration',
    accessor: 'result.extraction_output.axle_configuration',
  },
  {
    Header: 'Chassis Number',
    accessor: 'result.extraction_output.chassis_number',
  },
  { Header: 'Color', accessor: 'result.extraction_output.color' },
  {
    Header: 'Emission Norms',
    accessor: 'result.extraction_output.emission_norms',
  },
  {
    Header: 'Engine Number',
    accessor: 'result.extraction_output.engine_number',
  },
  { Header: 'Fitness Upto', accessor: 'result.extraction_output.fitness_upto' },
  { Header: 'Fuel Type', accessor: 'result.extraction_output.fuel_type' },
  {
    Header: 'Insurance Details',
    accessor: 'result.extraction_output.insurance_details',
  },
  {
    Header: 'Insurance validity',
    accessor: 'result.extraction_output.insurance_validity',
  },
  { Header: 'Maker Model', accessor: 'result.extraction_output.maker_model' },
  { Header: 'Manufacturer', accessor: 'result.extraction_output.manufacturer' },
  { Header: 'Tax Upto', accessor: 'result.extraction_output.mv_tax_upto' },
  { Header: 'Owner Name', accessor: 'result.extraction_output.owner_name' },
  { Header: 'Owner Number', accessor: 'result.extraction_output.owner_number' },
  {
    Header: 'Permit Issue Date',
    accessor: 'result.extraction_output.permit_issue_date',
  },
  {
    Header: 'Permit Number',
    accessor: 'result.extraction_output.permit_number',
  },
  { Header: 'Permit Type', accessor: 'result.extraction_output.permit_type' },
  {
    Header: 'Permit Valitdity',
    accessor: 'result.extraction_output.permit_validity',
  },
  { Header: 'PUC Upto', accessor: 'result.extraction_output.puc_number_upto' },
  {
    Header: 'Registration Date',
    accessor: 'result.extraction_output.registration_date',
  },
  {
    Header: 'Registration Number',
    accessor: 'result.extraction_output.registration_number',
  },
  { Header: 'RTO Name', accessor: 'result.extraction_output.rto_name' },
  {
    Header: 'Vehicle Class',
    accessor: 'result.extraction_output.vehicle_class',
  },
];

function VerifyRC({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Verify Vechicle Rc</h5>
        </Card.Header> */}
        <Card.Body className='pt-4 pb-4'>
          <Formik
            enableReinitialize={true}
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              const body = {
                api_list: [
                  {
                    key: 'verify_vehicle_rc',
                    value: {
                      rc_number: values.rc,
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
                        name='rc'
                        readonly={false}
                        component={Input}
                        placeholder='Enter RC'
                        label='RC'
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
                  data={verification.verification_response[0].verify_vehicle_rc}
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

export default connect(mapStateToProps)(VerifyRC);
