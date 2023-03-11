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
  cin: '',
};

const schema = yup.object().shape({
  cin: yup.string().required(),
});

const col = [
  { Header: 'CIN', accessor: 'result.cin' },
  {
    Header: 'Compliance',
    accessor: 'result.activeCompliance',
  },
  {
    Header: 'Authorized Capital',
    accessor: 'result.authorisedCapital',
  },
  {
    Header: 'Balance Sheet',
    accessor: 'result.balanceSheetDate',
  },
  { Header: 'Category', accessor: 'result.category' },
  { Header: 'Class', accessor: 'result.class' },
  { Header: 'Company Name', accessor: 'result.companyName' },
  { Header: 'Company Type', accessor: 'result.companyType' },
  {
    Header: 'Date Of Incorporation',
    accessor: 'result.dateOfIncorporation',
  },
  {
    Header: 'Description',
    accessor: 'result.descriptionOfMainDivision',
  },
  //   { Header: 'Address', accessor: 'result.directorDetails.0.address' },
  //   { Header: 'Date Of Appointment', accessor: 'result.directorDetails.0.dateOfAppointment' },
  //   { Header: 'Designation', accessor: 'result.directorDetails.0.designation' },
  //   { Header: 'DIN', accessor: 'result.directorDetails.0.din' },
  {
    Header: 'Number Of Directors',
    accessor: 'result.noOfDirectors',
  },
  {
    Header: 'Number Of Members',
    accessor: 'result.numberOfMembers',
  },
  { Header: 'PAN', accessor: 'result.pan' },
  {
    Header: 'Registered Address',
    accessor: 'result.registeredAddress',
  },
  {
    Header: 'Registered Number',
    accessor: 'result.registrationNumber',
  },
  { Header: 'ROC Office', accessor: 'result.rocOffice' },
  { Header: 'Sub Category', accessor: 'result.subCategory' },
  { Header: 'Whether Listed', accessor: 'result.whetherListed' },
  { Header: 'Target', accessor: 'target' },
];

function CompanySearch({ verification }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitVerification({}));
  }, []);
  return (
    <>
      <Card className='reportfilter-Ctr'>
        {/* <Card.Header className='pb-3'>
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
                    key: 'company_search_cin',
                    value: {
                      cin: values.cin,
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
                        name='cin'
                        readonly={false}
                        component={Input}
                        placeholder='Enter CIN code'
                        label='CIN code'
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
                    verification.verification_response[0].company_search_cin
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

export default connect(mapStateToProps)(CompanySearch);
