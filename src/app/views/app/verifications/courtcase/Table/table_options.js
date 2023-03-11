import React from 'react';
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
  paginationTotalRenderer: (from, to, size) => (
    <span className='react-bootstrap-table-pagination-total ml-3'>
      Showing {from} to {to} of {size} Results
    </span>
  ),
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: '10',
      value: 10,
    },
    {
      text: '20',
      value: 20,
    },
    {
      text: '30',
      value: 30,
    },
    {
      text: '40',
      value: 40,
    },
    {
      text: '50',
      value: 50,
    },
    {
      text: '100',
      value: 100,
    },
  ], // A numeric array is also available. the purpose of above example is custom the text
};

export default options;
