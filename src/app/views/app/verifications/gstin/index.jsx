import React, { useEffect } from 'react';
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
  gstin: '',
};

const schema = yup.object().shape({
  gstin: yup.string().required(),
});
const col = [
  {
    Header: 'GSTIN',
    accessor: 'result.source_output.gstin',
  },
  {
    Header: 'Status',
    accessor: 'result.source_output.gstin_status',
  },
  {
    Header: 'Name',
    accessor: 'result.source_output.legal_name',
  },
  {
    Header: 'Nature of bussiness',
    accessor:
      'result.source_output.principal_place_of_business_fields.nature_of_principal_place_of_business',
  },
  {
    Header: 'Building number',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.building_name',
  },
  {
    Header: 'City',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.city',
  },
  {
    Header: 'Door number',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.door_number',
  },
  {
    Header: 'Street',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.street',
  },
  {
    Header: 'District',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.dst',
  },
  {
    Header: 'Location',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.location',
  },
  {
    Header: 'Pincode',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.pincode',
  },
  {
    Header: 'State',
    accessor:
      'result.source_output.principal_place_of_business_fields.principal_place_of_business_address.state_name',
  },
  {
    Header: 'Jurisdiction',
    accessor: 'result.source_output.centre_jurisdiction',
  },
  {
    Header: 'Jurisdiction Code',
    accessor: 'result.source_output.centre_jurisdiction_code',
  },
  {
    Header: 'Constitution of bussiness',
    accessor: 'result.source_output.constitution_of_business',
  },
  {
    Header: 'Date of registration',
    accessor: 'result.source_output.date_of_registration',
  },
  {
    Header: 'Date of cancellation',
    accessor: 'result.source_output.date_of_cancellation',
  },
  {
    Header: 'Trade name',
    accessor: 'result.source_output.trade_name',
  },
  {
    Header: 'Taxpayer type',
    accessor: 'result.source_output.taxpayer_type',
  },
];

function IpDetail({ verification }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>IP Details</h5>
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
                    key: 'verify_sol_ind_gst_certificate',
                    value: {
                      gstin: values.gstin,
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
                        name='gstin'
                        component={Input}
                        placeholder='Enter GST'
                        label='GSTIN'
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
                  data={
                    verification.verification_response[0]
                      .verify_sol_ind_gst_certificate
                  }
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

export default connect(mapStateToProps)(IpDetail);
