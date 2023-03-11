import React from 'react';
import overlayFactory from 'react-bootstrap-table2-overlay';
import {
  Card,
  CardBody,
  Input,
  Select,
  DatePickerField,
} from '../../../../_metronic/_partials/controls/index';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../_metronic/_helpers/index';
import { Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Get360Tickets,
  Upload360File,
} from '../../../../redux/actions/ThreeSixtyActions';
import { Link } from 'react-router-dom';

const customTotal = (from, to, size) => (
  <span className='react-bootstrap-table-pagination-total ml-3'>
    Showing {from} to {to} of {size} Results
  </span>
);

const downloadAttachment = async url => {
  const result = await fetch(
    'https://infringementapi.mfilterit.net/api/bi/360_attachment',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    }
  );
  let blob = await result.blob();
  const file = window.URL.createObjectURL(blob);
  window.location.assign(file);
};

const ThreeSixtyDegree = ({ tickets: { loading, issues }, upload }) => {
  const [show, setEditShow] = useState(false);
  const [viewshow, setViewShow] = useState(false);

  const handleViewClose = () => setViewShow(false);
  const handleViewShow = () => setViewShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get360Tickets());
  }, [upload.data]);

  const options = {
    paginationSize: 4,
    alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: <i class='ki ki-bold-arrow-back icon-xs'></i>,
    nextPageText: <i class='ki ki-bold-arrow-next icon-xs'></i>,
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: '20', value: 20 },
    ],
  };

  function handleNoData() {
    if (loading) return <></>;
    return <>No Data Found</>;
  }
  const columns = [
    {
      dataField: 'id',
      text: 'Ticket ID',
      sort: true,
      style: {
        // width: '8%',
      },
      formatter: (cellContent, row) => {
        return (
          <div>
            <a onClick={handleEditShow} style={{ color: '#3699ff' }}>
              {row.id}
            </a>
          </div>
        );
      },
    },
    {
      dataField: 'subject',
      text: 'Subject',
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis-50'>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id={`tooltip-top`}>{row.subject}</Tooltip>}>
              <span>{row.subject}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'description',
      text: 'Description',
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.description}</Tooltip>
              }>
              <span>{row.description}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'priority.name',
      text: 'Priority',
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis-50'>
            <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip id={`tooltip-top`}>{row.priority.name}</Tooltip>
              }>
              <span>{row.priority.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'status.name',
      text: 'Status',
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <div>
            {row.status === 'new' ? (
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip id={`tooltip-top`}>{row.status.name}</Tooltip>
                }>
                <span class='label label-lg label-light-success label-inline'>
                  {row.status.name}
                </span>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip id={`tooltip-top`}>{row.status.name}</Tooltip>
                }>
                <span class='label label-lg label-light-warning label-inline'>
                  {row.status.name}
                </span>
              </OverlayTrigger>
            )}
          </div>
        );
      },
    },
    {
      dataField: 'assigned_to.name',
      text: 'Assigned To',
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis-50'>
            <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip id={`tooltip-top`}>{row.assigned_to.name}</Tooltip>
              }>
              <span>{row.assigned_to.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'author.name',
      text: 'Author',
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis-50'>
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id={`tooltip-top`}>{row.author.name}</Tooltip>}>
              <span>{row.author.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'start_date',
      text: 'Start Date',
      style: {
        width: '12%',
      },
    },
    {
      dataField: 'due_date',
      text: 'Due Date',
      style: {
        width: '10%',
      },
    },
    {
      dataField: 'attachments',
      text: 'Attach',
      style: {
        width: '10%',
        display: 'flex',
      },
      formatter: (cellContent, row) =>
        row.attachments.map((v, i) => (
          <div key={i} className='text-center'>
            <span
              className='svg-icon svg-icon-md svg-icon-primary'
              onClick={() => downloadAttachment(v.content_url)}>
              <SVG
                title={v.content_url}
                src={toAbsoluteUrl('/media/svg/icons/Files/File.svg')}
              />
            </span>
          </div>
        )),
    },
  ];

  function handleUpload(e) {
    e.preventDefault();
    const data = { csv: e.target.excelFile, extra: e.target.extraFile };
    dispatch(Upload360File(data));
  }

  function handleSampleDownload() {
    const element = document.createElement('a');
    const fileData =
      '"Name","Mobile","Email","Image","olx seller id","quickr Id","Twitter handle/URL","telegram group name / user id","Facebook ID","Google ID","PAN Card","GST Number","CIN or Company Name","TIN","TAN","DIN","Address","UPI ID","handle"';
    const file = new Blob([fileData], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = '360Degree_sample.csv';
    element.click();
    document.body.appendChild(element);
  }

  return (
    <div>
      <p className='text-justify bg-white text-dark p-4'>
        The 360 Degree Search option enables user profile lookup across the
        public web, social media accounts, telegram, whatsapp groups, darkweb
        and other popular channels, using the attributes provided in the sample
        file here. For any concern, issues in accessing the functionality,
        please reach out to us on brandinfringement.team@mfilterit.com{' '}
        <a href='mailto:brandinfringement.team@mfilterit.com'>
          brandinfringement.team@mfilterit.com
        </a>
      </p>
      <Form onSubmit={handleUpload}>
        <div className='row mt-5 '>
          <div className='col-lg-3  col-md-3 col-sm-3 col-xs-12'>
            <button
              type='button'
              className='btn btn-primary font-weight-bolder font-size-sm '
              onClick={() => handleSampleDownload()}>
              Download
            </button>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex justify-content-right float-right'>
            <label htmlFor='file1'>Please choose file (csv/xlsx)</label>
            <Form.Group
              controlId='excelFile'
              className='mt-0  bg-white text-dark  p-2'>
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip id='tooltip-top'>
                    Please choose file (csv/xlsx)
                  </Tooltip>
                }>
                <Form.Control
                  id='excelFile'
                  required
                  type='file'
                  accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .csv'
                />
              </OverlayTrigger>
            </Form.Group>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12 d-flex justify-content-right float-right '>
            <label htmlFor='file2'>Please choose file (zip/image)</label>
            <Form.Group
              controlId='extraFile'
              className='mt-0  bg-white text-dark p-2'>
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip id='tooltip-top'>
                    Please choose file (zip/image)
                  </Tooltip>
                }>
                <Form.Control id='extraFile' type='file' />
              </OverlayTrigger>
            </Form.Group>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-12'>
            <button
              type='submit'
              className='btn btn-primary font-weight-bolder font-size-sm float-right '>
              Upload
            </button>
          </div>
        </div>
      </Form>

      <div className='card card-custom'>
        <Card>
          <CardBody className='pt-0 pb-0'>
            <div className='App'>
              <BootstrapTable
                bootstrap4
                keyField='id'
                data={issues}
                columns={columns}
                pagination={paginationFactory(options)}
                loading={loading}
                overlay={overlayFactory({
                  spinner: true,
                  styles: {
                    overlay: base => ({
                      ...base,
                      background: 'rgba(255, 255, 255, 0.7)',
                    }),
                    spinner: base => ({
                      ...base,
                      '& svg circle': {
                        stroke: 'rgba(0, 0, 0, 1)',
                      },
                    }),
                  },
                })}
                wrapperClasses='table-responsive'
                classes='table table-head-custom table-vertical-center overflow-hidden'
                bordered={false}
                noDataIndication={handleNoData}
                striped
                hover
                responsive
              />
            </div>
          </CardBody>
        </Card>
      </div>

      <Modal show={show} onHide={handleEditClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              subject: '',
              due_date: '',
              status: '',
              priority: '',
              assignee: '',
              description: '',
              notes: '',
            }}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}>
            {({ errors, touched }) => (
              <Form className='form form-label-right'>
                <div className='row'>
                  <div className='col-md-4'>
                    <Field
                      name='subject'
                      component={Input}
                      placeholder='Subject'
                      label='Subject'
                    />
                  </div>

                  <div className='col-md-4'>
                    <DatePickerField name='due_date' label='Due Date' />
                  </div>

                  <div className='col-md-4'>
                    <Select name='status' label='Status'>
                      <option value='new'>New</option>
                    </Select>
                  </div>

                  <div className='col-md-6'>
                    <Select name='priority' label='Priority'>
                      <option value='low'>Low</option>
                      <option value='normal'>Normal</option>
                      <option value='high'>High</option>
                      <option value='urgent'>Urgent</option>
                      <option value='immediate'>Immediate</option>
                    </Select>
                  </div>

                  <div className='col-md-6'>
                    <Select name='assignee' label='Assignee'>
                      <option value='mohitdayal'>Mohit Dayal</option>
                      <option value='giriprasadsanka'>Giri Prasad Sanka</option>
                      <option value='ankushsharma'>Ankush Sharma</option>
                      <option value='kiranar'>Kiran AR</option>
                      <option value='mfilteritteam'>mFilterIt Team</option>
                    </Select>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Description</label>
                      <Field
                        name='description'
                        as='textarea'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Notes</label>
                      <Field
                        name='notes'
                        as='textarea'
                        className='form-control'
                      />
                    </div>
                  </div>
                </div>
                <Modal.Footer className='pb-0 pr-0'>
                  <button
                    className='btn btn-light btn-elevate'
                    onClick={handleEditClose}>
                    Close
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary font-weight-bolder
                                        font-size-sm mr-3'>
                    Submit
                  </button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal show={viewshow} onHide={handleViewClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-4'>
              <h6>Subject</h6>
              <span>Take down</span>
            </div>
            <div className='col-md-4'>
              <h6>Priority</h6>
              <span>Immediate</span>
            </div>
            <div className='col-md-4'>
              <h6>Project</h6>
              <span>RBL Brand Infringement</span>
            </div>
            <div className='col-md-4'>
              <h6>Status</h6>
              <span>New</span>
            </div>
            <div className='col-md-4'>
              <h6>Start Date</h6>
              <span>2022-03-29</span>
            </div>
            <div className='col-md-4'>
              <h6>Due Date</h6>
              <span>2022-03-29</span>
            </div>

            <div className='col-md-12'>
              <h6>Description</h6>
              <span>
                Mentioned number in the given link does not belongs to RBL hence
                please take down the same.
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  const { threeSixty } = state;
  console.log('statestatestate', threeSixty);
  return {
    tickets: {
      loading: threeSixty?.loading ?? true,
      issues: threeSixty?.tickets?.issues ?? [],
    },
    upload: threeSixty?.upload,
  };
};

export default connect(mapStateToProps)(ThreeSixtyDegree);
