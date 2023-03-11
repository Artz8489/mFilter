import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
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
import { Link , useHistory} from 'react-router-dom'
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../src/_metronic/_helpers/index";
import {
  FetchGetCampaign ,
  FetchDeleteCampaign
} from "../../../../../redux/actions/CampaignAction";
import _ from "lodash";
import swal from 'sweetalert';
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";





const { SearchBar } = Search;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
  };
  return (
    <Button
      onClick={handleClick}
      className="ml-5"
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
const Campaign = (props) => {

  const dispatch = useDispatch();
  const campaignGet_data = useSelector((state) => state.campaign.campaignGet_data);
  const campaignGet_loading = useSelector((state) => state.campaign.campaignGet_loading);
  const campaigndata = campaignGet_data && campaignGet_data.data
  console.log("campaignGet_data", campaignGet_data)
  console.log("campaigndata", campaigndata)


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

  ];

  useEffect(() => {
    dispatch(FetchGetCampaign());
    localStorage.removeItem('CampaignIdValue')
  }, [])
 
  const handleEditShow = (e, row) => {
    localStorage.setItem('CampaignIdValue', JSON.stringify(row))
  }

    const DeleteId = (e, row) => {
      const id = row && row.id
      console.log("scscscsccsc", id)
  
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        
      })
      .then(result => {
        if (result) {
          dispatch(FetchDeleteCampaign(id));
          setTimeout(() =>  dispatch(FetchGetCampaign()) , 1000)
        } else {
          dispatch(FetchGetCampaign());
        }
      })
    }

  const columns = [
    {
      dataField: "customer_name",
      text: "Lists",
      sort: true,
    },
    {
      dataField: "Edit / View",
      text: "Edit / Delete",
      style: {
        width: '10%',
      },
      formatter: (cellContent, row) => {
        return (
          <>
          
            {/* <button type="button"
              // onClick={(e) => handleEditShow(e, row)}
              class="btn btn-outline-secondary btn-icon btn btn-icon btn-light">
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG pointer-events="none"
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Write.svg"
                  )}
                ></SVG>
              </span>
            </button> */}
             <Link
              to={`/mtrackit/updateCampaign/${row.id}`}
              onClick={(e) => handleEditShow(e, row)}
            >
              <button type="button"
                class="btn btn-outline-secondary btn-icon btn btn-icon btn-light">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  <SVG pointer-events="none"
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Write.svg"
                    )}
                  ></SVG>
                </span>
              </button>
            </Link>
            &nbsp;
            &nbsp;
            <button type="button"
              onClick={(e) => DeleteId(e, row)}
              class="btn btn-outline-secondary btn-icon btn btn-icon btn-light">
              <span className="svg-icon svg-icon-md svg-icon-primary ">
                <SVG pointer-events="none"
                  src={toAbsoluteUrl("/media/svg/icons/Home/Trash.svg")}>
                </SVG>
              </span>
            </button>
            {/* </div> */}
            {/* </div> */}
          </>


        );
      }
    },
  ];
  return (
    <>
      <div className="card  card-custom">
        <Card>
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={campaigndata}
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
                  !campaignGet_loading ? (
                    !_.isEmpty(campaigndata) ? (
                      <>
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
                          <Link to='/mtrackit/addCampaign'>
                            <Button className={"ml-5"}>
                               Add Campaign
                            </Button>
                          </Link>


                          <BootstrapTable
                            {...props.baseProps}
                            pagination={paginationFactory(options)}
                            filter={filterFactory()}
                            noDataIndication="There is no solution"
                            striped
                            hover
                            condensed
                          />
                        </div>
                      </>
                    ) : (
                      <p class="text-center p-5 mt-5">no records found</p>
                    )
                  ) : (
                    <div className="text-center p-5 mt-5">
                      {/* <Spinner animation="border" variant="warning" /> */}
                      <div
                        className='spinner-border text-primary m-5 '
                        role='status'
                      />
                    </div>
                  )
                }
              </CardBody>
            )}
          </ToolkitProvider>
        </Card>
      </div>
    </>
  );
};
export default Campaign;
