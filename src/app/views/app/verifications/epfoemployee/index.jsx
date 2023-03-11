import React, { useEffect } from 'react';
import { Input } from '../../../../../_metronic/_partials/controls/forms/Input';
import { DatePickerField } from '../../../../../_metronic/_partials/controls/forms/DatePickerField';
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
import moment from 'moment';

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
    Header: 'Working Status',
    accessor: 'result.establishmentStatus.workingStatus',
  },
];
const initialValues = {
  name: '',
  establishmentId: '',
  due_date: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  establishmentId: yup.string().required(),
  due_date: yup.string().required(),
});
// result.employeeNameSearchResponse.employeeList.183
function getCol(data = {}) {
  console.dir(data);
  let column = [...col];
  if (data?.result?.employeeNameSearchResponse) {
    data.result.employeeNameSearchResponse.employeeList.forEach((v, i) => {
      column.push({
        Header: `Employee ${i + 1}`,
        accessor: `result.employeeNameSearchResponse.employeeList.${i}`,
      });
    });
    return column;
  }
  return column;
}

function EpfoEmployee({ verification }) {
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
              const month = moment(values.due_date);
              const body = {
                api_list: [
                  {
                    key: 'epfo_employee_v1',
                    value: {
                      employee_name: values.name,
                      establishment_code_number: values.establishmentId,
                      month: month.format('MM/YYYY'),
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
                        name='name'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Name'
                        label='Name'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Field
                        name='establishmentId'
                        readonly={false}
                        component={Input}
                        placeholder='Enter Establishment ID'
                        label='Establishment ID'
                        type='text'
                      />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <DatePickerField
                        name='due_date'
                        label='Date'
                        placeholder='enter the date'
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
                  column={getCol(
                    verification.verification_response[0].epfo_employee_v1
                  )}
                  // column={col}
                  data={verification.verification_response[0].epfo_employee_v1}
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

export default connect(mapStateToProps)(EpfoEmployee);
