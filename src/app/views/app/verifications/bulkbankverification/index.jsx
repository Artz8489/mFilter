import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';

import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import {
  InitVerification,
  PostBulkBankVerification,
} from '../../../../../redux/actions/VerificationAction';

const initialValues = {
  bankdetailslist: '',
};

function BulkBank({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Bulk Bank Verification</h5>
        </Card.Header> */}
        <Card.Body className='pt-4 pb-4'>
          <Formik
            enableReinitialize={true}
            // validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              dispatch(PostBulkBankVerification(values));
              resetForm();
            }}>
            {({ values, setFieldValue, handleBlur, handleSubmit }) => (
              <div className='userform-Ctr'>
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}>
                  <Row gutter={[20, 20]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Form.Group
                        controlId='formFile'
                        className='mb-3 bg-white text-dark  p-2'>
                        <Form.Control
                          name='bankdetailslist'
                          type='file'
                          onChange={event => {
                            console.log(event.currentTarget.files[0], values);
                            setFieldValue(
                              'bankdetailslist',
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className='text-left'>
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className='w-100' style={{ textAlign: 'right' }}>
                          <Button type='submit' className='w-50'>
                            Upload
                          </Button>
                        </div>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className='w-100' style={{ textAlign: 'left' }}>
                          <Button className='w-50'>Download Sample</Button>
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
        verification.verification_response &&
        verification.verification_response.output_url && (
          <div className='w-100' style={{ textAlign: 'center' }}>
            <Button className='w-45 m-10'>
              <a
                href={verification.verification_response.output_url}
                download='bank_verification.csv'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}>
                Download Result
              </a>
            </Button>
          </div>
        )}
    </>
  );
}
const mapStateToProps = state => {
  const { verification } = state;
  return { verification };
};

export default connect(mapStateToProps)(BulkBank);
