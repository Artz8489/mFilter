import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';
import options from './table_options.js';
import columns from './columns';
import './index.css';

export default function WorldWatchTable({ data = [] }) {
  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField='mfe_id'
        data={data}
        columns={columns}
        pagination={paginationFactory(options)}
        wrapperClasses='table-responsive'
        classes='table table-vertical-center header-class'
        bordered={false}
        condensed
        responsive
        overlay={overlayFactory({ spinner: true, background: 'black' })}
        headerClasses='header-class'
        striped
        hover
      />
    </div>
  );
}
