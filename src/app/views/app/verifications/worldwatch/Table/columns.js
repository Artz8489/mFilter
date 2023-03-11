import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const columns = [
  {
    dataField: 'id',
    text: 'ID',
    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'aliasNames',
    text: 'Name',
    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'countryId',
    text: 'Country ID',
    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'dataUrl',
    text: 'Data URL',
    style: {
      width: '15rem',
    },
    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'dob',
    text: 'Date Of Birth',
    style: { width: '100px' },
    headerStyle: {
      minWidth: '50px',
      width: '100px',
    },
  },
  {
    dataField: 'excerpts',
    text: 'Excrepts',

    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
    formatter: (cellContent, row) => {
      return (
        <div className='text-ellipsis'>
          <OverlayTrigger
            placement='left'
            overlay={<Tooltip id={`tooltip-left`}>{row.excerpts}</Tooltip>}>
            <span>{row.excerpts}</span>
          </OverlayTrigger>
        </div>
      );
    },
  },
  {
    dataField: 'gender',
    text: 'Gender',

    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'resultTitle',
    text: 'Title State',
    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
    formatter: (cellContent, row) => {
      return (
        <div className='text-ellipsis'>
          <OverlayTrigger
            placement='left'
            overlay={<Tooltip id={`tooltip-left`}>{row.resultTitle}</Tooltip>}>
            <span>{row.resultTitle}</span>
          </OverlayTrigger>
        </div>
      );
    },
  },
  {
    dataField: 'sourceAgency',
    text: 'Source',

    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
  {
    dataField: 'sourceEntity',
    text: 'Source Entity',

    headerStyle: {
      minWidth: '50px',
      width: '50px',
    },
  },
];

export default columns;
