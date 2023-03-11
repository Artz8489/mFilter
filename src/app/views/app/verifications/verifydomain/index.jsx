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
  domain: '',
};

const schema = yup.object().shape({
  domain: yup.string().required(),
});
const col = [
  { Header: 'Domain', accessor: 'message.result.domain' },
  { Header: 'Name', accessor: 'message.result.name' },
  { Header: 'Parrent Domain', accessor: 'message.result.parent.domain' },
  { Header: 'Industry Category', accessor: 'message.result.category.industry' },
  {
    Header: 'Industry Group',
    accessor: 'message.result.category.industryGroup',
  },
  { Header: 'NAICS Code', accessor: 'message.result.category.naicsCode' },
  { Header: 'Sector', accessor: 'message.result.category.sector' },
  { Header: 'Sic Code', accessor: 'message.result.category.sicCode' },
  { Header: 'Sub Industry', accessor: 'message.result.category.subIndustry' },
  { Header: 'Description', accessor: 'message.result.description' },
  { Header: 'City', accessor: 'message.result.geo.city' },
  { Header: 'Country', accessor: 'message.result.geo.country' },
  { Header: 'Country Code', accessor: 'message.result.geo.countryCode' },
  { Header: 'Latitude', accessor: 'message.result.geo.lat' },
  { Header: 'Logitude', accessor: 'message.result.geo.lng' },
  { Header: 'Postal Code', accessor: 'message.result.geo.postalCode' },
  { Header: 'State', accessor: 'message.result.geo.state' },
  { Header: 'State Code', accessor: 'message.result.geo.stateCode' },
  { Header: 'Street Name', accessor: 'message.result.geo.streetName' },
  { Header: 'Legal Name', accessor: 'message.result.legalName' },
  { Header: 'Facebook Handle', accessor: 'message.result.facebook.handle' },
  { Header: 'LinkdIn Handle', accessor: 'message.result.linkedin.handle' },
  { Header: 'Twitter Handle', accessor: 'message.result.twitter.handle' },
  { Header: 'Location', accessor: 'message.result.location' },
  { Header: 'Logo', accessor: 'message.result.logo' },
  {
    Header: 'Alexa Global Rank',
    accessor: 'message.result.metrics.alexaGlobalRank',
  },
  { Header: 'Alexa US Rank', accessor: 'message.result.metrics.alexaUsRank' },
  { Header: 'Google Rank', accessor: 'message.result.metrics.googleRank' },
  {
    Header: 'Number of Employees',
    accessor: 'message.result.metrics.employees',
  },
  {
    Header: 'Employee Range',
    accessor: 'message.result.metrics.employeesRange',
  },
  {
    Header: 'Estimated Annual Revenue',
    accessor: 'message.result.metrics.estimatedAnnualRevenue',
  },
  { Header: 'Anual Revenue', accessor: 'message.result.metrics.annualRevenue' },
  {
    Header: 'Fiscal Year End',
    accessor: 'message.result.metrics.fiscalYearEnd',
  },
  { Header: 'Tine Zone', accessor: 'message.result.timeZone' },
];
function VerifyDomain({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
          <h5>Verify Domain</h5>
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
                    key: 'verify_domain',
                    value: {
                      domain: values.domain,
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
                        name='domain'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Domain'
                        label='Domain'
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
                  data={verification.verification_response[0].verify_domain}
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

export default connect(mapStateToProps)(VerifyDomain);
