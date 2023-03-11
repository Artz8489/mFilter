/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ProgressBar, Spinner, Row, Col, Button } from "react-bootstrap";
import FilterDrawer from "../shared-componets/filterdrawer";
import {
  FetchTotalIncidents,
  FetchIncidentVolumes,
  FetchActivecasesbychannel,
  FetchSubchannel,
  FetchToptenLocation,
  FetchCategorlevelcount,
  FetchPublisherlevelcount,
} from "../../../../redux/actions/DashboardActions";
import { FetchReport } from "../../../../redux/actions/ReportActions";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  getLocalStorage
} from "../../../utils/helpers"
import { FILTER_CATEGORY_SELECTED_VALUE } from "../../../utils/const";
import SVG from "react-inlinesvg";
import moment from "moment";
const Dashboard = () => {
  const didMount = React.useRef(false);
  const [channels, setChannels] = useState("all");
  const [categories, setCategories] = useState("all");
  const [publishers, setPublishers] = useState("all");
  const [countries, setCountries] = useState("all");
  const [brands, setBrands] = useState("all");
  const [priorities, setPriorities] = useState("all");
  const [status, setStatus] = useState("all");

  const [panel, setPanel] = useState(true);
  const dispatch = useDispatch();
  const [dashboarddata, setDashboarddata] = useState();
  const toggleDrawer = (e) => {
    setPanel(true);
  };
  const package_name = localStorage.getItem("dpackage");
  const handleSubmit = (data) => {
    dispatch(FetchTotalIncidents(data));
    dispatch(FetchIncidentVolumes(data));
    dispatch(FetchActivecasesbychannel(data));
    dispatch(FetchSubchannel(data));
    dispatch(FetchToptenLocation(data));
    dispatch(FetchCategorlevelcount(data));
    dispatch(FetchPublisherlevelcount(data));
    dispatch(FetchReport(data))
  };

  const openFilter = () => {
    setPanel(true);
  };
  // const data = {
  //     "package_name": localStorage.getItem('dpackage') ? localStorage.getItem('dpackage')  : "in.itcstore",
  //     "fromDate": localStorage.getItem("startDate"),
  //     "toDate": localStorage.getItem("endDate"),
  //     "country": countries,
  //     "category": categories,
  //     "publisher": publishers,
  //     "channel": channels,
  //     "brand": brands,
  //     "status": status,
  //     "priority": priorities
  // }
  const gertStartDate = localStorage.getItem("startDate");
  const d = new Date();
  const weekstartdate = d.setDate(d.getDate() - 7);
  const startDate = gertStartDate ? gertStartDate : moment(weekstartdate).format("YYYY-MM-DD");

  // const data = {
  //   package_name: localStorage.getItem("dpackage"),
  //   fromDate: startDate,
  //   // toDate: localStorage.getItem("endDate") == null ?  moment(new Date().format('YYYY-MM-DD')) : localStorage.getItem("endDate"),
  //   toDate: localStorage.getItem("endDate"),
  //   country: countries,
  //   category: categories,
  //   publisher: publishers,
  //   channel: channels,
  //   brand: brands,
  //   status: status,
  //   priority: priorities,
  // };

  const localSelectedFilterValues = JSON.parse(
    getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.SELECTED)
  );

  const data = {
    package_name: localStorage.getItem("dpackage"),
    toDate: localStorage.getItem("endDate") ? localStorage.getItem("endDate") : moment().format("YYYY-MM-DD") ,
    fromDate: startDate,
    'country': localSelectedFilterValues && localSelectedFilterValues.country && localSelectedFilterValues.country.length > 0 ?
    localSelectedFilterValues.country.sort().join(',')  : countries,
    'category': localSelectedFilterValues && localSelectedFilterValues.category && localSelectedFilterValues.category.length > 0 ?
    localSelectedFilterValues.category.sort().join(',') : categories,
    'publisher': localSelectedFilterValues && localSelectedFilterValues.publisher && localSelectedFilterValues.publisher.length > 0 ?
    localSelectedFilterValues.publisher.sort().join(',') : publishers,
    'channel': localSelectedFilterValues && localSelectedFilterValues.channel && localSelectedFilterValues.channel.length > 0 ?
    localSelectedFilterValues.channel.sort().join(',') : channels,
    'brand': localSelectedFilterValues && localSelectedFilterValues.brand && localSelectedFilterValues.brand.length > 0 ?
    localSelectedFilterValues.brand.sort().join(',') : brands,
    'status': localSelectedFilterValues && localSelectedFilterValues.status && localSelectedFilterValues.status.length > 0 ?
    localSelectedFilterValues.status.sort().join(',') : status,
    'priority': localSelectedFilterValues && localSelectedFilterValues.priority && localSelectedFilterValues.priority.length > 0 ?
    localSelectedFilterValues.priority.sort().join(',') : priorities
  };

  useEffect(() => {      
    if (startDate && package_name ) {
    const localSelectedAllValues = JSON.parse(
      getLocalStorage(FILTER_CATEGORY_SELECTED_VALUE.ALL_VALUES)
    );
    const payload = {
      ...data,
      ...localSelectedAllValues,
      package_name: localStorage.getItem("dpackage"),
      toDate: localStorage.getItem("endDate"),
      fromDate: startDate,
    }


      dispatch(FetchTotalIncidents(payload));
      dispatch(FetchIncidentVolumes(payload));
      dispatch(FetchActivecasesbychannel(payload));
      dispatch(FetchSubchannel(payload));
      dispatch(FetchToptenLocation(payload));
      dispatch(FetchCategorlevelcount(payload));
      dispatch(FetchPublisherlevelcount(payload));
  }
  }, [package_name]);
  const dashboardData = useSelector((state) => state.dashboard.dashboardData);

  const incident_data = useSelector((state) => state.dashboard.incident_data);
  const incidentloading = useSelector(
    (state) => state.dashboard.incidentloading
  );

  const incidentvolume_data = useSelector(
    (state) => state.dashboard.incidentvolumne_data
  );
  const incidentvolumeloading = useSelector(
    (state) => state.dashboard.incidentvolumneloading
  );

  const activecasebychannel_data = useSelector(
    (state) => state.dashboard.activecases_data
  );
  const activecaseloading = useSelector(
    (state) => state.dashboard.activecaseloading
  );

  const subchannel_data = useSelector(
    (state) => state.dashboard.subchannel_data
  );
  const subchannelloading = useSelector(
    (state) => state.dashboard.subchannelloading
  );

  const toptenlocation_data = useSelector(
    (state) => state.dashboard.toptenlocation_data
  );
  const toptenlocationloading = useSelector(
    (state) => state.dashboard.toptenlocation_loading
  );

  const categorylevelcount_data = useSelector(
    (state) => state.dashboard.categorylevelcount_data
  );
  const categorylevelcountloading = useSelector(
    (state) => state.dashboard.categorylevelcount_loading
  );

  const publisherlevelcount_data = useSelector(
    (state) => state.dashboard.publisherlevelcount_data
  );
  const publisherlevelcountloading = useSelector(
    (state) => state.dashboard.publisherlevelcount_loading
  );

  const barchartData = {
    series: [
      {
        name: "Incident Volume",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function(val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [], 
        labels: {
          style: {
        
            fontSize: '10px'
          }
        }    
      },   
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          // formatter: function (val) {
          //     return "$ " + val + " thousands"
          // }
        },
      },
    },
  };

  const donutchartData = {
    series: [],
    options: {
      chart: {
        width: 100,
        height:'200px',
        type: "donut",
        
      },
      colors: [
        "#1abc9c",
        "#FF4F33",
        "#FFF033",
        "#83FF33",
        "#33FFE0",
        "#336BFF",
        "#640861",
        "#D816A0",
        "#D81616",
        "#44FA00",
        "#581845",
        "#1B1C1E",
        "#7788DE",
        "#713C90",
        "#7F9E6F",
        "#7f8c8d",
      ],
      labels: [],

      states: {
        hover: {
          filter: "none",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],

      // fill: {
      //     colors:["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"]
      // },
    },
  };

  const subchannelChart = {
    series: [
      {
        name:'',
       data: [],
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: '100px',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          color: "black",
          columnWidth: "55%",
          dataLabels: {
            position: 'top',
            
          },
        },
      },
      dataLabels: {
        enabled: true,
            style: {
                colors: ['#333']
            },
            offsetX: 30
      },
      xaxis: {
        categories: [],
        labels: {
         show: false,
     }
      },
    },
  };

  const toptenLocationChart = {
    series: [
      {
        name: "Top10 Location",
        data: [],
      },
    ],
    grid: {
      show : true,
      xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
        lines: {
            show: false
        }
    }, 
    },
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          // borderRadius: 4,
          horizontal: true,
          // color: "black",
          columnWidth: "30%",
          barHeight: '22%',
          dataLabels: {
            position: "top", // top, center, bottom
            // left:"5%"
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#333']
      },
      offsetX: 40
      },
      xaxis: {
        categories: [],
        labels: {

          show: false,
        
               

      },
      
      },
      
    },
  };

  


  if (incidentvolume_data.length !== 0) {
    incidentvolume_data &&
      incidentvolume_data.map(
        (incvoulume, i) => (
          barchartData.series[0].data.push(incvoulume.count),
          barchartData.options.xaxis.categories.push(moment(incvoulume.inserted_date).format("DD-MM-YYYY")
            )
        )
      );
  }

  if (activecasebychannel_data.length !== 0) {
    activecasebychannel_data &&
      activecasebychannel_data.map(
        (activecases, i) => (
          donutchartData.series.push(activecases.count),
          donutchartData.options.labels.push(activecases.channel_name)
        )
      );
  }

  if (subchannel_data.length && subchannel_data.length > 0) {
    subchannel_data &&
      subchannel_data
        .map(
          (subchannel, i) => (
            subchannelChart.series[0].data.push(subchannel.count),
            subchannelChart.options.xaxis.categories.push(
              subchannel.sub_channel_name
            )
            // subchannelChart.series[0].data.push(subchannel.count),
            // subchannelChart.options.xaxis.categories.push(
            //   subchannel.sub_channel_name
            // )
          )
        );
  }

  if (toptenlocation_data.length !== 0) {
    toptenlocation_data &&
      toptenlocation_data.map(
        (toptenlocation, i) => (
          // toptenlocation_data.sort((a, b) => (a.count < b.count ? 1 : -1)),
          toptenLocationChart.series[0].data.push(toptenlocation.count),
          toptenLocationChart.options.xaxis.categories.push(
            toptenlocation.location
          )
        )
      );
  }
 

  return (
    <div>
      {/* <Button onClick={openFilter}>
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                    <SVG src={toAbsoluteUrl("media/svg/icons/Text/Filter.svg")} />
                </span>
            </Button> */}
      <Row gutter={[8, 8]}>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} style={{}} className="card">
          <div className="p-0 position-relative overflow-hidden">
            <div>
              <div
                className="card-rounded-bottom bg-danger"
                style={{ height: "auto" }}
              >
                <div className="card-header border-0 bg-danger py-5">
                  <h3 className="card-title font-weight-bolder text-white">
                    Incidents
                  </h3>
                </div>
              </div>
              <div className="p-5 mt-n15">
                <div className="row m-0">
                  <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                    <span className="text-warning font-weight-bold font-size-h6">
                      Total Incidents
                    </span>
                    {incidentloading === true ? (
                      <div className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </div>
                    ) : (
                      <h1 className="text-warning font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.total}
                      </h1>
                    )}
                  </div>
                  <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                    <span className="text-primary font-weight-bold font-size-h6 mt-2">
                      Active Cases
                    </span>
                    {incidentloading === true ? (
                      <div className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </div>
                    ) : (
                      <h1 className="text-primary font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.active}
                      </h1>
                    )}
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                    <span className="text-danger font-weight-bold font-size-h6 mt-2">
                      Resolved Cases
                    </span>
                    {incidentloading === true ? (
                      <div className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </div>
                    ) : (
                      <h1 className="text-danger font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.resolved}
                      </h1>
                    )}
                  </div>
                  <div className="col bg-light-success px-6 py-8 rounded-xl">
                    <span className="text-success font-weight-bold font-size-h6 mt-2">
                      In Progress
                    </span>
                    {incidentloading === true ? (
                      <div className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </div>
                    ) : (
                      <h1 className="text-success font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.progress}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7} className="card">
          <h5 className="text-center mt-5">Incident Volume</h5>
          {incidentvolumeloading === false ? (
            <div style={{ maxWidth: "100%", overflowX: "auto" }}>
              {incidentvolume_data && incidentvolume_data.length > 0 ? (
                <Chart
                  width={700}
                  options={barchartData.options}
                  series={barchartData.series}
                  type="bar"
                  height='250'
                />
              ) : (
                <div className="text-center mt-5">
                  {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader">
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card" style={{ minHeight: "100%" }}>
          <h5 className="text-center mt-5">Active Cases By Channels</h5>
          {activecaseloading === false ? (
            <div>
              {activecasebychannel_data &&
              activecasebychannel_data.length > 0 ? (
                <Chart
                  options={donutchartData.options}
                  series={donutchartData.series}
                  type="donut"
                />
              ) : (
                <div className="text-center mt-5 ">
                  {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader">
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card" style={{minHeight:'100%'}}>
          <h5 className="text-center mt-5">Sub Channels</h5>
          {subchannelloading === false ? (
            <div>
              {subchannel_data && subchannel_data.length > 0 ? (
                <Chart
                  options={subchannelChart.options}
                  series={subchannelChart.series}
                  type="bar"
                />
              ) : (
                <div className="text-center mt-5">
                  {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader">
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
        </Col>

        <Col
          xs={6}
          sm={6}
          md={6}
          lg={3}
          xl={4}
          className="card"
          style={{ height: "600px" }}
        >
          <h5 className="text-center mt-5">Top 10 Locations</h5>
          {toptenlocationloading === false ? (
            <div>
              {toptenlocation_data && toptenlocation_data.length > 0 ? (
                <Chart
                  height={555}
                  options={toptenLocationChart.options}
                  series={toptenLocationChart.series}
                  type="bar"
                />
              ) : (
                <div className="text-center mt-5">
                  {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader">
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
          className="card pt-5 pr-5 pl-5"
          style={{ height: "600px" }}
        >
          <Col>
            <div>
              <div className="card-header border-0 p-0">
                <Row>
                  <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                    <h5 className="d-flex text-center text-nowrap ml-8">Category Level Count</h5>
                  </Col>
                  <Col>
                    {/* <div className="d-flex flex-column text-right">
                      <span className="text-dark-75 font-weight-bolder font-size-h4">
                        {categorylevelcount_data.total_active_cases}
                      </span>
                      <span className="text-muted font-size-sm font-weight-bolder">
                        Total Active Cases
                      </span>
                    </div> */}
                  </Col>
                </Row>
              </div>
              {categorylevelcountloading === false ? (
                <div
                  className="card-body p-0  mb-5"
                  style={{ maxHeight: "480px", overflowY: "auto" }}
                >
                  {categorylevelcount_data && categorylevelcount_data.result &&
                  categorylevelcount_data.result.length === 0 ? (
                    <div className="text-center mt-5">
                      {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                      <h6 className="mt-5">No Data Found !</h6>
                    </div>
                  ) : (
                    categorylevelcount_data && categorylevelcount_data.result &&
                    categorylevelcount_data.result.map((category, i) => (
                      <div className="mb-5" key={i}>
                        <h6 className="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                          {category.category}
                        </h6>
                        <div className="font-weight-bold text-muted font-size-sm">
                          <span className="text-dark-75 font-size-h2 font-weight-bolder mr-2">
                            {category.active_cases} -
                          </span>
                          Active Cases
                        </div>
                        <ProgressBar
                          now={category.active_cases}
                          variant="warning"
                        />
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="content-loader">
                  <div className="loader-wrapper">
                    <Spinner animation="border" variant="warning" />
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
          className="card pt-5 pr-5 pl-5"
          style={{ height: "600px" }}
        >
          <Col>
            <div className="card-header border-0 p-0 ">
              <Row>
                <Col xs={7} sm={7} md={7} lg={7} xl={5}>
                  <h5 className="d-flex text-center text-nowrap ml-9">Publisher level Count</h5>
                </Col>
                <Col>
                  {/* <div className="text-right">
                    <span className="text-dark-75 font-weight-bolder font-size-h4">
                      {publisherlevelcount_data.total_active_cases}
                    </span>
                    <span className="text-muted font-size-sm font-weight-bolder">
                      Total Active Cases
                    </span>
                  </div> */}
                </Col>
              </Row>
            </div>
            {publisherlevelcountloading === false ? (
              <div
                className="card-body p-0  mb-5"
                style={{ maxHeight: "460px", overflowY: "auto" }}
              >
                {publisherlevelcount_data && 
                publisherlevelcount_data.result &&
                publisherlevelcount_data.result.length === 0 ? (
                  <div className="text-center mt-5">
                    {/* <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" /> */}
                    <h6 className="mt-5">No Data Found !</h6>
                  </div>
                ) : (
                  publisherlevelcount_data && publisherlevelcount_data.result &&
                  publisherlevelcount_data.result.map((publisher, i) => (
                    <div className="mb-5" key={i}>
                      <h6 className="card-title font-weight-bolderfont-size-h6 mb-5 d-block">
                        {publisher.publisher}
                      </h6>
                      <div className="font-weight-bold text-muted font-size-sm">
                        <span className="text-dark-75 font-size-h2 font-weight-bolder mr-2">
                          {publisher.active_cases} -
                        </span>
                        Active Cases
                      </div>
                      <ProgressBar
                        now={publisher.active_cases}
                        variant="warning"
                      />
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="content-loader">
                <div className="loader-wrapper">
                  <Spinner animation="border" variant="warning" />
                </div>
              </div>
            )}
          </Col>
        </Col>
      </Row>
          <FilterDrawer
            panel={panel}
            toggleDrawer={toggleDrawer}
            onSubmit={handleSubmit}
          />
    </div>
  );
};

export default Dashboard;
