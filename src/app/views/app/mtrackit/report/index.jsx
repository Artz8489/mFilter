
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  Input,
  Select,
  DatePickerField,
} from "../../../../../_metronic/_partials/controls";
import { Link } from 'react-router-dom'


const { SearchBar } = Search;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
  };
  return (
    <Button
      onClick={handleClick}
    >
      Clear
    </Button>
  );
};
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
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
  prePageText: <i class="ki ki-bold-arrow-back icon-xs"></i>,
  nextPageText: <i class="ki ki-bold-arrow-next icon-xs"></i>,
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [
    { text: '10', value: 10 },
    { text: '20', value: 20 },
    { text: '30', value: 30 },
    { text: '40', value: 40 },
    { text: '50', value: 50 },
    { text: '100', value: 100 },
  ]
};
const Reportrack = (props) => {

  const Lists = [
    {
      id: "1",
      list: "demo_campaign_01",
    },
    {
      id: "2",
      list: "demo_campaign_02",
    },
    {
      id: "3",
      list: "demo_campaign_03",
    },
    {
        id: "4",
        list: "demo_campaign_01",
      },
      {
        id: "5",
        list: "demo_campaign_02",
      },
      {
        id: "6",
        list: "demo_campaign_03",
      },
      {
        id: "7",
        list: "demo_campaign_01",
      },
      {
        id: "8",
        list: "demo_campaign_02",
      },
      {
        id: "9",
        list: "demo_campaign_03",
      },
      {
        id: "10",
        list: "demo_campaign_01",
      },
      {
        id: "11",
        list: "demo_campaign_02",
      },
      {
        id: "12",
        list: "demo_campaign_03",
      },
      {
        id: "13",
        list: "demo_campaign_01",
      },
      {
        id: "14",
        list: "demo_campaign_02",
      },
      {
        id: "15",
        list: "demo_campaign_03",
      },

  ];

  const columns = [
    {
      dataField: "list",
      text: "Package Name",
      sort: true,
    },
    {
        dataField: "list",
        text: "From Date",
        sort: true,
      },
      {
        dataField: "list",
        text: "To Date",
        sort: true,
      },{
        dataField: "list",
        text: "Landing Pages",
        sort: true,
      },
      {
        dataField: "list",
        text: "Campaigns",
        sort: true,
      },
      {
        dataField: "list",
        text: "Publishers",
        sort: true,
      },
      {
        dataField: "list",
        text: "Status",
        sort: true,
      },
  ];
  return (
    <>
      <div className="card  card-custom">
        <Card>
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={Lists}
            columns={columns}
            pagination={paginationFactory(options)}
            wrapperClasses="table-responsive"
            classes="table table-vertical-center header-class"
            bordered={false}
            condensed
            responsive
            headerClasses="header-class"
            hover
            search
          >
            {(props) => (
              <CardBody className="pt-0 pb-0">
                {
                  <div className="App">
                    <SearchBar
                      {...props.searchProps}
                      style={{
                        width: "300px",
                        height: "39px",
                        marginTop: "10px",
                      }}
                    />
                    <ClearButton {...props.searchProps}
                    />
                    
                      <Button className={"ml-2"}>
                         Generate Report
                      </Button>


                    <BootstrapTable
                      {...props.baseProps}
                      filter={filterFactory()}
                      noDataIndication="There is no solution"
                      striped
                      hover
                      condensed
                    />
                  </div>
                }
              </CardBody>
            )}
          </ToolkitProvider>
        </Card>
      </div>
    </>
  );
};
export default Reportrack;
