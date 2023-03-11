import React, { useState, useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { DatePickerField } from '../../../../../_metronic/_partials/controls/forms/DatePickerField';
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
  id_number: '',
  date_of_birth: '',
};

const col = [
  { Header: 'Address', accessor: 'result.source_output.address' },
  { Header: 'Badge Details', accessor: 'result.source_output.badge_details' },
  {
    Header: 'Card Serial Number',
    accessor: 'result.source_output.card_serial_no',
  },
  { Header: 'Issue Date', accessor: 'result.source_output.date_of_issue' },
  { Header: 'DL Status', accessor: 'result.source_output.dl_status' },
  { Header: 'DOB', accessor: 'result.source_output.dob' },
  { Header: 'ID Number', accessor: 'result.source_output.id_number' },
  { Header: 'RTO Name', accessor: 'result.source_output.issuing_rto_name' },
  {
    Header: 'Last Transcated at',
    accessor: 'result.source_output.last_transacted_at',
  },
  { Header: 'Name', accessor: 'result.source_output.name' },
  { Header: 'Valid From', accessor: 'result.source_output.nt_validity_from' },
  { Header: 'Valid To', accessor: 'result.source_output.nt_validity_to' },
  { Header: 'Source', accessor: 'result.source_output.source' },
];

const schema = yup.object().shape({
  id_number: yup.string().required(),
  date_of_birth: yup.string().required(),
});

function VerifyDriving({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>EPFO Employee</h5>
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
                    key: 'verify_driving_licence',
                    value: {
                      id_number: values.id_number,
                      date_of_birth: values.date_of_birth,
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
                        name='id_number'
                        readonly={false}
                        component={Input}
                        placeholder='Enter ID Number'
                        label='ID Number'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        name='date_of_birth'
                        readonly={false}
                        component={Input}
                        placeholder='Enter DOB'
                        label='Date of birth'
                        type='date'
                      />
                      {/* <DatePickerField name='date_of_birth' label='Date' /> */}
                    </Col>
                  </Row>
                  <div className='text-left'>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button type='submit' className='w-100'>
                          Search
                        </Button>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button className='w-100'>Clear</Button>
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
                    verification.verification_response[0].verify_driving_licence
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

export default connect(mapStateToProps)(VerifyDriving);
