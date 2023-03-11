import React, { useState, useEffect } from "react";
import { ProgressBar, Spinner, Row, Col, Button } from "react-bootstrap";
import Chart from "react-apexcharts";

const Dashboard = () => {
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
                                <div class="card-header border-0 bg-danger py-5">
                                    <h3 class="card-title font-weight-bolder text-white">
                                        Incidentsllllllllllllllllllllllllllllllllllllllllllllllll
                                    </h3>
                                </div>
                            </div>
                            <div className="p-5 mt-n15">
                                <div className="row m-0">
                                    <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                                        <span className="text-warning font-weight-bold font-size-h6">
                                            Total Incidents
                                        </span>
                                        {/* {incidentloading === true ? (
                           <p className="mt-5">
                           <Spinner animation="border" variant="warning" />{" "}
                            </p>
                             ) : (
                            <h1 className="text-warning font-weight-bold font-size-h1 mt-5">
                            {incident_data && incident_data?.total}
                            </h1>
                            )} */}
                                        <h1 className="text-warning font-weight-bold font-size-h1 mt-5">
                                            {/* {incident_data && incident_data?.total} */}0
                                        </h1>
                                    </div>
                                    <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                        <span className="text-primary font-weight-bold font-size-h6 mt-2">
                                            Active Cases
                                        </span>
                                        {/* {incidentloading === true ? (
                      <p className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </p>
                    ) : (
                      <h1 className="text-primary font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.active}
                      </h1>
                    )} */}
                                        <h1 className="text-primary font-weight-bold font-size-h1 mt-5">
                                            {/* {incident_data && incident_data?.active} */}0
                                        </h1>
                                    </div>
                                    <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                                        <span className="text-danger font-weight-bold font-size-h6 mt-2">
                                            Resolved Cases
                                        </span>
                                        {/* {incidentloading === true ? (
                      <p className="mt-5">
                        <Spinner animation="border" variant="warning" />{" "}
                      </p>
                    ) : (
                      <h1 className="text-danger font-weight-bold font-size-h1 mt-5">
                        {incident_data && incident_data?.resolved}
                      </h1>
                    )} */}
                                        <h1 className="text-danger font-weight-bold font-size-h1 mt-5">
                                            {/* {incident_data && incident_data?.resolved} */}0
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default Dashboard;
