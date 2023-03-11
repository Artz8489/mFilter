import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  Input,
  Select,
} from '../../../../../src/_metronic/_partials/controls';
import filterFactory, {
  selectFilter,
  textFilter,
} from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import { FILTER_CATEGORY_SELECTED_VALUE } from '../../../utils/const';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../../src/_metronic/_helpers/index';
import {
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';

import overlayFactory from 'react-bootstrap-table2-overlay';
import './index.css';

import { Row, Col, Button } from 'react-bootstrap';
import {
  FetchReport,
  PostTicket,
  FetchTicket,
  FetchTicketCustomer,
  CloseTicket,
  UpdatePriorityStatusTicket,
  PostMultipleTicket,
} from '../../../../redux/actions/ReportActions';
import {
  FetchTotalIncidents,
  FetchIncidentVolumes,
  FetchActivecasesbychannel,
  FetchSubchannel,
  FetchToptenLocation,
  FetchCategorlevelcount,
  FetchPublisherlevelcount,
} from '../../../../redux/actions/DashboardActions';
import { DownloadReport } from '../../../../redux/actions/DownloadAction';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {
  FetchTicketIncidents,
  FetchTicketSearchIncidents,
  FetchTicketPriorityIncidents,
  FetchTicketAssigneeIncidents,
  FetchTicketStatusIncidents,
  UpdateTickets,
} from '../../../../redux/actions/TicketAction';
import { SelectField } from '../../../../_metronic/_partials/controls/forms/SelectField';
import _, { multiply, set } from 'lodash';
import TicketsList from '../tickets';
import FilterDrawer from '../shared-componets/filterdrawer';
import TicketModel from './TicketModel';
import SearchTicket from './SearchTicket';
import AsyncSelect from 'react-select/async';
import * as constant from '../../../../redux/constants/CommonConstants';
import { DOWNLOAD_INIT_CLEAR } from '../../../../redux/constants/DownloadConstants';
import { UPDATE_PRIORITY_STATUS_CLEAR,CREATE_TICKET_CLEAR,CREATE_MULTIPLE_TICKET_CLEAR,ClOSE_TICKET_INIT_CLEAR } from '../../../../redux/constants/ReportConstants';
import { REGEX } from '../../../../app/utils/const';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import { id } from 'date-fns/locale';
import MultiSelectField from '../../../../_metronic/_partials/controls/forms/MultiSelect';
import ErrorModel from './ErrorModel';
import ReactPaginate from 'react-paginate';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../../../utils/helpers';

import { AUTH_DATA } from '../../../utils/const';
import toast, { Toaster } from 'react-hot-toast';

const { SearchBar } = Search;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch('');
  };
  return (
    <button
      className='btn btn-primary font-weight-bolder font-size-sm mr-3 custom-button'
      onClick={handleClick}
      disabled={!props?.searchText?.length != 0}>
      Clear
    </button>
  );
};

const Reports = ({ setGlobalPackageName }) => {
  const didMount = React.useRef(false);
  const style = {
    padding: '2.5px',
    width: '100px',
    border: '1px solid #E4E6EF',
  };
  const date = new Date();
  const [channels, setChannels] = useState('all');
  const [categories, setCategories] = useState('all');
  const [publishers, setPublishers] = useState('all');
  const [countries, setCountries] = useState('all');
  const [brands, setBrands] = useState('all');
  const [priorities, setPriorities] = useState('all');
  const [filterStatus, setfilterStatus] = useState('all');

  const [show, setEditShow] = useState(false);
  const [create, setCreateShow] = useState(false);
  const [createMultiple, setCreateMultipleShow] = useState(false);
  const handleCreateShow = () => setCreateShow(true);
  const handleMutipleCreateShow = () => setCreateMultipleShow(true);
  const handleEditShow = () => setEditShow(true);

  const handleCreateClose = () => setCreateShow(false);
  const handleMultipleCreateClose = () => setCreateMultipleShow(false);
  const handleEditClose = () => setEditShow(false);
  const [selected, setSelected] = useState([]);
  const [ticketid, setTicketId] = useState();
  const [ticket_data, setTicket_data] = useState();
  const [value, setValue] = useState('');
  const [valueid, setValueID] = useState('');
  const [panel, setPanel] = useState(true);
  const toggleDrawer = e => {
    setPanel(false);
  };
  const handleViewClose = () => setViewtShow(false);
  const handleSearchClose = () => setSearchShow(false);
  const handleSearchIDClose = () => setSearchIdShow(false);
  const handleErrorClose = () => setErrorShow(false);
  const [currentEditRow, setCurrentEditRow] = useState(null);
  const [viewshow, setViewtShow] = useState(false);
  const [errorshow, setErrorShow] = useState(false);
  const [searchshow, setSearchShow] = useState(false);
  const [searchidshow, setSearchIdShow] = useState(false);
  const [singleRow, setSinglerow] = useState(null);
  const [currentView, setCurrentView] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchIdValue, setIdSearchValue] = useState();
  const [mutliSelectID, setMultiSelectID] = useState([]);
  const [singleTicketDate, setSingleTicketDate] = useState(new Date());
  const [singleTicketTime, setSingleTicketTime] = useState(new Date());
  const [multipleTicketTime, setMultipleTicketTime] = useState(new Date());
  const [editTicketDate, setEditTicketDate] = useState(new Date());
  const [multiTicketDate, setMultiTicketDate] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [formPriority, setFormPriority] = useState(null);
  const [formProject, setFormProject] = useState(null);
  const [formStatus, setFormStatus] = useState(null);
  const [formAssignee, setFormAssignee] = useState(null);
  const [formdata, setformdata] = useState('  ');
  const [formDate, setFormDate] = useState(null);

  const [numberOfUpdates, setNumberOfUpdates] = useState(0);
  const [numberOfStatusUpdates, setNumberOfStatusUpdates] = useState(0);

  const [currentItemRow, setCurrentItemRow] = useState();
  const [currentItemValue, setCurrentItemValue] = useState();

  const [currentStatusItemRow, setCurrentStatusItemRow] = useState();
  const [currentStatusItemValue, setCurrentStatusItemValue] = useState();

  const [priority_status, setPriority_Status] = useState([]);
  const [valueState, setValueState] = useState('');
  const [multiCreateTicket, setMultiCreateTicket] = useState([]);
  const [singleCreateTicket, setSingleCreateTicket] = useState([]);
  const UpdatePriorityStatusTicketBody = {
    data: priority_status,
  };
  const [hasAccess, setHasAccess] = useState(false);
  const [limit, setLimit] = useState(10);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const getauthvalue = JSON.parse(getLocalStorage(AUTH_DATA.AUTH));
  const hasProject_id =
    getauthvalue &&
    getauthvalue?.redmine !== undefined &&
    getauthvalue?.redmine?.project_id !== undefined
      ? true
      : false;
  // if(!hasProject_id){
  //   setHasAccess(hasProject_id);
  // }

  // console.log('priority_status --------------',priority_status)
  const packageName = localStorage.getItem('dpackage');
  // const due_date = moment(Date).format('YYYY-MM-DD')
  const getSingleTicketDate = moment(singleTicketDate)
    .format('YYYY-MM-DD')
    .toString();
  const dispatch = useDispatch();
  const report_list = useSelector(state => state.report.report_list);
  const total_count = useSelector(state => state.report.total_count);

  const reportStatusCode = useSelector(state => state.report.statusCode);
  const loading_report = useSelector(state => state.report.loading_report);
  const updating_priority_status_loading = useSelector(
    state => state.report.update_priority_status_loading
  );
  const updating_priority_status = useSelector(
    state => state.report.update_priority_status
  );
  const close_ticket = useSelector(state => state.report.close_ticket);
  const close_ticket_loading = useSelector(
    state => state.report.close_ticket_loading
  );
  const create_ticket = useSelector(state => state.report.create_ticket);

  const create_multiple_ticket = useSelector(
    state => state.report.create_multiple_ticket
  );

  const create_loading = useSelector(state => state.report.create_loading);
  const create_multiple_loading = useSelector(
    state => state.report.create_multiple_loading
  );

  const edit_row_data = useSelector(
    state => state.report.ticket_details?.issues?.issue
  );
  const edit_row_data_loading = useSelector(
    state => state.report.ticket_details_loading
  );
  // console.log("edit_row_data", edit_row_data);

  const download_report_list = useSelector(
    state => state.download.download_report_list
  );
  const downloadLoading = useSelector(state => state.download.downloadLoading);
  const downloadReportStatus = useSelector(state => state.download.status);

  const edit_list = useSelector(state => state.report.ticket_details.issues);
  const GetSearch =
    report_list &&
    report_list.length > 0 &&
    report_list.filter(function(item) {
      return item.ticket_id == value;
    });
  const emptyDataMessage = () => {
    return (
      <div className='text-center mt-2'>
        <h6 className='mt-2'>No Data Found !</h6>
      </div>
    );
  };
  const GetID =
    report_list &&
    report_list.length > 0 &&
    report_list.filter(function(item) {
      return item.mfe_id == valueid;
    });

  const endDate = localStorage.getItem('endDate');
  if (edit_list != 'undefined') {
    const subject = edit_list?.issue.subject;
  }

  async function handleDownload() {
    const localSelectedAllValues = JSON.parse(
      getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
    );
    const payload = {
      ...data,
      ...localSelectedAllValues,
      package_name: localStorage.getItem('dpackage'),
      toDate: localStorage.getItem('endDate'),
      fromDate: startDate,
    };

    dispatch(DownloadReport(payload));
  }

  async function openPopup(e, row, edit_list) {
    e.preventDefault();
    await setViewtShow(true);
    await setSinglerow(edit_list);
  }

  const updateStatusPriority = () => {
    dispatch(UpdatePriorityStatusTicket(UpdatePriorityStatusTicketBody));

    setPriority_Status([]);
    setCurrentItemRow();
    setCurrentItemValue();
    setCurrentStatusItemRow();
    setCurrentStatusItemValue();
  };

  const checkIdMatched = (arr, id) => {
    let valid = false;
    arr.length > 0 &&
      arr.forEach(v => {
        if (v.id === id.toString()) {
          valid = true;
        }
      });
    return valid;
  };

  useEffect(() => {
    if (currentItemRow) {
      if (priority_status && priority_status.length > 0) {
        const isSameId = checkIdMatched(priority_status, currentItemRow.mfe_id);
        if (isSameId) {
          setPriority_Status(prevState =>
            prevState.map(o =>
              o.id.toString() == currentItemRow.mfe_id.toString()
                ? {
                    ...o,
                    priority: currentItemValue.toString(),
                    // status: currentItemRow.status.toString(),
                  }
                : o
            )
          );
        } else {
          setPriority_Status(prevState => [
            ...prevState,
            {
              id: currentItemRow.mfe_id.toString(),
              priority: currentItemValue.toString(),
              status: currentItemRow.status.toString(),
            },
          ]);
        }
      } else {
        setPriority_Status(prevState => [
          ...prevState,
          {
            id: currentItemRow.mfe_id.toString(),
            priority: currentItemValue.toString(),
            status: currentItemRow.status.toString(),
          },
        ]);
      }
    }
  }, [currentItemRow, numberOfUpdates]);

  useEffect(() => {
    if (currentStatusItemRow) {
      if (priority_status && priority_status.length > 0) {
        const isSameId = checkIdMatched(
          priority_status,
          currentStatusItemRow.mfe_id
        );
        if (isSameId) {
          setPriority_Status(prevState =>
            prevState.map(o =>
              o.id.toString() == currentStatusItemRow.mfe_id.toString()
                ? {
                    ...o,
                    // priority: currentStatusItemRow.priority.toString(),
                    status: currentStatusItemValue.toString(),
                  }
                : o
            )
          );
        } else {
          setPriority_Status(prevState => [
            ...prevState,
            {
              id: currentStatusItemRow.mfe_id.toString(),
              priority: currentStatusItemRow.priority.toString(),
              status: currentStatusItemValue.toString(),
            },
          ]);
        }
      } else {
        setPriority_Status(prevState => [
          ...prevState,
          {
            id: currentStatusItemRow.mfe_id.toString(),
            priority: currentStatusItemRow.priority.toString(),
            status: currentStatusItemValue.toString(),
          },
        ]);
      }
    }
  }, [currentStatusItemRow, numberOfStatusUpdates]);

  function handlePriorityChange(event, rows) {
    const value = event.target.value;
    setNumberOfUpdates(count => count + 1);
    if (rows.mfe_id != null && rows.mfe_id) {
      setCurrentItemRow(rows);
      setCurrentItemValue(value);
    } else {
      // console.log("does not have ticket id priority");
    }
  }

  function handleStatusChange(event, rows) {
    const value = event.target.value;
    setNumberOfStatusUpdates(count => count + 1);
    if (rows.mfe_id != null && rows.mfe_id) {
      setCurrentStatusItemRow(rows);
      setCurrentStatusItemValue(value);
    } else {
      //  console.log("does not have ticket id status");
    }
  }
  const bodyObj = {
    // 'issue':{

    project_id: 1,
    subject: '',
    description: '',
    due_date: '',
    assigned_to_id: '',
    priority_id: '',
    status_id: '',
    notes: '',
    // }
  };

  const searchTicket = e => {
    e.preventDefault();
    setValue('');
    setSearchShow(true);
    setSearchValue(GetSearch[0]);
  };
  const searchTicketID = e => {
    e.preventDefault();
    setValueID('');
    setSearchIdShow(true);
    setIdSearchValue(GetID[0]);
  };
  const localSelectedAllValues = JSON.parse(
    getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
  );
  const handleSubmit = data => {
    setActivePageNumber(1);
    const payload = {
      // ...localSelectedAllValues,
      ...data,
    page : 1 ,
    limit: 10,
    }

    dispatch(FetchReport(payload));
  };

  // const status = [];
  const roles = [];

  const project = [];

  const dropdown_status = [];

  const role_data = useSelector(state => state.tickets.priority__incident_data);
  if (role_data != 'undefined') {
    role_data &&
      role_data.map((role_data, i) =>
        roles.push({ value: role_data.id, label: role_data.name })
      );
  }

  const status_data = useSelector(state => state.tickets.status__incident_data);
  if (status_data != 'undefined' || status_data != null) {
    status_data &&
      status_data.map((status_data, i) =>
        dropdown_status.push({ value: status_data.id, label: status_data.name })
      );
  }

  const assign_data = useSelector(
    state => state.tickets.assignee__incident_data
  );

  const assignee = [];
  if (assign_data != 'undefined' || assign_data != null) {
    const groupId =
      assign_data &&
      assign_data.map(item => {
        return (
          item && item.group && item.group.id && item.roles && item.roles.id
        );
      });
    const groupname =
      assign_data &&
      assign_data.map(item => {
        return (
          item && item.group && item.group.name && item.roles && item.roles.id
        );
      });

    assign_data &&
      assign_data.map((assign_data, i) =>
        assignee.push({ value: groupId, label: groupname })
      );
  }
  const gertStartDate = localStorage.getItem('startDate');
  const d = new Date();
  const weekstartdate = d.setDate(d.getDate() - 7);
  const startDate = gertStartDate
    ? gertStartDate
    : moment(weekstartdate).format('YYYY-MM-DD');

  const localSelectedFilterValues = JSON.parse(
    getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)
  );

  // const handleErrorModal = (showModal, editMode) => {
  //   return editMode ? (
  //     <ErrorModel
  //     show={showModal}
  //     handleClose={() => handleErrorClose(false)}
  //   />
  //   ) : null
  // }

  const data = {
    package_name: localStorage.getItem('dpackage'),
    toDate: localStorage.getItem('endDate'),
    fromDate: startDate,
    country:
      localSelectedFilterValues &&
      localSelectedFilterValues.country &&
      localSelectedFilterValues.country.length > 0
        ? localSelectedFilterValues.country.sort().join(',')
        : countries,
    category:
      localSelectedFilterValues &&
      localSelectedFilterValues.category &&
      localSelectedFilterValues.category.length > 0
        ? localSelectedFilterValues.category.sort().join(',')
        : categories,
    publisher:
      localSelectedFilterValues &&
      localSelectedFilterValues.publisher &&
      localSelectedFilterValues.publisher.length > 0
        ? localSelectedFilterValues.publisher.sort().join(',')
        : publishers,
    channel:
      localSelectedFilterValues &&
      localSelectedFilterValues.channel &&
      localSelectedFilterValues.channel.length > 0
        ? localSelectedFilterValues.channel.sort().join(',')
        : channels,
    brand:
      localSelectedFilterValues &&
      localSelectedFilterValues.brand &&
      localSelectedFilterValues.brand.length > 0
        ? localSelectedFilterValues.brand.sort().join(',')
        : brands,
    status:
      localSelectedFilterValues &&
      localSelectedFilterValues.status &&
      localSelectedFilterValues.status.length > 0
        ? localSelectedFilterValues.status.sort().join(',')
        : filterStatus,
    priority:
      localSelectedFilterValues &&
      localSelectedFilterValues.priority &&
      localSelectedFilterValues.priority.length > 0
        ? localSelectedFilterValues.priority.sort().join(',')
        : priorities,
  };

  useEffect(() => {
    // dispatch(FetchReport(data));
    // dispatch(DownloadReport(data));
    if (hasAccess) {
      if (show || create || createMultiple) {
        dispatch(FetchTicketPriorityIncidents());
        dispatch(FetchTicketAssigneeIncidents());
        dispatch(FetchTicketStatusIncidents());
      }
    }
  }, [show, create, createMultiple]);

  useEffect(() => {
    dispatch({
      type: constant.SET_GLOBAL_PACKAGE_NAME,
      setGlobalPackageName: packageName,
    });
  }, [setGlobalPackageName]);

  useEffect(() => {
    if (edit_row_data?.due_date) {
      setEditTicketDate(new Date(edit_row_data?.due_date));
      setEditMode(false);
    }
  }, [edit_row_data]);

  // update status & priority
  useEffect(() => {
    if (
      updating_priority_status?.length != 0 ||
      create_ticket?.length != 0 ||
      create_multiple_ticket?.length != 0 ||
      close_ticket?.length != 0
    ) {
     
      const payload = {
        ...data,
        ...localSelectedAllValues,
        package_name: localStorage.getItem('dpackage'),
        toDate: localStorage.getItem('endDate'),
        fromDate: startDate,
        page: activePageNumber,
        limit: limit,
      };

      dispatch(FetchReport(payload));
    }
  }, [
    updating_priority_status,
    create_ticket,
    create_multiple_ticket,
    close_ticket,
  ]);

  // constant.UPDATE_PRIORITY_STATUS_CLEAR

  // setCountries

  // setLocalStorage(
  //   FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES,
  //   JSON.stringify(data)
  // );

  useEffect(() => {
    if (hasProject_id) {
      setHasAccess(hasProject_id);
    }
  }, []);

  useEffect(() => {
    dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR });

    const localSelectedAllValues = JSON.parse(
      getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
    );

    const payload = {
      ...data,
      ...localSelectedAllValues,
      package_name: localStorage.getItem('dpackage'),
      toDate: localStorage.getItem('endDate'),
      fromDate: startDate,
      page: activePageNumber,
      limit: limit,
    };

    dispatch(FetchReport(payload));

    setHasAccess(hasProject_id);
  }, [activePageNumber, limit]);

  useEffect(() => {
    if (downloadReportStatus) {
      const element = document.createElement('a');
      const file = new Blob([download_report_list], {
        type: 'text/plain',
      });
      element.href = URL.createObjectURL(file);
      element.download =
        'Incident_report_' +
        packageName +
        '_' +
        startDate +
        '_' +
        endDate +
        '.csv';
      document.body.appendChild(element);
      element.click();
      setTimeout(() => {
        dispatch({ type: DOWNLOAD_INIT_CLEAR });
      }, 1000);
      // constant.DOWNLOAD_INIT_CLEAR
    }
  }, [downloadReportStatus]);

  useEffect(() => {
    // if(packageName){
    //   setActivePageNumber(1)
    //   setLimit(10)
    // const localSelectedAllValues = JSON.parse(
    //   getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
    // );
    // const payload = {
    //   ...data,
    //   ...localSelectedAllValues,
    //   package_name: localStorage.getItem("dpackage"),
    //   toDate: localStorage.getItem("endDate"),
    //   fromDate: startDate,
    //   page : 1 ,
    // limit: 10,
    // }
    if (packageName) {
      const localSelectedAllValues = JSON.parse(
        getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
      );
      const payload = {
        ...data,
        ...localSelectedAllValues,
        package_name: localStorage.getItem('dpackage'),
        toDate: localStorage.getItem('endDate'),
        fromDate: startDate,
        page: 1,
        limit: 10,
      };
      dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR });

      setActivePageNumber(1);
      setLimit(10);
      dispatch(FetchReport(payload));
    }
  }, [packageName]);

  const handlePriorityandStatus = e => {
    setSelected(e.target.value);
  };
  const createTicket = () => {
    if (multiCreateTicket.length > 1) {
      handleMutipleCreateShow();
    } else {
      if (singleCreateTicket && multiCreateTicket.length == 1) {
        handleCreateShow();
      } else {
      }
    }
  };
  async function ViewTicket(e, row, edit_list) {
    e.preventDefault();
    setCurrentView(row);
    await openPopup(e, row, edit_list);
  }

  async function editTicket(e, row) {
    setTicketId(row.id);
    e.preventDefault();
    // console.log("row. ticket id", row.ticket_id);
    if (row.ticket_id != null && row.ticket_id && hasAccess) {
      await dispatch(FetchTicket(row.ticket_id));
      setEditShow(true);
      // console.log("row value", edit_row_data);
      setCurrentEditRow(row);
      handleEditShow(true);
      setCurrentEditRow(row);
    } else {
      handleCreateShow(true);
      setTicketId(row.id);
    }
  }

  // console.log(' UpdatePriorityStatusTicketBody',UpdatePriorityStatusTicketBody)

  const columns = [
    {
      dataField: 'mfe_id',
      text: 'ID',
      sort: true,
      style: {
        width: '100px',
      },
      headerStyle: {
        minWidth: '150px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className=''>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  <span>
                    Left Click for Ticket Creation and Right Click for detail
                  </span>
                </Tooltip>
              }>
              <a
                onClick={e => editTicket(e, row)}
                onContextMenu={e => ViewTicket(e, row)}
                style={{ color: '#3699ff' }}>
                {' '}
                {row.mfe_id}
              </a>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'inserted_date',
      text: 'Date',
      sort: true,
      style: {
        width: '5%',
      },

      formatter: (cellContent, report_list) => {
        return (
          <div className='text-ellipsis'>
            <span>{report_list.inserted_date}</span>
          </div>
        );
      },
    },
    {
      dataField: 'case_reports',
      text: 'Case Report',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '100px',
        width: '100px',
      },

      formatter: (cellContent, row) => {
        return row.case_reports != null &&
          row.case_reports != '' &&
          row.case_reports != 'NA' &&
          row.case_reports != undefined ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.case_reports}</Tooltip>
              }>
              <a target={row.case_reports} href={row.case_reports}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.case_reports}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'sub_channel_name',
      text: 'Sub Channel',
      sort: 'true',
      //
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.sub_channel_name}</Tooltip>
              }>
              <span>{row.sub_channel_name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'sub_sub_channel_name',
      text: 'Sub Sub Channel',
      sort: true,
      style: {
        width: '10px',
      },
      headerStyle: {
        minWidth: '150px',
        width: '150px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {row.sub_sub_channel_name}
                </Tooltip>
              }>
              <span>{row.sub_sub_channel_name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'channel_name',
      text: 'Channel',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '120px',
        width: '120px',
      },
      formatter: (cellContent, report_list) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {report_list.channel_name}
                </Tooltip>
              }>
              <span>{report_list.channel_name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'location',
      text: 'Location',
      sort: true,

      headerStyle: {
        minWidth: '120px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.location}</Tooltip>}>
              <span>{row.location}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'brand',
      text: 'Brand',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.brand}</Tooltip>}>
              <span>{row.brand}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'keyword_term',
      text: 'Keyword',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, report_list) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {report_list.keyword_term}
                </Tooltip>
              }>
              <span>{report_list.keyword_term}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'country',
      text: 'Country',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.country}</Tooltip>}>
              <span>{row.country}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'category',
      text: 'Category',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '120px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.category}</Tooltip>}>
              <span>{row.category}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
   
    {
      dataField: 'sub_category',
      text: 'Sub Category',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.sub_category}</Tooltip>
              }>
              <span>{row.sub_category}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'priority',
      text: 'Priority',
      sort: true,

      style: {
        width: '12%',
      },
      formatter: (cellContent, row, { value }) => {
        {
          return (
            <select
              name='priority'
              style={style}
              defaultValue={row.priority}
              onChange={event => {
                handlePriorityChange(event, row);
              }}>
              <option value='High' id='1'>
                High
              </option>
              <option value='Mid' id='2'>
                Mid
              </option>
              <option value='Low' id='3'>
                Low
              </option>
            </select>
          );
        }
      },
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '120px',
      },
      formatter: (cellContent, row, { value }) => {
        {
          return (
            <select
              name='status'
              style={style}
              defaultValue={row.status}
              onChange={event => {
                handleStatusChange(event, row);
              }}>
              <option value='Active'>Active</option>
              <option value='Closed'>Closed</option>
              <option value='In progress'>In progress</option>
            </select>
          );
        }
      },
    },
    {
      dataField: 'status_update_date',
      text: 'Status Update Date',
      sort: true,
      style: {
        width: '12%',
      },

      headerStyle: {
        minWidth: '150px',
        width: '150px',
      },
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.status_update_date}</Tooltip>
              }>
              <span>{row.status_update_date}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'ticket_id',
      text: 'Ticket ID',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.ticket_id}</Tooltip>}>
              <span>{row.ticket_id}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'ticket_status',
      text: 'Ticket Status',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.ticket_status}</Tooltip>
              }>
              <span>{row.ticket_status}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'ad_heading',
      text: 'Heading',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, report_list) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{report_list.ad_heading}</Tooltip>
              }>
              <span>{report_list.ad_heading}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'ad_description',
      text: 'Description',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        // backgroundColor: 'green',
        minWidth: '150px',
      },
      formatter: (cellContent, report_list) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {report_list.ad_description}
                </Tooltip>
              }>
              <span>{report_list.ad_description}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
   
    {
      dataField: 'screenshot',
      text: 'Screenshot',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '100px',
        width: '100px',
      },

      formatter: (cellContent, row) => {
        return row.screenshot != null &&
          row.screenshot != undefined &&
          row.screenshot.length != 0 &&
          row.screenshot != '' &&
          row.screenshot != 'NA' ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.screenshot}</Tooltip>}>
              <a target={row.screenshot} href={row.screenshot}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.screenshot}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'destination_url',
      text: 'Destination URL',
      sort: true,

      headerStyle: {
        minWidth: '120px',
      },
      formatter: (cellContent, row) => {
        return row.destination_url != null &&
          row.destination_url != undefined &&
          row.destination_url != 0 &&
          row.destination_url != '' &&
          row.destination_url != 'NA' &&
          row.destination_url.length != 0 ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.destination_url}</Tooltip>
              }>
              <a target={row.destination_url} href={row.destination_url}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.destination_url}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'ad_display_url',
      text: 'Display URL',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return row.ad_display_url != null &&
          row.ad_display_url != undefined &&
          row.ad_display_url != '' &&
          row.ad_display_url != 'NA' &&
          row.ad_display_url.length != 0 ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.ad_display_url}</Tooltip>
              }>
              <a target={row.ad_display_url} href={row.ad_display_url}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.ad_display_url}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'source_url',
      text: 'Source URL',
      sort: true,
      style: {
        width: '12%',
      },

      headerStyle: {
        minWidth: '120px',
      },

      formatter: (cellContent, row) => {
        return row.source_url != null &&
          row.source_url != '' &&
          row.source_url != 'NA' &&
          row.source_url != undefined &&
          row.source_url.length != 0 ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.source_url}</Tooltip>}>
              <a target={row.source_url} href={row.source_url}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.source_url}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'destination_url_domain',
      text: 'Destination URL Domain',
      // sort: true,
      // style: {
      //   width: "22%",
      // },
      headerStyle: {
        minWidth: '200px',
        width: '200px',
      },

      formatter: (cellContent, row) => {
        return row.destination_url_domain != null &&
          row.destination_url_domain != '' &&
          row.destination_url_domain != 'NA' &&
          row.destination_url_domain != undefined &&
          row.destination_url_domain.length != 0 ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>
                  {row.destination_url_domain}
                </Tooltip>
              }>
              <a
                target={row.destination_url_domain}
                href={row.destination_url_domain}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.destination_url_domain}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'intermediate_url',
      text: 'Intermediate URL',
      // sort: true,
      // style: {
      //   width: "22%",
      // },
      headerStyle: {
        minWidth: '200px',
        width: '200px',
      },

      formatter: (cellContent, row) => {
        return row.intermediate_url != null &&
          row.intermediate_url != '' &&
          row.intermediate_url != 'NA' &&
          row.intermediate_url != undefined &&
          row.intermediate_url.length != 0 ? (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.intermediate_url}</Tooltip>
              }>
              <a target={row.intermediate_url} href={row.intermediate_url}>
                <span className='svg-icon svg-icon-md svg-icon-primary'>
                  <SVG src={toAbsoluteUrl('/media/svg/icons/General/link.svg')}>
                    {' '}
                    <span>{row.intermediate_url}</span>
                  </SVG>
                </span>
              </a>
            </OverlayTrigger>
          </div>
        ) : (
          ''
        );
      },
    },
    {
      dataField: 'publisher',
      text: 'Publisher',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.publisher}</Tooltip>}>
              <span>{row.publisher}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'sub_publisher',
      text: 'Sub Publisher',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.sub_publisher}</Tooltip>
              }>
              <span>{row.sub_publisher}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'campaign',
      text: 'Campaign',
      sort: true,
      style: {
        width: '12%',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={<Tooltip id={`tooltip-left`}>{row.campaign}</Tooltip>}>
              <span>{row.campaign}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'campaign_name',
      text: 'Campaign Name',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '140px',
        width: '150px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.campaign_name}</Tooltip>
              }>
              <span>{row.campaign_name}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'additional_info1',
      text: 'Additional Info 1',
      sort: true,
      style: {
        width: '12%',
      },

      headerStyle: {
        minWidth: '140px',
        width: '150px',
      },
      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.additional_info1}</Tooltip>
              }>
              <span>{row.additional_info1}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
    {
      dataField: 'tat',
      text: 'TAT',
      sort: true,
      style: {
        width: '10%',
        // width: '150px'
      },

      headerStyle: {
        minWidth: '40px',
        width: '50px',
      },
    },

    {
      dataField: 'ticket_open_status',
      text: 'Ticket Open Status',
      sort: true,
      style: {
        width: '12%',
      },
      headerStyle: {
        minWidth: '140px',
        width: '150px',
      },

      formatter: (cellContent, row) => {
        return (
          <div className='text-ellipsis'>
            <OverlayTrigger
              placement='left'
              overlay={
                <Tooltip id={`tooltip-left`}>{row.ticket_open_status}</Tooltip>
              }>
              <span>{row.ticket_open_status}</span>
            </OverlayTrigger>
          </div>
        );
      },
    },
  ];

  const customTotal = (from, to, size) => (
    <span className='react-bootstrap-table-pagination-total ml-3'>
      Showing {from} to {to} of {size} Results
    </span>
  );

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    hideSelectAll: false,
    onSelectAll: (isSelected, row, rowIndex, e) => {
      // setMultiCreateTicket([row.map((item) => item.mfe_id)])
      setMultiCreateTicket(row.map(item => item.mfe_id));

      setMultiSelectID(row.map(item => item.mfe_id));
      if (!isSelected) {
        setMultiCreateTicket([]);
        setMultiSelectID([]);
      }
    },
    onSelect: (row, isSelect, rowIndex, e) => {
      setSingleCreateTicket([row.mfe_id]);
      setMultiCreateTicket(prevState => [...prevState, row.mfe_id]);
      setMultiSelectID(prevState =>
        prevState && !prevState.includes(row.mfe_id)
          ? [...prevState, row.mfe_id]
          : [...prevState]
      );
      if (multiCreateTicket.length > 1) {
        // console.log('selected multiple ticket selected   ',multiCreateTicket);
      }
      //select handled
      if (row.ticket_id != null && row.mfe_id && isSelect) {
        setMultiSelectID(prevState =>
          prevState && !prevState.includes(row.mfe_id)
            ? [...prevState, row.mfe_id]
            : [...prevState]
        );
      }
      if (isSelect) {
        setErrorShow(true);
      }

      // unselect handled
      if (!isSelect && row.mfe_id) {
        setMultiSelectID(prevState =>
          prevState.filter(item => item !== row.mfe_id)
        );

        setMultiCreateTicket(prevState =>
          prevState.filter(item => item !== row.mfe_id)
        );

        // setMultiCreateTicket([
        //   // row.map((item) => item.mfe_id)

        //   row.filter((item) => item !== row.mfe_id)
        // ]

        // // (prevState) =>
        // //   prevState.filter((item) => item !== row.mfe_id)
        // )

        setSingleCreateTicket(prevState =>
          prevState.filter(item => item !== row.mfe_id)
        );
      } else if (row.ticket_id == null && !row.ticket_id) {
      }
    },
  };
  const close_body = {
    ids: mutliSelectID,
  };

  function closeTicket() {
    dispatch(CloseTicket(close_body));
    setMultiSelectID([]);
    setMultiCreateTicket([]);
    setSingleCreateTicket([]);
  }

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
  const totalPages = total_count && total_count ? Math.ceil(parseInt(total_count) / limit) : 1;
  //  incident_data  && incident_data?.total_count
  // ? Math.ceil(parseInt(incident_data && incident_data?.total_count) / limit)
  // : 1;

  const handlePageClick = event => {
    const pageNumber = event.selected + 1;
    const paginationParams = {
      limit: limit,
      page: pageNumber,
    };
    setActivePageNumber(pageNumber);
  };

  const handleRecordPerPage = e => {
    const { value } = e.target;
    setLimit(value);
    setActivePageNumber(1);

    // dispatch(FetchTicketIncidents(params));
  };
  
useEffect(()=> {
  console.log('create_ticket outside typ',typeof create_ticket);
console.log('crea',create_loading);
if(create_ticket.status && create_ticket.status !== false){
  toast.success('Ticket Successfully Created !');
  dispatch({ type: CREATE_TICKET_CLEAR }); 
}
else
if(create_ticket.error && create_ticket.status === false){
  toast.error(create_ticket.error);
  dispatch({ type: CREATE_TICKET_CLEAR }); 

}
},[create_ticket])

useEffect(()=> {
  console.log('closing', close_ticket.success);
if(close_ticket !== undefined &&  typeof close_ticket?.success === 'object' && close_ticket?.success?.length !== 0)
// if(close_ticket !== undefined &&   close_ticket.status && create_ticket.status !== false)
{
  console.log('inside pol', close_ticket.success);
const closing_ticket_success = close_ticket && close_ticket.success
close_ticket && close_ticket.success && close_ticket.success.map((item) => (
    // console.log('iiiiii',item.id)
    toast.success(`Ticket Closed Succesfully! ${item.id}`)
) 

 )
 dispatch({ type: ClOSE_TICKET_INIT_CLEAR }); 
}
else
if(close_ticket !== undefined &&  typeof close_ticket?.errors === 'object' && close_ticket?.errors?.length !== 0){
// if(close_ticket !== undefined &&  close_ticket.errors && close_ticket.status === false){
  const closing_ticket_error = close_ticket && close_ticket.errors
  closing_ticket_error.map((item) => (
      // console.log('iiiiii',item.id)
      toast.error(`${item.message}  ${item.id}`)
  ))
  dispatch({ type: ClOSE_TICKET_INIT_CLEAR }); 
}
},[close_ticket])

useEffect(()=> {
if(create_multiple_ticket !== undefined &&  typeof create_multiple_ticket?.success === 'object' && create_multiple_ticket?.success?.length !== 0)
{
const create_multiple_ticket_success = create_multiple_ticket?.success?.length !== 0 && create_multiple_ticket?.success
 create_multiple_ticket_success.map((item) => (
    // console.log('iiiiii',item.id)
    toast.success(`Ticket  Succesfully Created! ${item.id}`)
) 
 )
 dispatch({ type: CREATE_MULTIPLE_TICKET_CLEAR }); 

}
else
if(create_multiple_ticket !== undefined &&  typeof create_multiple_ticket?.errors === 'object' && create_multiple_ticket?.errors?.length !== 0){
  const create_multiple_ticket_error = create_multiple_ticket && create_multiple_ticket.errors
  console.log('else part create_multiple_ticket_error',create_multiple_ticket_error);
  create_multiple_ticket_error.map((item) => (
      // console.log(`${item.message} working well ${item.id}`)
      toast.error(`${item.message}  ${item.id}`)
  )) 
  dispatch({ type: CREATE_MULTIPLE_TICKET_CLEAR }); 

}
},[create_multiple_ticket])

useEffect(()=> {
  console.log('updating_priority_status',updating_priority_status);
  if(updating_priority_status !== undefined &&  typeof updating_priority_status?.success === 'object' && updating_priority_status?.success?.length !== 0)
  {
  const updating_priority_status_success = updating_priority_status?.success?.length !== 0 && updating_priority_status?.success
   updating_priority_status_success.map((item) => (
      // console.log('iiiiii',item.id)
      toast.success(`Successfully Updated  ${item.id}`)
  ) 
   )
   dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR });
  }
  else
  if(updating_priority_status !== undefined &&  typeof updating_priority_status?.errors === 'object' && updating_priority_status?.errors?.length !== 0){
    const updating_priority_status_error = updating_priority_status && updating_priority_status.errors
    console.log('else part updating_priority_status_error',updating_priority_status_error);
    updating_priority_status_error.map((item) => (
        // console.log(`${item.message} working well ${item.id}`)
        toast.error(`${item.message}  ${item.id}`)
    )) 
    dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR });
  }
  // dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR });
  },[updating_priority_status])

  useEffect(()=> {
    console.log('edit_row_data',edit_row_data);
    // if(edit_row_data !== undefined && edit_row_data?.status && edit_row_data?.status !== false){
    //   toast.success('Successfully Edited !');
    // }
    // else
    // if(edit_row_data.error && edit_row_data.status === false){
    //   toast.error(edit_row_data.error);
    
    // }
    },[edit_row_data])

  return (
    <>
      <div className='card card-custom'>
        <Card>
          <ToolkitProvider
            bootstrap4
            keyField='mfe_id'
            data={report_list}
            columns={columns}
            // pagination={paginationFactory(options)}
            wrapperClasses='table-responsive'
            classes='table table-vertical-center header-class'
            bordered={false}
            condensed
            responsive
            headerClasses='header-class'
            hover
            search>
            {props => (
              <CardBody>
                <div className='App'>
                  <SearchBar
                    {...props?.searchProps}
                    style={{
                      width: '300px',
                      height: '39px',
                      marginTop: '10px',
                    }}
                  />
                  <ClearButton {...props?.searchProps} />
                  {hasAccess !== false ? (
                    <button
                      className='btn btn-primary font-weight-bolder font-size custom-button'
                      onClick={() => closeTicket()}
                      disabled={!mutliSelectID.length != 0}
                      //   style={
                      //     {backgroundColor:'#f4874f', borderColor:'#f4874f'}
                      // }
                    >
                      Close Ticket
                    </button>
                  ) : (
                    ''
                  )}
                  {hasAccess !== false ? (
                    <button
                      className='btn btn-primary font-weight-bolder font-size ml-2 custom-button'
                      onClick={() => createTicket()}
                      disabled={!multiCreateTicket.length != 0}>
                      Create Ticket
                    </button>
                  ) : (
                    ''
                  )}{' '}
                  <button
                    className='btn btn-primary font-weight-bolder font-size ml-2 custom-button'
                    onClick={() => updateStatusPriority()}
                    disabled={!priority_status.length != 0}>
                    Save
                  </button>
                  {/* <button onClick={() => {dispatch({ type: UPDATE_PRIORITY_STATUS_CLEAR })}}>clear dispath</button> */}
                  <button
                    className='btn btn-primary font-weight-bolder font-size ml-2 custom-button'
                    onClick={() => handleDownload()}
                    disabled={downloadLoading || !report_list?.length != 0}>
                    {downloadLoading
                      ? downloadLoading && (
                          <span>
                            <i
                              className='fa fa-refresh fa-spin'
                              style={{ marginRight: '5px' }}
                            />
                            Downloading...
                          </span>
                        )
                      : 'Download'}
                  </button>
                  {(create_loading && create_loading) ||
                  (create_multiple_loading && create_multiple_loading) ||
                  (updating_priority_status_loading &&
                    updating_priority_status_loading) ||
                  (close_ticket_loading && close_ticket_loading) ||
                  loading_report ? (
                    <div className='text-center p-5 mt-5'>
                      <Spinner animation='border' variant='warning' />
                    </div>
                  ) : (
                    <>
                      <BootstrapTable
                        bootstrap4
                        keyField='mfe_id'
                        data={report_list}
                        columns={columns}
                        // pagination={paginationFactory(options)}
                        wrapperClasses='table-responsive'
                        classes='table table-vertical-center header-class'
                        bordered={false}
                        selectRow={selectRow}
                        condensed
                        responsive
                        {...props?.baseProps}
                        filter={filterFactory()}
                        noDataIndication='No records found'
                        headerClasses='header-class'
                        striped
                        hover
                      />
                    </>
                  )}
                  <div className='form-group row mb-4 mt-6'>
                    <div
                      className='col-lg-12 mb-4 align-items-end d-flex'
                      style={{ paddingLeft: '0px' }}>
                      <div className='col-lg-12'>
                        <ReactPaginate
                          nextLabel='Next >'
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={3}
                          marginPagesDisplayed={2}
                          forcePage={activePageNumber - 1}
                          pageCount={totalPages}
                          previousLabel='< Prev'
                          pageClassName='page-item'
                          pageLinkClassName='page-link'
                          previousClassName='page-item'
                          previousLinkClassName='page-link'
                          nextClassName='page-item'
                          nextLinkClassName='page-link'
                          breakLabel='...'
                          breakClassName='page-item'
                          breakLinkClassName='page-link'
                          containerClassName='pagination'
                          activeClassName='active'
                          renderOnZeroPageCount={null}
                        />
                        <div
                          className='col-md-3'
                          style={{ display: 'inline', paddingLeft: '0px' }}>
                          <select
                            className='btn btn-default btn-secondary dropdown-toggle'
                            data-control='select'
                            data-placeholder='Select an option'
                            data-allow-clear='true'
                            onChange={e => handleRecordPerPage(e)}
                            name='page_size'
                            value={limit || ''}>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                          </select>
                          <label className='col-form-label text-lg-start ml-5'>
                            Showing {(activePageNumber - 1) * limit + 1} to{' '}
                            {(activePageNumber - 1) * limit +
                              +report_list?.length}{' '}
                            of {total_count} Results
                            {/*           Showing {((activePageNumber -1 )* limit) + 1 } to {((activePageNumber -1) * limit + (+incident_data?.issues.length)) } of {incident_data?.total_count} Results    */}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            )}
          </ToolkitProvider>
        </Card>
        {hasAccess !== false ? (
          <Modal show={create} onHide={handleCreateClose} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Create Tickets</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{
                  subject: '',
                  due_date: '',
                  priority_id: '',
                  project: '',
                  status_id: '',
                  description: '',
                  estimated_hours: '',
                  notes: '',
                }}
                onSubmit={(values, { resetForm }) => {
                  let formData = {
                    issue: {
                      project_id: getauthvalue.redmine?.project_id,
                      subject: values.subject,
                      description: values.description,
                      priority_id: formPriority !== null ? formPriority : '1',
                      status_id: formStatus !== null ? formStatus : '1',
                      assigned_to_id:
                        formAssignee !== null ? formAssignee : '287',

                      due_date: moment(singleTicketDate)
                        .format('YYYY-MM-DD')
                        .toString(),
                      estimated_hours: values.estimated_hours,
                      notes: values.notes,
                    },
                  };
                  dispatch(PostTicket(formData, singleCreateTicket));
                  //singlehai

                  setSingleCreateTicket([]);
                  setMultiSelectID([]);
                  setMultiCreateTicket([]);
                  resetForm();
                  setCreateShow(false);
                }}>
                {({ values, setFieldValue, handleBlur }) => (
                  <Form className='form form-label-right'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <label>Subject</label>
                        <Field
                          name='subject'
                          //  component={Input}
                          placeholder='Subject'
                          label='Subject'
                          className='form-control'
                          required='required'
                        />
                      </div>
                      <div className='col-md-6'>
                        <label>Due Date</label>
                        <DatePicker
                          onChange={date => setSingleTicketDate(date)}
                          selected={singleTicketDate}
                          name='due_date'
                          label='Due Date'
                          singleTicketDate
                        />
                      </div>
                      <div className='col-md-6'>
                        <label>Estimated Time (In Hours)</label>
                        {/* <DatePicker
                          

                          selected={singleTicketTime}
                          onChange={(date) => setSingleTicketTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          name="estimated_hours"
                          label="Estimate Time"
                        /> */}
                        <Field
                          name='estimated_hours'
                          //  component={Input}
                          placeholder='Estimate Time'
                          label='Estimate time'
                          className='form-control'
                          required='required'
                          onKeyPress={e => {
                            if (!REGEX.NUMERIC.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <div className='col-md-6'>
                        <label className='d-block'>Priority</label>
                        <select
                          className='ticketmodel'
                          name='priority'
                          onChange={e => {
                            setFormPriority(e.target.value);
                          }}>
                          {role_data &&
                            role_data.map((role, i) => (
                              <option
                                value={role.id}
                                selected={id === role.name ? true : false}>
                                {role.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <label className='d-block'>Status</label>
                        <select
                          className='ticketmodel'
                          name='status'
                          onChange={e => {
                            setFormStatus(e.target.value);
                          }}>
                          {status_data &&
                            status_data.map((role, i) => (
                              <option
                                value={role.id}
                                selected={id === role.name ? true : false}>
                                {role.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className='col-md-6'>
                        <label className='d-block'>Assignee</label>
                        <select
                          name='assigned_to_id'
                          className='ticketmodel'
                          onChange={e => setFormAssignee(e.target.value)}>
                          {assign_data &&
                            assign_data.map((asssign, i) => (
                              <option
                                value={
                                  asssign.group && asssign.group.id
                                    ? asssign.group.id
                                    : asssign.user && asssign.user.id
                                }
                                selected={
                                  asssign.group && asssign.group.id
                                    ? true
                                    : false
                                }>
                                {asssign.group && asssign.group.name
                                  ? asssign.group.name
                                  : asssign.user && asssign.user.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Description</label>
                          <Field
                            name='description'
                            as='textarea'
                            className='form-control'
                            required='required'
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
                        onClick={handleCreateClose}>
                        Close
                      </button>
                      <>
                        <button
                          type='submit'
                          className='btn btn-primary font-weight-bolder
                                       font-size-sm mr-3'>
                          Submit
                        </button>
                      </>
                    </Modal.Footer>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        ) : !editMode ? (
          <ErrorModel
            show={errorshow}
            handleClose={() => handleErrorClose(false)}
          />
        ) : null

        // handleErrorModal(errorshow)
        }
        <Modal
          show={createMultiple}
          onHide={handleMultipleCreateClose}
          size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Create Multiple Tickets</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                subject: '',
                due_date: '',
                priority_id: '',
                project: '',
                status_id: '',
                description: '',
                notes: '',
                estimated_hours: '',
              }}
              onSubmit={(values, { resetForm }) => {
                let formData = {
                  ids: multiCreateTicket,
                  body: {
                    issue: {
                      project_id: getauthvalue.redmine?.project_id,
                      subject: values.subject,
                      description: values.description,
                      priority_id: formPriority !== null ? formPriority : '1',
                      status_id: formStatus !== null ? formStatus : '1',
                      assigned_to_id:
                        formAssignee !== null ? formAssignee : '287',

                      due_date: moment(multiTicketDate)
                        .format('YYYY-MM-DD')
                        .toString(),
                      notes: values.notes,
                      estimated_hours: values.estimated_hours,
                    },
                  },
                };
                dispatch(PostMultipleTicket(formData));
                setMultiCreateTicket([]);
                setMultiSelectID([]);
                setSingleCreateTicket([]);
                resetForm();
                setCreateMultipleShow(false);
              }}>
              {({ values, setFieldValue, handleBlur }) => (
                <Form className='form form-label-right'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Subject</label>
                      <Field
                        name='subject'
                        //  component={Input}
                        placeholder='Subject'
                        label='Subject'
                        className='form-control'
                        required='required'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label>Due Date</label>
                      <DatePicker
                        onChange={date => setMultiTicketDate(date)}
                        selected={multiTicketDate}
                        name='due_date'
                        label='Due Date'
                        multiTicketDate
                      />
                    </div>
                    <div className='col-md-6'>
                      <label>Estimated Time (In Hours)</label>
                      {/* <DatePicker
                          

                          selected={multipleTicketTime}
                          onChange={(date) => setMultipleTicketTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          name="estimated_hours"
                          label="Estimate Time"
                        /> */}
                      <Field
                        name='estimated_hours'
                        //  component={Input}
                        placeholder='Estimate Time'
                        label='Estimate time'
                        className='form-control'
                        required='required'
                        onKeyPress={e => {
                          if (!REGEX.NUMERIC.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='d-block'>Priority</label>
                      <select
                        className='ticketmodel'
                        name='priority'
                        onChange={e => {
                          setFormPriority(e.target.value);
                        }}>
                        {role_data &&
                          role_data.map((role, i) => (
                            <option
                              value={role.id}
                              selected={id === role.name ? true : false}>
                              {role.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className='col-md-6'>
                      <label className='d-block'>Status</label>
                      <select
                        className='ticketmodel'
                        name='status'
                        onChange={e => {
                          setFormStatus(e.target.value);
                        }}>
                        {status_data &&
                          status_data.map((role, i) => (
                            <option
                              value={role.id}
                              selected={id === role.name ? true : false}>
                              {role.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className='col-md-6'>
                      <label className='d-block'>Assignee</label>
                      <select
                        name='assigned_to_id'
                        className='ticketmodel'
                        onChange={e => setFormAssignee(e.target.value)}>
                        {assign_data &&
                          assign_data.map((asssign, i) => (
                            <option
                              value={
                                asssign.group && asssign.group.id
                                  ? asssign.group.id
                                  : asssign.user && asssign.user.id
                              }
                              selected={
                                asssign.group && asssign.group.id ? true : false
                              }>
                              {asssign.group && asssign.group.name
                                ? asssign.group.name
                                : asssign.user && asssign.user.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label>Description</label>
                        <Field
                          name='description'
                          as='textarea'
                          className='form-control'
                          required='required'
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
                      onClick={handleMultipleCreateClose}>
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

        {edit_row_data_loading && edit_row_data_loading ? (
          <Spinner animation='border' variant='warning' />
        ) : hasAccess !== false ? (
          <Modal show={show} onHide={handleEditClose} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Edit Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                initialValues={{
                  subject: edit_row_data?.subject,
                  due_date: edit_row_data?.due_date,
                  priority: edit_row_data?.priority?.id,
                  project: edit_row_data?.project?.id,
                  status: edit_row_data?.status?.id,
                  assignee: edit_row_data?.assigned_to?.id,
                  description: edit_row_data?.description,
                  notes: edit_row_data?.attachments,
                }}
                onSubmit={(values, { resetForm }) => {
                  let formData = {
                    issue: {
                      project_id:
                        formProject !== null
                          ? formProject
                          : currentEditRow?.project?.id,
                      subject: values.subject,
                      description: values.description,
                      priority_id:
                        formPriority !== null
                          ? formPriority
                          : edit_row_data?.priority?.id,
                      status_id:
                        formStatus !== null
                          ? formStatus
                          : edit_row_data?.status?.id,
                      assigned_to_id:
                        formAssignee !== null
                          ? formAssignee
                          : edit_row_data?.assigned_to_id,
                      due_date:
                        editTicketDate !== null
                          ? moment(editTicketDate).format('YYYY-MM-DD')
                          : null,
                    },
                  };
                  dispatch(
                    UpdateTickets(
                      formData,
                      edit_row_data.id,
                      edit_row_data.status,
                      edit_row_data.priority,
                      edit_row_data.assign_to,
                      edit_row_data.due_date
                    )
                  );
                  resetForm();
                  setEditShow(false);
                }}>
                {({ values, setFieldValue, handleBlur }) => (
                  <Form className='form form-label-right'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <Field
                          name='subject'
                          component={Input}
                          placeholder='Subject'
                          label='Subject'
                          readOnly='readOnly'
                        />
                      </div>
                      <div className='col-md-6'>
                        <label>Due Date</label>
                        <DatePicker
                          onChange={date => setEditTicketDate(date)}
                          selected={editTicketDate}
                          name='due_date'
                          label='Due Date'
                          editTicketDate
                        />
                      </div>
                      <div className='col-md-6'>
                        <label className='d-block'>Priority</label>
                        <select
                          className='ticketmodel'
                          name='priority'
                          onChange={e => {
                            setFormPriority(e.target.value);
                          }}>
                          {roles &&
                            roles.map((role, i) => (
                              <option
                                key={'OP' + i}
                                value={role.value}
                                selected={
                                  edit_row_data &&
                                  edit_row_data.priority?.id === role.value
                                    ? true
                                    : false
                                }>
                                {role.label}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <label className='d-block'>Status</label>
                        <select
                          className='ticketmodel'
                          name='status'
                          onChange={e => {
                            setFormStatus(e.target.value);
                          }}>
                          {status_data &&
                            status_data.map((status, i) => (
                              <option
                                key={'PO' + i}
                                value={status.id}
                                selected={
                                  edit_row_data &&
                                  edit_row_data.status?.id === status.id
                                    ? true
                                    : false
                                }>
                                {status.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <label className='d-block'>Assignee</label>
                        <select
                          className='ticketmodel'
                          name='assignee'
                          onChange={e => {
                            setFormAssignee(e.target.value);
                          }}>
                          {assign_data &&
                            assign_data.map((asssign, i) => (
                              <option
                                key={'AS' + i}
                                value={
                                  asssign?.group && asssign?.group?.id
                                    ? asssign?.group?.id
                                    : asssign?.user && asssign?.user?.id
                                }
                                selected={
                                  edit_row_data &&
                                  edit_row_data?.assigned_to?.id ===
                                    asssign?.user?.id
                                    ? true
                                    : false
                                }>
                                {asssign.group && asssign.group.name
                                  ? asssign.group.name
                                  : asssign.user && asssign.user.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Description</label>
                          <Field
                            name='description'
                            as='textarea'
                            className='form-control'
                            readOnly
                          />
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group h-90'>
                          <label>Notes</label>
                          <input
                            style={{ height: '58px' }}
                            name='notes'
                            as='textarea'
                            className='form-control'
                            value={formdata}
                            onChange={e => setformdata(e.target.value)}
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
        ) : editMode ? (
          <ErrorModel
            show={errorshow}
            handleClose={() => handleErrorClose(false)}
          />
        ) : null
        // handleErrorModal(errorshow)
        }

        <FilterDrawer
          panel={panel}
          toggleDrawer={toggleDrawer}
          onSubmit={handleSubmit}
        />
        <TicketModel
          show={viewshow}
          handleClose={() => handleViewClose(false)}
          singleRow={singleRow}
          currentView={currentView}
        />

        <TicketModel
          show={searchshow}
          handleClose={() => handleSearchClose(false)}
          singleRow={singleRow}
          currentView={searchValue}
        />
        <SearchTicket
          show={searchidshow}
          handleClose={() => handleSearchIDClose(false)}
          singleRow={singleRow}
          currentView={searchIdValue}
        />
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const { report, common } = state;
  return {
    report_list: report && report.report_list ? report.report_list : [],
    setGlobalPackageName:
      common && common.setGlobalPackageName ? common.setGlobalPackageName : [],
  };
};
const mapDispatchToProps = channels => {};

export default connect(mapStateToProps)(Reports);
