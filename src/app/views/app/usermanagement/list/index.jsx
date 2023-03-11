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
import { InputGroup, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";


const data = [
    {
        "id": 1, "package_name": "in.itcstore", "menu": "Incident Dashboard,Incident Report,Tickets",
        "filter": "channel,category,publisher,country,brand,priority",
    },
    {
        "id": 2, "package_name": "itc-wd-app", "menu": "Incident Dashboard,Incident Report ,Tickets,Add User,Add Package,User Package Mapping,User Management,Verification,Address,Bank Verification,Black List Email,Black List,Company Search,Court Cases,Data Check,Domain Detail,Driving License,Email,Location,Number Data Check,Pan Card Check,Pan Gst Check,Passport Check,Phone,Policy,Vehicle Detail,World Watch Streeming,Bulk Verification",
        "filter": "web_campaign,web_channel,web_creative_id,web_system_domain,web_placement_id,web_publisher_id,web_fraud_category,web_fraud_sub_category,web_placement_type,web_intermediate_seller,web_adstxt_exists",
    },
];

const columns = [
    {
        dataField: "package_name",
        text: "Package Name",
        style: {
             
            width: '10px'
        },
        headerStyle: {
            // backgroundColor: 'green',
            minWidth:'200px',
            width: '100px'
         }
    },
    
    {
        dataField: "menu",
        text: "Menu",
        style: {
             
            width: '10px'
        },
        headerStyle: {
            // backgroundColor: 'green',
            minWidth:'100px',
            width: '100px'
         },
         formatter: (cellContent, row) => {
            return (
                <div className="text-ellipsis-250" style={{width:'250px'}}>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {row.menu}
                            </Tooltip>
                        }
                    >
                        <span>{row.menu}</span>
                    </OverlayTrigger>
                </div>
            );
        }
    },
    {
        dataField: "filter",
        text: "Subject",
        style: {
             
            width: '10px'
        },  headerStyle: {
            // backgroundColor: 'green',
            minWidth:'250px',
            width: '100px'
         },
        
        formatter: (cellContent, row) => {
            return (
                <div className="text-ellipsis-50" style={{width:'200px'}}>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {row.filter}
                            </Tooltip>
                        }
                    >
                        <span>{row.filter}</span>
                    </OverlayTrigger>
                </div>
            );
        }
    },
    {
        text: "Action",
        
        formatter: (cellContent, row) => {
            return (
                <div>
                    <Link to="edit" className="btn btn-icon btn-light btn-sm mx-3">
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
                <CardHeader title="User Package Mapping">
                    <CardHeaderToolbar>
                        <div className="card-toolbar">
                            <Link to="/package-user" className="btn btn-primary font-weight-bolder
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
                        />
                    </div>
                </CardBody>
            </Card>


        </div>
    )
}
