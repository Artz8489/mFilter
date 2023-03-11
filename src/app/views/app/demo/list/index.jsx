/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../src/_metronic/_helpers/index";


const data = [
    {
        "id": 1, "fname": "Shyam", "lname": "joe", "gender": "male",
        "email": "shyamjaiswal@gmail.com", "status": "active", "type": "Individual"
    },
    {
        "id": 2, "fname": "john", "lname": "micheal", "gender": "male",
        "email": "johnmicheal@gmail.com", "status": "inprogress", "type": "Bussiness"
    },
    {
        "id": 3, "fname": "david", "lname": "kumar", "gender": "male",
        "email": "david@gmail.com", "status": "rejected", "type": "Bussiness"
    },
    {
        "id": 4, "fname": "Canvas", "lname": "lenin", "gender": "male",
        "email": "canvaslennin@gmail.com", "status": "approved", "type": "Individual"
    },
    {
        "id": 5, "fname": "john", "lname": "micheal", "gender": "male",
        "email": "johnmicheal@gmail.com", "status": "inprogress", "type": "Bussiness"
    },
    {
        "id": 6, "fname": "david", "lname": "kumar", "gender": "male",
        "email": "david@gmail.com", "status": "rejected", "type": "Bussiness"
    },
    {
        "id": 7, "fname": "Canvas", "lname": "lenin", "gender": "male",
        "email": "canvaslennin@gmail.com", "status": "approved", "type": "Individual"
    },
    {
        "id": 8, "fname": "john", "lname": "micheal", "gender": "male",
        "email": "johnmicheal@gmail.com", "status": "inprogress", "type": "Bussiness"
    },
    {
        "id": 9, "fname": "david", "lname": "kumar", "gender": "male",
        "email": "david@gmail.com", "status": "rejected", "type": "Bussiness"
    },
    {
        "id": 10, "fname": "Canvas", "lname": "lenin", "gender": "male",
        "email": "canvaslennin@gmail.com", "status": "approved", "type": "Individual"
    },
    {
        "id": 11, "fname": "john", "lname": "micheal", "gender": "male",
        "email": "johnmicheal@gmail.com", "status": "inprogress", "type": "Bussiness"
    },
    {
        "id": 12, "fname": "david", "lname": "kumar", "gender": "male",
        "email": "david@gmail.com", "status": "rejected", "type": "Bussiness"
    },
    {
        "id": 13, "fname": "Canvas", "lname": "lenin", "gender": "male",
        "email": "canvaslennin@gmail.com", "status": "approved", "type": "Individual"
    }
];

const columns = [
    {
        dataField: "id",
        text: "ID",
        sort: true
    },
    {
        dataField: "fname",
        text: "First Name",
        sort: true,
    },
    {
        dataField: "lname",
        text: "Last Name",
        sort: true,
    },
    {
        dataField: "email",
        text: "Email",
    },
    {
        dataField: "gender",
        text: "Gender",
        sort: true,
    },
    {
        dataField: "status",
        text: "Status",
        formatter: (cellContent, row) => {
            return (
                <div>
                    {row.status === "active" &&
                        <span class="label label-lg label-light-success label-inline">{row.status}</span>
                    }
                    {row.status === "inprogress" &&
                        <span class="label label-lg label-light-warning label-inline">{row.status}</span>
                    }
                    {row.status === "rejected" &&
                        <span class="label label-lg label-light-danger label-inline">{row.status}</span>
                    }
                    {row.status === "approved" &&
                        <span class="label label-lg label-light-primary label-inline">{row.status}</span>
                    }
                </div>
            );
        }
    },
    {
        dataField: "type",
        text: "Type",
        formatter: (cellContent, row) => {
            return (
                <div>
                    {row.type === "Individual" ?
                        <span class="label label-dot label-primary mr-2"></span> :
                        <span class="label label-dot label-success mr-2"></span>
                    }
                    <span class="font-bold font-primary">{row.type}</span>
                </div>
            );
        }
    },
    {
        text: "Action",
        formatter: (cellContent, row) => {
            return (
                <div>
                    <Link className="btn btn-icon btn-light btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                                src={toAbsoluteUrl(
                                    "/media/svg/icons/Files/File.svg"
                                )}
                            ></SVG>
                        </span>
                    </Link>
                    <Link className="btn btn-icon btn-light btn-sm mx-3">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                                src={toAbsoluteUrl(
                                    "/media/svg/icons/Communication/Write.svg"
                                )}
                            ></SVG>
                        </span>
                    </Link>
                    <Link className="btn btn-icon btn-light btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-danger">
                            <SVG
                                src={toAbsoluteUrl(
                                    "/media/svg/icons/General/Trash.svg"
                                )}
                            ></SVG>
                        </span>
                    </Link>
                </div>
            );
        }
    }
];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total ml-3">
        Showing {from} to {to} of {size} Results
    </span>
);

const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    hideSelectAll: false,
};

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
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: '20', value: 20
    }] // A numeric array is also available. the purpose of above example is custom the text
};

export default function index() {
    return (
        <div className="card card-custom">
            <Card>
                <CardHeader title="Products list">
                    <CardHeaderToolbar>
                        <div className="card-toolbar">
                            <Link to="create" className="btn btn-primary font-weight-bolder
                     font-size-sm mr-3">
                                Create</Link>
                        </div>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div className="App">
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            data={data}
                            columns={columns}
                            pagination={paginationFactory(options)}
                            wrapperClasses="table-responsive"
                            classes="table table-head-custom table-vertical-center overflow-hidden"
                            bordered={false}
                            selectRow={selectRow}
                        />
                    </div>
                </CardBody>
            </Card>


        </div>
    )
}
