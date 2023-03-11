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
  ipdetail: '',
};

const schema = yup.object().shape({
  ipdetail: yup.string().required(),
});
const col = [
  {
    Header: 'City',
    accessor: 'result.source_output.ip_location_details.ip_city',
  },
  {
    Header: 'Country Code',
    accessor: 'result.source_output.ip_location_details.ip_country_code',
  },
  {
    Header: 'Latitude',
    accessor: 'result.source_output.ip_location_details.ip_latitude',
  },
  {
    Header: 'Longitude',
    accessor: 'result.source_output.ip_location_details.ip_longitude',
  },
  {
    Header: 'Region',
    accessor: 'result.source_output.ip_location_details.ip_region',
  },
  {
    Header: 'Region',
    accessor: 'result.source_output.ip_location_details.ip_region',
  },
  {
    Header: 'Time Zone',
    accessor: 'result.source_output.ip_location_details.ip_timezone',
  },
  {
    Header: 'Is Bot',
    accessor: 'result.source_output.is_bot',
  },
  {
    Header: 'Is Recent Abuse',
    accessor: 'result.source_output.is_recent_abuse',
  },
  {
    Header: 'Is Success',
    accessor: 'result.source_output.is_success',
  },
  {
    Header: 'ASN',
    accessor: 'result.source_output.service_details.ASN_details',
  },
  {
    Header: 'Connection Details',
    accessor: 'result.source_output.service_details.connection_details',
  },
  {
    Header: 'HOST IP',
    accessor: 'result.source_output.service_details.host_ip',
  },
  {
    Header: 'Is Crawler',
    accessor: 'result.source_output.service_details.is_crawler',
  },
  {
    Header: 'Is Mobile',
    accessor: 'result.source_output.service_details.is_mobile',
  },
  {
    Header: 'ISP',
    accessor: 'result.source_output.service_details.isp_details',
  },
  {
    Header: 'ISP Details',
    accessor: 'result.source_output.service_details.org_details',
  },
  {
    Header: 'Is TOR Active',
    accessor: 'result.source_output.vpn_details.is_active_tor',
  },
  {
    Header: 'Is VPN Active',
    accessor: 'result.source_output.vpn_details.is_active_vpn',
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
                    key: 'ip_address_details',
                    value: {
                      device_ip: values.ipdetail,
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
                        name='ipdetail'
                        component={Input}
                        placeholder='Enter IP'
                        label='IP Deatil'
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
                    verification.verification_response[0].ip_address_details
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
