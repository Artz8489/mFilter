import React, { useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Row, Col, Button, Card } from 'react-bootstrap';
import {
  InitVerification,
  PostVerification,
} from '../../../../../redux/actions/VerificationAction';
import { connect, useDispatch } from 'react-redux';
import VerificationTable from '../VerificationTable';

const initialValues = {
  establishmentId: '',
};

const schema = yup.object().shape({
  establishmentId: yup.string().required(),
});

const col = [
  { Header: 'Establishment ID', accessor: 'result.establishmentId' },
  { Header: 'Establishment Name', accessor: 'result.establishmentName' },
  { Header: 'Address', accessor: 'result.establishmentDetails.address' },
  { Header: 'City', accessor: 'result.establishmentDetails.city' },
  { Header: 'Region', accessor: 'result.establishmentDetails.region' },
  { Header: 'Zone', accessor: 'result.establishmentDetails.zone' },
  { Header: 'District', accessor: 'result.establishmentDetails.district' },
  { Header: 'State', accessor: 'result.establishmentDetails.state' },
  { Header: 'Country', accessor: 'result.establishmentDetails.country' },
  { Header: 'PIN Code', accessor: 'result.establishmentDetails.pincode' },
  {
    Header: 'Date Of Establishment',
    accessor: 'result.establishmentDetails.dateOfSetupOfEstablishment',
  },
  {
    Header: 'EPFO Office Address',
    accessor: 'result.establishmentDetails.epfoOfficeAddress',
  },
  {
    Header: 'EPFO Office Name',
    accessor: 'result.establishmentDetails.epfoOfficeName',
  },
  { Header: 'ESIC Code', accessor: 'result.establishmentDetails.esicCode' },
  {
    Header: 'Ownership Type',
    accessor: 'result.establishmentDetails.ownershipType',
  },
  { Header: 'PAN Status', accessor: 'result.establishmentDetails.panStatus' },
  {
    Header: 'Primary Business Activity',
    accessor: 'result.establishmentDetails.primaryBusinessActivity',
  },
  {
    Header: 'Sections Applicable',
    accessor: 'result.establishmentDetails.sectionApplicable',
  },
  {
    Header: 'Actionable Status',
    accessor: 'result.establishmentStatus.actionableStatus',
  },
  {
    Header: 'Exemption Status',
    accessor: 'result.establishmentStatus.exemptionStatus',
  },
  {
    Header: 'Working Status',
    accessor: 'result.establishmentStatus.workingStatus',
  },
];

function BasicEpfo({ verification }) {
  console.log('IN GUI', verification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className="pb-3">
                    <h5>Basic EPFO search</h5>
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
                    key: 'basic_epfo_search',
                    value: {
                      establishmentId: values.establishmentId,
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
                        name='establishmentId'
                        component={Input}
                        placeholder='Enter Establishment ID'
                        label='Establishment ID'
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
                    verification?.verification_response[0]?.basic_epfo_search
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

export default connect(mapStateToProps)(BasicEpfo);
