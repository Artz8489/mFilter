
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ProgressBar, Spinner, Row, Col, Button } from "react-bootstrap";
import { WidgetThree } from "./WidgetThree";
import { WidgetOne } from "./WidgetOne";
import { WidgetTwo } from "./WidgetTwo";
import { WidgetFour } from "./WidgetFour";
import { useSelector, useDispatch } from "react-redux";
import FilterDrawer from "../shared-componets/filterdrawer";
import "./styles.css";
import {
  FetchTotalRevenue,
  FetchTotalCost,
  FetchTotalEvents,
  FetchTotalClicks,
  FetchTotalPubevents,
  FetchTotalPubclicks,
  FetchTotalOverpubclicks,
  FetchTotalFraudpubclicks,
  FetchTotalEventpubclicks
} from "../../../../redux/actions/MtrackAction";
import moment from "moment";


const Dashboard = () => {
  const dispatch = useDispatch();
  const [publisher_name, setPublisherName] = useState("all");
  // const [campaign_name, setCampaignName] = useState("all");
  // const conversion_package_name = localStorage.getItem("dpackage");
  const data = {
    package_name: localStorage.getItem("dpackage"),
    // conversion_package_name: `web.biba.cp%C3%A5v&`,
    fromDate: '2022-05-08',
    toDate: '2022-07-08',
    campaign_id: 'all',
    publisher_name: 'all',
    event_type: 'all',
    fraud_status : 'all'
  };

  // https://devwebfraud.mfilterit.net/api/mtrackit/plots/total_revenue?
  // package_name=web.biba.cpv&toDate=2022-07-08&fromDate=2022-05-08&
  // publisher_name=all&campaign_id=all&event_type=all
  useEffect(() => {
    dispatch(FetchTotalRevenue(data));
    dispatch(FetchTotalCost(data));
    dispatch(FetchTotalEvents(data));
    dispatch(FetchTotalClicks(data));
    dispatch(FetchTotalPubevents(data));
    dispatch(FetchTotalPubclicks(data));
    dispatch(FetchTotalOverpubclicks(data));
    dispatch(FetchTotalFraudpubclicks(data));
    dispatch(FetchTotalEventpubclicks(data));
  }, [data.fromDate, data.toDate]);


  const handleSubmit = (data) => {
    // console.log(data,"submitwaladatahaitahhaua")
    // console.log(localStorage.getItem('startDate'),"submitwala")
    //     dispatch(FetchPublisherEvents(data))
    //     dispatch(FetchPublisherCosts(data))
    //     dispatch(FetchClickEventsPublisher(data))
    //     dispatch(FetchTotalClicks(data))

    //     dispatch(FetchTotalEvents(data))

    //     dispatch(FetchTotalRevenue(data))




  };
  // useEffect(() => {
  //   dispatch(FetchPublisherEvents(data));
  //   dispatch(FetchPublisherCosts(data));
  //   dispatch(FetchClickEventsPublisher(data));
  //   dispatch(FetchTotalClicks(data));

  //   dispatch(FetchTotalEvents(data));
  //   dispatch(FetchTotalRevenue(data));
  // }, [data.fromDate,data.toDate]);
  const dashboardData = useSelector((state) => state.dashboard.dashboardData);

  const revenue_data = useSelector((state) => state.revenue.revenue_data);
  console.log('revenue_datarevenue_data', revenue_data);
  const revenueloading = useSelector(
    (state) => state.revenue.revenueloading
  );

  const cost_data = useSelector((state) => state.revenue.cost_data);
  console.log('cost_data', cost_data);
  const costloading = useSelector(
    (state) => state.revenue.costloading
  );

  const events_data = useSelector((state) => state.revenue.events_data);
  const eventsloading = useSelector(
    (state) => state.revenue.eventsloading
  );

  const clicks_data = useSelector((state) => state.revenue.clicks_data);
  const clicksloading = useSelector(
    (state) => state.revenue.clicksloading
  );

  const pubevents_data = useSelector((state) => state.revenue.pubevents_data);
  const pubeventsloading = useSelector(
    (state) => state.revenue.pubeventsloading
  );

  const pubclicks_data = useSelector((state) => state.revenue.pubclicks_data);
  const pubclicksloading = useSelector(
    (state) => state.revenue.pubclicksloading
  );

  const overpubclicks_data = useSelector((state) => state.revenue.overpubclicks_data);
  const overpubclicksloading = useSelector(
    (state) => state.revenue.overpubclicksloading
  );

  const fraudpubclicks_data = useSelector((state) => state.revenue.fraudpubclicks_data);
  const fraudpubclicksloading = useSelector(
    (state) => state.revenue.fraudpubclicksloading
  );

  const eventpubclicks_data = useSelector((state) => state.revenue.eventpubclicks_data);
  const eventpubclicksloading = useSelector(
    (state) => state.revenue.eventpubclicksloading
  );

  console.log("revenue_dataccsccc", revenue_data)


  // console.log("revenue_dataccsccc", revenue_data)
  // console.log("events_data", events_data)
  // console.log("clicks_data", clicks_data)
  // console.log("pubevents_data", pubevents_data)
  // console.log("pubclicks_data __________---------", pubclicks_data)
  // console.log("overpubclicks_data", overpubclicks_data)
  console.log("fraudpubclicks_data", fraudpubclicks_data)
  console.log("eventpubclicks_data", eventpubclicks_data)


  


  
//   "event": [
//     {
//         "publisher_name": null,
//         "event_counts": 2
//     }
// ]


  console.log("overpubclicks _-------======--------=======-------------  ",
  // overpubclicks_data && overpubclicks_data[0].publisher_name && overpubclicks_data[0].publisher_names
  )






  // const publishercosts_data = useSelector(
  //   (state) => state.dashboard.publishercosts_data
  // );
  // const publisherevents_data = useSelector(
  //   (state) => state.dashboard.publisherevents_data
  // );

  // const totalrevenue_data = useSelector(
  //   (state) => state.dashboard.totalrevenue_data
  // );
  // const totalclicks_data = useSelector(
  //   (state) => state.dashboard.totalclicks_data
  // );

  // const totalevents_data = useSelector(
  //   (state) => state.dashboard.totalevents_data
  // );
  // const eventsclickspublisher_data = useSelector(
  //   (state) => state.dashboard.eventsclickspublisher_data
  // );
  const [panel, setPanel] = useState(true);
  const toggleDrawer = (e) => {
    setPanel(true);
  };



  const Bar = {
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",

        toolbar: {
          show: false,
        },
      },
      colors: ["#25890A"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,

        formatter: function (val) {
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

      legend: {
        show: true,
      },
      xaxis: {
        categories: [

        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };

  const Bar01 = {
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",

        toolbar: {
          show: false,
        },
      },
      colors: ["#EC3A3A"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,

        formatter: function (val) {
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

      legend: {
        show: true,
      },
      xaxis: {
        categories: [

        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };

  const Barplot01 = {
    series: [
      {
        name: "Clicks/Events over Publisher",
        data: []
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
        // events: {
        //   click: function (chart, w, e) { },
        // },
      },

      colors: ["#41B4AD"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,

        formatter: function (val) {
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

        colors: ["transparent"],
      },
      legend: {
        show: true,
      },

      xaxis: {
        categories: [],

        // axisTicks: {
        //   show: false,
        // },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };

  const Barplot02 = {
    series: [
      {
        name: "Frauds",
        data: [],
      },
      {
        name: "Event",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },

        dataLabels: {
          enabled: true,
          offsetX: 90,
        },
      },

      colors: ["#41B4AD", "#FF3A3A"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          dataLabels: {
            position: "top",
          },
        },
      },

      dataLabels: {
        enabled: true,

        formatter: function (val) {
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

        colors: ["transparent"],
      },

      xaxis: {
        categories: [],

        // axisTicks: {
        //   show: false,
        // },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };
 
  const Barplot03 = {
    series: [
      {
        name: "Frauds",
        data: [],
      },
      {
        name: "Event",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },

        dataLabels: {
          enabled: true,
          offsetX: 90,
        },
      },

      colors: ["#41B4AD", "#FF3A3A"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          dataLabels: {
            position: "top",
          },
        },
      },

      dataLabels: {
        enabled: true,

        formatter: function (val) {
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

        colors: ["transparent"],
      },

      xaxis: {
        categories: [],

        // axisTicks: {
        //   show: false,
        // },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };
  

  if (pubevents_data.length !== 0) {
    pubevents_data && pubevents_data.map(
      (subchannel, i) => (
        Bar.series[0].data.push(subchannel.count),
        Bar.options.xaxis.categories.push(subchannel.conversion_publisher_name)
      )
    );
  }
  if (pubclicks_data.length !== 0) {
    pubclicks_data && pubclicks_data.map(
      (subchannel, i) => (
        Bar01.series[0].data.push(subchannel.count),
        Bar01.options.xaxis.categories.push(subchannel.conversion_publisher_name)
      )
    );
  }
  if (overpubclicks_data.length !== 0) {
    overpubclicks_data && overpubclicks_data.map(
      (over, i) => (
        Barplot01.series[0].data.push(
          over.event_counts,
        ),
        Barplot01.options.xaxis.categories.push({
          publisher_name : over.publisher_name 
        })

        // // Barplot01.series[0].data.push(over.event_counts),
        // Barplot01.series.push( data[overpubclicks_data] ),

        // Barplot01.series.push(over.event_counts),
        // Barplot01.series.push(over.publisher_name),
        // Barplot01.options.xaxis.categories.push(over.publisher_name)
      )
    );
  }
  if (fraudpubclicks_data.length !== 0) {
    fraudpubclicks_data && fraudpubclicks_data.map(
      (over, i) => (
        Barplot02.series[0].data.push(
          over.Fraud
        ),
        Barplot02.series[1].data.push(
          over.Event,
        ),
        Barplot02.options.xaxis.categories.push({
          publisher_name : over.publisher 
        })

        // // Barplot01.series[0].data.push(over.event_counts),
        // Barplot01.series.push( data[overpubclicks_data] ),

        // Barplot01.series.push(over.event_counts),
        // Barplot01.series.push(over.publisher_name),
        // Barplot01.options.xaxis.categories.push(over.publisher_name)
      )
    );
  }
  
  if (eventpubclicks_data.length !== 0) {
    eventpubclicks_data && eventpubclicks_data.map(
      (over, i) => (
        Barplot03.series[0].data.push(
          over.Cost
        ),
        Barplot03.series[1].data.push(
          over.Revenue,
        ),
        Barplot03.options.xaxis.categories.push({
          publisher_name : over.publisher 
        })

        // // Barplot01.series[0].data.push(over.event_counts),
        // Barplot01.series.push( data[overpubclicks_data] ),

        // Barplot01.series.push(over.event_counts),
        // Barplot01.series.push(over.publisher_name),
        // Barplot01.options.xaxis.categories.push(over.publisher_name)
      )
    );
  }
  console.log('Barplot01', Barplot01)

  // if (fraudpubclicks_data.length !== 0) {
  //   overpubclicks_data && overpubclicks_data.map(
  //     (over, i) => (
  //       console.log("over------",over),
  //       Barplot02.series[0].data.push(over.Fraud),
  //       Barplot02.series[1].data.push(over.Event),
  //       Barplot02.options.xaxis.categories.push(over.publisher)
  //     )
  //   );
  // }
  // if (pubevents_data.length && pubevents_data.length > 0) {
  //   pubevents_data.data &&
  //   pubevents_data.data.map(
  //        (subchannel, i) => (
  //         Bar.series[0].data.push(subchannel.count),
  //         Bar.options.xaxis.categories.push(subchannel.conversion_publisher_name)
  //        )
  //      );
  //  }




  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="card">
          <div className="p-0 position-relative overflow-hidden">
            <div>
              <div
                className="card-rounded-bottom bg-danger"
                style={{ height: "auto" }}
              >
                <div className="card-header border-0 bg-danger py-5">
                  <h3 className="card-title font-weight-bolder text-white">
                    Dashboard
                  </h3>
                </div>
              </div>
              <div className="p-5 mt-n15">
                <div className="row m-0">
                  <div className="col bg-light-success px-6 py-8 rounded-xl mr-7 mb-7">
                    <div className="card">
                      <span className="text-center font-weight-bold font-size-h6 mt-6">
                        Total Cost
                      </span>

                      <WidgetOne
                        className="card-stretch card-stretch-half gutter-b"
                        symbolShape="circle"
                        baseColor="warning"
                      />
                      {costloading === true ? (
                        <p className="mt-5" style={{ marginLeft: "45%" }} >
                          <Spinner animation="border" variant="warning" />{" "}
                        </p>
                      ) : (
                        <h1 className="text-center text-primary  font-weight-bold font-size-h1 mt-5">
                          {/* {revenue_data && revenue_data.map((person) => <p>{person}</p>)} */}
                          {cost_data}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                    <div className="card">
                      <span className="text-center font-weight-bold font-size-h6 mt-6">
                        Total Revenue
                      </span>
                      <WidgetTwo
                        className="card-stretch card-stretch-half gutter-b"
                        symbolShape="circle"
                        baseColor="primary"
                      />
                      {revenueloading === true ? (
                        <p className="mt-5" style={{ marginLeft: "45%" }} >
                          <Spinner animation="border" variant="warning" />{" "}
                        </p>
                      ) : (
                        <h1 className="text-center text-primary  font-weight-bold font-size-h1 mt-5">
                          {/* {revenue_data && revenue_data.map((person) => <p>{person}</p>)} */}
                          {revenue_data}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7 mr-7">
                    <div className="card">
                      <span className="text-center font-weight-bold font-size-h6 mt-6">
                        Total Events
                      </span>
                      <WidgetThree
                        className="card-stretch card-stretch-half gutter-b"
                        symbolShape="circle"
                        baseColor="success"
                      />
                      {eventsloading === true ? (
                        <p className="mt-5" style={{ marginLeft: "45%" }} >
                          <Spinner animation="border" variant="warning" />{" "}
                        </p>
                      ) : (
                        <h1 className="text-center text-success font-weight-bold font-size-h1 mt-5">
                          {events_data}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7 mb-7">
                    <div className="card">
                      <span className="text-center font-weight-bold font-size-h6 mt-6">
                        Total Clicks
                      </span>
                      <div className="d-flex flex-column text-right newchart">
                        <WidgetFour
                          className="card-stretch card-stretch-half gutter-b"
                          symbolShape="circle"
                          baseColor="info"
                        />
                      </div>
                      {clicksloading === true ? (
                        <p className="mt-5" style={{ marginLeft: "45%" }} >
                          <Spinner animation="border" variant="warning" />{" "}
                        </p>
                      ) : (
                        <h1 className="text-center text-info font-weight-bold font-size-h1 mt-5">
                          {clicks_data}
                        </h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card">
          <div className="nit">
            <div style={{ marginRight: "20px" }}>
              <h5 className="text-left mt-5">Events</h5>
              <h6 className="text-left mt-5">Top 5 Publishers</h6>
              {pubeventsloading === false ? (
                <div>
                  {pubevents_data && pubevents_data.length > 0 ? (
                    <Chart
                      options={Bar.options}
                      series={Bar.series}
                      type="bar"
                      width="250"
                      height="350"
                    />
                  ) : (
                    <div className="text-center mt-5">
                      <h6 className="mt-5">No Data Found !</h6>
                    </div>
                  )}
                </div>
              ) : (
                <div className="content-loader" style={{ marginLeft: "-30%" }}>
                  <div className="loader-wrapper">
                    <Spinner animation="border" variant="warning" />
                  </div>
                </div>
              )}
            </div>

            <div>
              <h5 className="text-left mt-5">Costs</h5>
              <h6 className="text-left mt-5">Top 5 Publishers</h6>
              {/* <Chart
                options={Bar01.options}
                series={Bar01.series}
                type="bar"
                width="250"
                height="350"
              /> */}
              {pubclicksloading === false ? (
                <div>
                  {pubclicks_data && pubclicks_data.length > 0 ? (
                    <Chart
                      options={Bar01.options}
                      series={Bar01.series}
                      type="bar"
                      width="250"
                      height="350"
                    />
                  ) : (
                    <div className="text-center mt-5">
                      <h6 className="mt-5">No Data Found !</h6>
                    </div>
                  )}
                </div>
              ) : (
                <div className="content-loader" style={{ marginLeft: "-30%" }}>
                  <div className="loader-wrapper">
                    <Spinner animation="border" variant="warning" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card">
          <h5 className="text-center mt-5">Clicks/Events over Publisher </h5>
          {overpubclicksloading === false ? (
            <div>
              {overpubclicks_data && overpubclicks_data.length > 0 ? (
                console.log('overpubclicks_data', overpubclicks_data),
                <Chart
                  options={Barplot01.options}
                  series={Barplot01.series}
                  type="bar"
                  width="500"
                  height="375"
                />
              ) : (
                <div className="text-center mt-5">
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader" style={{ marginLeft: "-30%" }}>
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
          {/* <div className="nit">
            <div>
              <Chart
                options={Barplot.options}
                series={Barplot.series}
                type="bar"
                width="500"
                height="375"
              />
            </div>
          </div> */}
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="card">
          <h5 className="text-center mt-5">Events/Frauds over Publishers </h5>
          {fraudpubclicksloading === false ? (
            <div>
              {fraudpubclicks_data && fraudpubclicks_data.length > 0 ? (
                <Chart
                  options={Barplot02.options}
                  series={Barplot02.series}
                  type="bar"
                  width="500"
                  height="375"
                />
              ) : (
                <div className="text-center mt-5">
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader" style={{ marginLeft: "-30%" }}>
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}

          {/* <div>
            <Chart
              options={Barplot02.options}
              series={Barplot02.series}
              type="bar"
              width="500"
              height="400"
              colors="colors"
            />
          </div> */}
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} className="card">
          <h5 className="text-center mt-5">Revenue/Cost over Publishers </h5>
          {eventpubclicksloading === false ? (
            <div>
              {eventpubclicks_data && eventpubclicks_data.length > 0 ? (
                <Chart
                  options={Barplot03.options}
                  series={Barplot03.series}
                  type="bar"
                  width="500"
                  height="375"
                />
              ) : (
                <div className="text-center mt-5">
                  <h6 className="mt-5">No Data Found !</h6>
                </div>
              )}
            </div>
          ) : (
            <div className="content-loader" style={{ marginLeft: "-30%" }}>
              <div className="loader-wrapper">
                <Spinner animation="border" variant="warning" />
              </div>
            </div>
          )}
          {/* <div>
            <Chart
              options={Barplot01.options}
              series={Barplot01.series}
              type="bar"
              width="500"
              height="400"
              colors="colors"
            />
          </div> */}
        </Col>
      </Row>

      {/* <FilterDrawer panel={panel} toggleDrawer={toggleDrawer}   onSubmit={handleSubmit} /> */}
    </div>
  );
};

export default Dashboard;
