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

const col = [
  { Header: 'Case', accessor: 'case' },
  { Header: 'ID', accessor: 'id' },
  { Header: 'Acitve', accessor: 'result.active' },
  { Header: 'Account', accessor: 'essentials.beneficiaryAccount' },
  { Header: 'IFSC', accessor: 'essentials.beneficiaryIFSC' },
  { Header: 'MMID', accessor: 'result.bankTransfer.beneMMID' },
  { Header: 'Mobile', accessor: 'result.bankTransfer.beneMobile' },
  { Header: 'Name', accessor: 'result.bankTransfer.beneName' },
];

const initialValues = {
  ifsc: '',
  account: '',
};

const schema = yup.object().shape({
  ifsc: yup.string().required(),
  account: yup.number().required(),
});

function BankVerifications({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Bank Verficaton</h5>
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
                    key: 'bank_verification_v1',
                    value: {
                      beneficiaryIFSC: values.ifsc,
                      beneficiaryAccount: values.account,
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
                        name='ifsc'
                        readonly={false}
                        component={Input}
                        placeholder='Enter IFSC code'
                        label='IFSC'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        name='account'
                        readonly={false}
                        component={Input}
                        placeholder='Enter account number'
                        label='Account Number'
                        type='number'
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
                    verification.verification_response[0].bank_verification_v1
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

export default connect(mapStateToProps)(BankVerifications);
