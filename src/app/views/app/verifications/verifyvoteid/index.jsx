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
  voteid: '',
  name: '',
};

const schema = yup.object().shape({
  voteid: yup.string().required(),
  name: yup.string().required(),
});
const col = [
  { Header: 'ACNO', accessor: 'result.source_output.ac_no' },
  { Header: 'Date Of Birth', accessor: 'result.source_output.date_of_birth' },
  { Header: 'District', accessor: 'result.source_output.district' },
  { Header: 'Gender', accessor: 'result.source_output.gender' },
  { Header: 'House Number', accessor: 'result.source_output.house_no' },
  { Header: 'ID Number', accessor: 'result.source_output.id_number' },
  { Header: 'Last Updated', accessor: 'result.source_output.last_update' },
  { Header: 'Name on the card', accessor: 'result.source_output.name_on_card' },
  { Header: 'Part Number', accessor: 'result.source_output.part_no' },
  {
    Header: 'Latitude, Longitude',
    accessor: 'result.source_output.ps_lat_long',
  },
  { Header: 'Primary School Name', accessor: 'result.source_output.ps_name' },
  { Header: 'RLN Name', accessor: 'result.source_output.rln_name' },
  { Header: 'Section Number', accessor: 'result.source_output.section_no' },
  { Header: 'Source', accessor: 'result.source_output.source' },
  { Header: 'State Code', accessor: 'result.source_output.st_code' },
  { Header: 'State', accessor: 'result.source_output.state' },
];
function VerifyVoteId({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Verify Voter ID</h5>
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
                    key: 'verify_sol_ind_voter_id',
                    value: {
                      voter_id: values.voteid,
                      name_on_card: values.name,
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
                        name='voteid'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Voter id'
                        label='Voter ID'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        name='name'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Name'
                        label='Name'
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
                      .verify_sol_ind_voter_id
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

export default connect(mapStateToProps)(VerifyVoteId);
