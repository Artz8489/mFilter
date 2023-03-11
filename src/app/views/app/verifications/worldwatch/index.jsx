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
import WorldWatchTable from './Table';

const initialValues = {
  name: '',
  type: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup
    .string()
    .required()
    .oneOf(['individual', 'entity']),
});

function WorldWatch({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>World Watch Risk Screening</h5>
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
                    key: 'world_watch_risk_screening',
                    value: {
                      name: values.name,
                      type: values.type,
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
                        name='name'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Name'
                        label='Name'
                        type='text'
                      />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Field
                        name='type'
                        readonly={false}
                        component={Input}
                        placeholder='Enter type(individual/entity)'
                        label='Type'
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
            <Card.Body>
              <WorldWatchTable
                data={
                  verification.verification_response[0]
                    .world_watch_risk_screening.result.response.negativeMedia[0]
                    .matchDetails
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

export default connect(mapStateToProps)(WorldWatch);
