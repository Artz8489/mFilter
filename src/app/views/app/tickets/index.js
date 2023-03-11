import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  Input,
  Select,
} from "../../../../_metronic/_partials/controls";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../src/_metronic/_helpers/index";
import {
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {
  FetchTicketIncidents,
  FetchTicketSearchIncidents,
  FetchTicketPriorityIncidents,
  FetchTicketAssigneeIncidents,
  FetchTicketStatusIncidents,
  UpdateTickets,
  FetchTicket,
} from "../../../../redux/actions/TicketAction";
import { useSelector, useDispatch } from "react-redux";
import TicketModel from "./TicketModel";
import SelectField from "../../../../_metronic/_partials/controls/forms/SelectField";
import * as yup from "yup";
import "./ticket.css";
import SearchModel from "./SearchModel";
import _ from "lodash";
import moment from "moment";
import DatePicker from "react-datepicker";
import ReactPaginate from "react-paginate";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../../utils/helpers";

import { AUTH_DATA } from "../../../utils/const";
const { SearchBar } = Search;

const ClearButton = (props) => {
  const handleClick = () => {
    props.onSearch("");
  };
  return (
    <button
      className="btn btn-primary font-weight-bolder font-size-sm mr-3"
      onClick={handleClick}
    >
      Clear
    </button>
  );
};
const initialValues = {
  packagename: "",
  packagetitle: "",
  role: "",
  project: "",
  assignee: "",
  due_date: "",
};

const schema = yup.object().shape({
  packagename: yup.string().required(),
  packagetitle: yup.string().required(),
  role: yup.string().required(),
  project: yup.string().required(),
  assignee: yup.string().required(),
  due_date: yup.string().required(),
});

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing {from} to {to} of {size} Results
  </span>
);



export default function TicketsList(props) {
  const dispatch = useDispatch();
  const incident_data = useSelector((state) => state.tickets.incident_data);

  const [ticketsData, setTicketData] = useState([]);
  const [show, setEditShow] = useState(false);
  const [viewshow, setViewtShow] = useState(false);
  const [searchshow, setSearchShow] = useState(false);
  const [singleRow, setSinglerow] = useState(null);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [ticketviewdata, setTicketviewdata] = useState(null);
  const [ticks, setTicks] = useState("");
  const [ticketvalue, setTicketValue] = useState(" ");

  const [currentEditRow, setCurrentEditRow] = useState(null);

  const [formPriority, setFormPriority] = useState(null);
  const [formProject, setFormProject] = useState(null);
  const [formStatus, setFormStatus] = useState(null);
  const [formAssignee, setFormAssignee] = useState(null);
  const [formdata, setformdata] = useState(" ");
  const [formDate, setFormDate] = useState(new Date());
  const [pageNo, setPageNo] = useState(0);
  const [perPageSize, setperPageSize] = useState('10');
  const [filters, setFilters] = useState({});

  const [limit, setLimit] = useState(10);
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [hasAccess,setHasAccess] = useState(false);
  
  const getauthvalue = JSON.parse(
    getLocalStorage(AUTH_DATA.AUTH)
  );
  const hasProject_id = getauthvalue && getauthvalue?.redmine !== undefined  &&  getauthvalue?.redmine?.project_id !== undefined ? true : false ;
 
  const data = {
    package_name: "in.itcstore",
    fromDate: "2020-01-10",
    toDate: "2022-01-10",
    country: "all",
    category: "all",
    publisher: "all",
    channel: "all",
    brand: "all",
    status: "all",
    priority: "all",
  };

  const handleViewClose = () => setViewtShow(false);
  const handleViewShow = () => setViewtShow(true);
  const handleSearchClose = () => setSearchShow(false);
  const handleSearchShow = () => setSearchShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (e, row) => {
    setCurrentEditRow(row);
    setEditShow(true);
  };
  const formUpdate = () => {};
  const paginationParamsDefault = {
    offset: "0",
    limit: "10",

  };
  useEffect(() => {
if(hasAccess){

    dispatch(FetchTicketPriorityIncidents());
    dispatch(FetchTicketAssigneeIncidents());
    dispatch(FetchTicketStatusIncidents());
}
  }, [show]);

  useEffect(() => {
    if (currentEditRow?.due_date) {
      setFormDate(new Date(currentEditRow?.due_date));
    }
  }, [currentEditRow?.due_date]);

  useEffect(() => {
    if (hasProject_id) {
      setHasAccess(hasProject_id);
    }
  }, []);

  const search_data = useSelector(
    (state) => state.tickets.search_incident_data.issue
  );
  const updateResponse = useSelector((state) => state.tickets.package_name);
  const incidentloading = useSelector((state) => state.tickets.incidentloading);
  const openPopup = (e, row) => {
    e.preventDefault();
    setViewtShow(true);
    setSinglerow(row);
  };
  async function searchPopup(e, row) {
    e.preventDefault();
    await dispatch(FetchTicketSearchIncidents(ticketvalue));
    setSearchShow(true);
    // setSinglerow(GetSearch[0]);s
  }
  // changes paginate
useEffect(()=>{
  
  const paginationParams = {
 
    // offset: pageNo * perPageSize,
    offset: (activePageNumber -  1 ) * limit ,
    // offset: (activePageNumber) * limit ,
    limit: limit,
    // offset: pageNo * perPageSize,
    // limit: perPageSize,
  };

  dispatch(FetchTicketIncidents(paginationParams));

},[activePageNumber,limit])

  const columns = [
    {
      dataField: "id",
      text: "Ticket ID",
      sort: true,
      style: {
        width: "8%",
      },
      formatter: (cellContent, row) => {
        return (
          <div>
            <a
              style={{ color: "#3699ff" }}
              onClick={(e) => handleEditShow(e, row)}
            >
              {row?.id}
            </a>
            {/* {row.id} */}
          </div>
        );
      },
    },
    {
      dataField: "subject",
      text: "subject",

      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis-50">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={`tooltip-top`}>{row?.subject}</Tooltip>}
            >
              <span>{row?.subject}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: "description",
      text: "Description",
      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis">
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id={`tooltip-left`}>{row?.description}</Tooltip>
              }
            >
              <span>{row?.description}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: "priority.name",
      text: "Priority",

      sort: true,
      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis-50">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>{row?.priority?.name}</Tooltip>
              }
            >
              {/* <span>{row.priority.name}</span> */}
              <span>{row?.priority?.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: "status.name",
      text: "Status",
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <div>
            {row?.status?.name === "New" ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>{row?.status?.name}</Tooltip>
                }
              >
                <span class="label label-lg label-light-success label-inline">
                  {row?.status?.name}
                </span>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>{row?.status?.name}</Tooltip>
                }
              >
                <span class="label label-lg label-light-warning label-inline">
                  {row?.status?.name}
                </span>
              </OverlayTrigger>
            )}
          </div>
        );
      },
    },
    {
      dataField: "assigned_to.name",
      text: "Assignee",
      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis-50">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  {/* {row.assigned_to.name}     */}
                  {row?.assigned_to && row.assigned_to?.name}
                </Tooltip>
              }
            >
              <span>{row?.assigned_to && row?.assigned_to?.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: "author.name",
      text: "Author",
      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis-50">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>{row?.author?.name}</Tooltip>
              }
            >
              <span>{row?.author?.name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: "start_date",
      text: "Start Date",
      sort: true,
      style: {
        width: "12%",
      },
    },
    {
      dataField: "due_date",
      text: "Due Date",
      sort: true,
      style: {
        width: "10%",
      },
    },
    {
      dataField: "attachments",
      text: "Attach",
      formatter: (cellContent, row) => {
        return (
          <div className="text-ellipsis">
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {/* {row.attachments} */}
                  {!_.isEmpty(row && row?.attachments)
                    ? row?.attachments.map((item, i) => {
                        return (
                          <>
                            <div>{item && item.content_url}</div>
                        
                          </>
                        );
                      })
                    : null}
                </Tooltip>
              }
            >
              <div>
                {!_.isEmpty(row && row?.attachments)
                  ? row.attachments.map((item, i) => {
                      return (
                        <a
                          title={item.filename}
                          target={item.content_url}
                          href={item.content_url}
                        >
                          <span className="svg-icon svg-icon-md svg-icon-primary">
                            <>
                              <SVG
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/General/link.svg"
                                )}
                              >
                                {" "}
                                <span>{item.filename}</span>
                              </SVG>
                            </>
                          </span>
                        </a>
                      );
                    })
                  : null}
              </div>
            </OverlayTrigger>
          </div>
        );
      },
    },

    {
      dataField: "Edit / View",
      text: "Edit / View",
      style: {
        width: "10%",
      },
      formatter: (cellContent, row) => {
        return (
          <>
            
            <button
              type="button"
              onClick={(e) => handleEditShow(e, row)}
              class="btn btn-outline-secondary btn-icon btn btn-icon btn-light"
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG
                  pointer-events="none"
                  src={toAbsoluteUrl(
                    "/media/svg/icons/General/Write.svg"
                  )}
                ></SVG>
              </span>
            </button>
            &nbsp; &nbsp;
            <button
              type="button"
              onClick={(e) => openPopup(e, row)}
              class="btn btn-outline-secondary btn-icon btn btn-icon btn-light"
            >
              <span className="svg-icon svg-icon-md svg-icon-primary ">
                <SVG
                  pointer-events="none"
                  src={toAbsoluteUrl("/media/svg/icons/General/Eye.svg")}
                ></SVG>
              </span>
            </button>
            {/* </div> */}
            {/* </div> */}
          </>
        );
      },
    },
  ];

  const roles = [];

  const project = [];

  const status = [];

  const date = [];

  const role_data = useSelector(
    (state) => state?.tickets?.priority__incident_data
  );
  if (role_data != "undefined") {
    role_data &&
      role_data.map((role_data, i) =>
        roles.push({ value: role_data.id, label: role_data.name })
      );
  }

  const status_data = useSelector(
    (state) => state.tickets.status__incident_data
  );
  if (status_data != "undefined" || status_data != null) {
    status_data &&
      status_data.map((status_data, i) =>
        status.push({ value: status_data.id, label: status_data.name })
      );
  }

  const assign_data = useSelector(
    (state) => state.tickets.assignee__incident_data
  );

  const assignee = [];
  if (assign_data != "undefined" || assign_data != null) {
    const groupId =
      assign_data &&
      assign_data.map((item) => {
        return (
          item && item.group && item.group.id && item.roles && item.roles.id
        );
      });
    const groupname =
      assign_data &&
      assign_data.map((item) => {
        return (
          item && item.group && item.group.name && item.roles && item.roles.id
        );
      });

    assign_data &&
      assign_data.map((assign_data, i) =>
        assignee.push({ value: groupId, label: groupname })
      );
  }

  const totalPages =
  incident_data  && incident_data?.total_count
    ? Math.ceil(parseInt(incident_data && incident_data?.total_count) / limit)
    : 1;

    const handlePageClick = (event) => {
      const pageNumber = event.selected + 1;
      const paginationParams = {
        limit: limit,
        page: pageNumber,
      };
      const pickByParams = _.pickBy(paginationParams);
      setActivePageNumber(pageNumber);
      
    };
 
    const handleRecordPerPage = (e) => {
      const { value } = e.target;
      setLimit(value);
      setActivePageNumber(1)
      
      const params = {
        limit: value,
        offset: (activePageNumber -  1 ) * limit,
      };
      const pickByParams = _.pickBy(params);
      // dispatch(FetchTicketIncidents(params));

    };

  const handleTableChange = (type, newState) => {
    // this.setState({
    //   filters: newState.filters
    // });

    // newState.filters = newState.data[0]

  

    const getValue = _.find(newState.data, {id:  Number(newState.searchText)})


 

  };

const total_records_size = incident_data?.total_count/limit ;

  return ( hasAccess !== false ?
    <>
      <div className="card  card-custom">
        <Card>
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={incident_data?.issues}
            columns={columns}
            //  pagination={paginationFactory(options)}

                        filter={filterFactory()}
                        

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
                {// incident_data.length === 0 ?
                !incidentloading ? (
                  !_.isEmpty(incident_data && incident_data?.issues) ? (
                    <div className="App">
                      <SearchBar
                        {...props?.searchProps}
                        style={{
                          width: "300px",
                          height: "39px",
                          marginTop: "10px",
                        }}
                      />
                      <ClearButton {...props?.searchProps} />

                      <BootstrapTable
                        bootstrap4
                        keyField="id"
                         data={incident_data?.issues}
                        columns={columns}
                        // pagination={paginationFactory(options)}
                        {...props?.baseProps}
                        filter={filterFactory()}
                        //  remote={ { pagination: true, filter: true, sort: false ,search:true} }
                        noDataIndication="no records found"
                        striped
                        hover
                        condensed
                        
                      />

<div className="form-group row mb-4 mt-6">
            <div className="col-lg-12 mb-4 align-items-end d-flex" style={{paddingLeft :'0px'}}>
              <div className="col-lg-12">
                <ReactPaginate
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  forcePage={activePageNumber - 1}
                  pageCount={totalPages}
                  previousLabel="< Prev"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
                   <div className="col-md-3" style={{display:'inline',paddingLeft:'0px'}}>
                  <select
                    className="btn btn-default btn-secondary dropdown-toggle"
                    data-control="select"
                    data-placeholder="Select an option"
                    data-allow-clear="true"
                    onChange={(e) => handleRecordPerPage(e)}
                    name='page_size'
                    value={limit || ''}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <label className="col-form-label text-lg-start ml-5">
                Showing {((activePageNumber -1 )* limit) + 1 } to {((activePageNumber -1) * limit + (+incident_data?.issues.length)) } of {incident_data?.total_count} Results
              
                </label>

                </div>
                 
      
              {/* <div className="col-md-7 d-flex">
                <label className="col-form-label text-lg-start">
                Showing {((activePageNumber -1 )* limit) + 1 } to {((activePageNumber -1) * limit + (+incident_data?.issues.length)) } of {incident_data?.total_count} Results
              
                </label>
             
              </div> */}
  
              </div>
            </div>
          </div>
       
                    </div>
                  ) : (
                    <p class="text-center p-5 mt-5">No records found</p>
                  )
                ) : (
                  <div className="text-center p-5 mt-5">
                    {/* <Spinner animation="border" variant="warning" /> */}
                    <div
                      className="spinner-border text-primary m-5 "
                      role="status"
                    />
                  </div>
                )}
              </CardBody>
            )}
          </ToolkitProvider>
        </Card>
      </div>

      <TicketModel
        show={viewshow}
        handleClose={() => handleViewClose(false)}
        singleRow={singleRow}
      />
      <SearchModel
        show={searchshow}
        handleClose={() => handleSearchClose(false)}
        singleRow={search_data}
      />
      <Modal show={show} onHide={handleEditClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              subject: currentEditRow?.subject,
              due_date: currentEditRow?.due_date,
              priority: currentEditRow?.priority.id,
              project: currentEditRow?.project.id,
              status: currentEditRow?.status.id,
              // "assignee":currentEditRow?.assign_to.id,
              description: currentEditRow?.description,
              notes: null,
            }}
            onSubmit={(values, { resetForm }) => {
              let formData = {
                issue: {
                  project_id:
                    formProject !== null
                      ? formProject
                      : currentEditRow?.project.id,
                  subject: values.subject,
                  description: values.description,
                  priority_id:
                    formPriority !== null
                      ? formPriority
                      : currentEditRow?.priority.id,
                  status_id:
                    formStatus !== null
                      ? formStatus
                      : currentEditRow?.status.id,
                  assigned_to_id:
                    formAssignee !== null
                      ? formAssignee
                      : currentEditRow?.assigned_to_id,
                  // "due_date": formDate !== null ? formDate : currentEditRow?.due_date
                  due_date:
                    formDate !== null
                      ? moment(formDate).format("YYYY-MM-DD")
                      : null,
                },
              };
              dispatch(
                UpdateTickets(
                  formData,
                  currentEditRow.id,
                  currentEditRow.status,
                  currentEditRow.due_date
                )
              );
              resetForm();
              setEditShow(false);
            }}
          >
            {({ values, setFieldValue, handleBlur }) => (
              <Form className="form form-label-right">
                <div className="row">
                  <div className="col-md-4">
                    <Field
                      name="subject"
                      component={Input}
                      placeholder="Subject"
                      label="Subject"
                      readOnly
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Due Date</label>
                    <DatePicker
                      onChange={(date) => setFormDate(date)}
                      selected={formDate}
                      name="due_date"
                      label="Due Date"
                      formDate
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="d-block">Priority</label>
                    <select
                      className="ticketmodel"
                      name="priority"
                      onChange={(e) => {
                        setFormPriority(e.target.value);
                      }}
                    >
                      {roles &&
                        roles.map((role, i) => (
                          <option
                            key={"OP" + i}
                            value={role.value}
                            selected={
                              currentEditRow &&
                              currentEditRow.priority?.id === role.value
                                ? true
                                : false
                            }
                          >
                            {role.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="d-block">Status</label>
                    <select
                      className="ticketmodel"
                      name="status"
                      onChange={(e) => {
                        setFormStatus(e.target.value);
                      }}
                    >
                      {status &&
                        status.map((status, i) => (
                          <option
                            key={"PO" + i}
                            value={status.value}
                            selected={
                              currentEditRow &&
                              currentEditRow.status?.id === status.value
                                ? true
                                : false
                            }
                          >
                            {status.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="d-block">Assignee</label>
                    <select
                      className="ticketmodel"
                      name="assignee"
                      onChange={(e) => {
                        setFormAssignee(e.target.value);
                      }}
                    >
                      {/* {assignee && assignee.map((asssign, i) => ( */}
                      {assign_data &&
                        assign_data.map((asssign, i) => (
                          <option
                            key={"AS" + i}
                            value={
                              asssign?.group && asssign?.group?.id
                                ? asssign?.group?.id
                                : asssign?.user && asssign?.user?.id
                            }
                            selected={
                              currentEditRow &&
                              currentEditRow?.assigned_to?.id ===
                                asssign?.user?.id
                                ? true
                                : false
                            }
                          >
                            {asssign.group && asssign.group.name
                              ? asssign.group.name
                              : asssign.user && asssign.user.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Description</label>
                      <Field
                        name="description"
                        as="textarea"
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group h-90">
                      <label>Notes</label>
                      <input
                        style={{ height: "58px" }}
                        name="notes"
                        as="textarea"
                        className="form-control"
                        value={formdata}
                        onChange={(e) => setformdata(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <Modal.Footer className="pb-0 pr-0">
                  <button
                    className="btn btn-light btn-elevate"
                    onClick={handleEditClose}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bolder
                                        font-size-sm mr-3"
                  >
                    Submit
                  </button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
    :    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <h2>Ticketing system is not configured. Contact administrator</h2>
  </div>
  );
}
