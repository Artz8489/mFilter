/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import overlayFactory from 'react-bootstrap-table2-overlay';
import { Card, CardBody } from '../../../../_metronic/_partials/controls';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { GetDigitalFootPrint } from '../../../../redux/actions/DigitalFootPrintActions';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

const columns = [
  {
    dataField: 'id',
    text: 'ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'case_id',
    text: 'Case ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'contact',
    text: 'Contact No.',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '140px',
      width: '10px',
    },
  },
  {
    dataField: 'contact_details',
    text: 'Contact Details',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '140px',
      width: '10px',
    },
  },
  {
    dataField: 'Email',
    text: 'email',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'upi_id',
    text: 'UPI ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'true_caller_name',
    text: 'Truecaller Name',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'true_caller_status',
    text: 'Truecaller Status',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'telecom_operator',
    text: 'Telecom Opertor',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'telecom_circle',
    text: 'Telecom Circle',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'payment_gateway',
    text: 'Payment Gateway',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'fb_id',
    text: 'facebook_id',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'tw_id',
    text: 'Twitter ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'lnkd_id',
    text: 'LinkedIn ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'insta_id',
    text: 'Instagram ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pinteres_id',
    text: 'Pintrest ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'telegram_id',
    text: 'Telegram ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'whatsap_id',
    text: 'Whats App ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'others_id',
    text: 'Other ID',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
    formatter: (cellContent, row) => {
      return (
        <OverlayTrigger
          placement='left'
          overlay={<Tooltip id='tooltip-left'>{row.others_id}</Tooltip>}>
          <span>{cellContent.slice(0, 20) + '...'}</span>
        </OverlayTrigger>
      );
    },
  },
  {
    dataField: 'account_linkd',
    text: 'Account Linked',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '170px',
      width: '10px',
    },
  },
  {
    dataField: 'reported_for',
    text: 'Reported for',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand_status',
    text: 'Brand Status',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand1',
    text: 'Brand 1',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand2',
    text: 'Brand 2',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand3',
    text: 'Brand 3',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand4',
    text: 'Brand 1',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'reported_date',
    text: 'Reported Date',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '180px',
      width: '10px',
    },
  },
  {
    dataField: 'category',
    text: 'Category',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'location',
    text: 'Location',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'channel_name',
    text: 'Channel',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'ad_description',
    text: 'Ad Description',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '158px',
      width: '10px',
    },
  },
  {
    dataField: 'sub_publisher',
    text: 'Sub Publisher',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'complaint_against',
    text: 'Complaint Against',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pdf_reports',
    text: 'PDF reports',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'brand',
    text: 'Brand',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'inserted_date',
    text: 'Inserted Date',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'case_reports',
    text: 'Case Reports',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'package_name',
    text: 'Package Name',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_creditcard',
    text: 'PG Credit Card',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_bankaccount',
    text: 'PG Bank Account',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_amazonpay',
    text: 'PG Amazon Pay',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_googlepay',
    text: 'PG Google Pay',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_paytm',
    text: 'PG PayTm',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'pg_phonepay',
    text: 'PG PhonePe',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
  {
    dataField: 'othersplatform_olx_quikr',
    text: 'Other Platform',
    style: {
      width: '10px',
    },
    headerStyle: {
      minWidth: '100px',
      width: '10px',
    },
  },
];

const customTotal = (from, to, size) => (
  <span className='react-bootstrap-table-pagination-total ml-3'>
    Showing {from} to {to} of {size} Results
  </span>
);

const options = {
  paginationSize: 4,
  alwaysShowAllBtns: true, // Always show next and previous button
  withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: '5',
      value: 5,
    },
    {
      text: '10',
      value: 10,
    },
    {
      text: '20',
      value: 20,
    },
  ], // A numeric array is also available. the purpose of above example is custom the text
};

function DigitalFootPrint({ digitalFootPrint }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDigitalFootPrint());
  }, []);

  return (
    <ToolkitProvider
      keyField='id'
      data={digitalFootPrint?.digitalFootPrint?.data ?? []}
      columns={columns}
      search>
      {bootstrapToolkitProps => (
        <div className='card card-custom'>
          <Card>
            <Row style={{ marginTop: '14px', marginBottom: '-25px' }}>
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className='p-5'>
                <div class='input-group'>
                  <MySearchBar {...bootstrapToolkitProps.searchProps} />
                </div>
              </Col>
              <Col lg={7} xl={7} />
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={2}
                xl={2}
                className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary font-weight-bolder font-size'>
                  <a
                    href='https://infringementapi.mfilterit.net/api/digitalfootprint/download'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      margin: 'auto',
                    }}>
                    Download
                  </a>
                </button>
              </Col>
            </Row>
            <CardBody>
              <div className='App'>
                <BootstrapTable
                  {...bootstrapToolkitProps.baseProps}
                  bootstrap4
                  loading={digitalFootPrint.loading}
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
                  data={digitalFootPrint?.digitalFootPrint?.data ?? []}
                  columns={columns}
                  pagination={paginationFactory(options)}
                  wrapperClasses='table-responsive'
                  classes='table table-head-custom table-vertical-center overflow-hidden'
                  bordered={false}
                  noDataIndication={'no data'}
                />
                {/* <BootstrapTable
              bootstrap4
              keyField='id'
              loading={digitalFootPrint.loading}
              data={digitalFootPrint?.digitalFootPrint?.data ?? []}
              columns={columns}
              pagination={paginationFactory(options)}
              wrapperClasses='table-responsive'
              classes='table table-head-custom table-vertical-center overflow-hidden'
              bordered={false}
              noDataIndication={'no data'}
            /> */}
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </ToolkitProvider>
  );
}

const mapStateToProps = state => {
  const { digitalFootPrint } = state;
  return { digitalFootPrint };
};

export default connect(mapStateToProps)(DigitalFootPrint);

const MySearchBar = ({ onSearch }) => {
  let input;
  const handleClick = () => onSearch(input.value);
  return (
    <>
      <input
        class='form-control border-secondary py-2'
        type='search'
        placeholder='Search...'
        ref={n => (input = n)}
      />
      <div class='input-group-append'>
        <button
          class='btn btn-primary font-weight-bolder font-size'
          type='button'
          onClick={handleClick}>
          <i class='fa fa-search'></i>
        </button>
      </div>
    </>
  );
};
