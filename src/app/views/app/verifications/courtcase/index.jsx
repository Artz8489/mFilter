import React, { useEffect } from 'react';
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
import CourtCaseTable from './Table';

const initialValues = {
  name: '',
  state: '',
  address: '',
  type: '',
  father: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  state: yup.string().required(),
  address: yup.string().required(),
  type: yup.string().required(),
  father: yup.string().required(),
});

function CourtCase({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className="pb-3">
                    <h5>Company Search</h5>
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
                    key: 'court_case_check',
                    value: {
                      name: values.name,
                      state: values.state,
                      address: values.address,
                      type: values.type,
                      fatherName: values.father,
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
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Field
                        readonly={false}
                        name='name'
                        component={Input}
                        placeholder='Enter Name'
                        label='Name'
                        type='text'
                      />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Field
                        readonly={false}
                        name='father'
                        component={Input}
                        placeholder='Enter Father Name'
                        label='Father Name'
                        type='text'
                      />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Field
                        readonly={false}
                        name='type'
                        component={Input}
                        placeholder='Enter Type'
                        label='Type'
                        type='text'
                      />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Field
                        readonly={false}
                        name='state'
                        component={Input}
                        placeholder='Enter State'
                        label='State'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        readonly={false}
                        name='address'
                        component={Input}
                        placeholder='Enter Address'
                        label='Address'
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
              <CourtCaseTable
                data={
                  verification.verification_response[0].court_case_check.result
                    .cases
                }
              />
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

export default connect(mapStateToProps)(CourtCase);
