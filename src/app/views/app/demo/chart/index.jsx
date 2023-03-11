import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class DemoChart extends Component {

    chartRef = React.createRef();
    chartRef1 = React.createRef();
    chartRef2 = React.createRef();
    
    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Total",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: "False",
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    fill: "False",
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    fill: "False",
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    fill: "False",
                }]
            },
        });

        const ctx1 = this.chartRef1.current.getContext("2d");
        new Chart(ctx1, {
            type: "bar",
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Total",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: "False",
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    fill: "False",
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    fill: "False",
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    fill: "False",
                }]
            },
        });

        const ctx2 = this.chartRef2.current.getContext("2d");
        new Chart(ctx2, {
            type: "pie",
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Total",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: "False",
                }]
            },
        });

    }
    render() {
        return (
            <div className="card card-custom">
                <div className="form-group row">
                    <div className="col-md-6">
                        <canvas
                            id="myChart"
                            ref={this.chartRef}
                        />
                    </div>

                    <div className="col-md-6">
                        <canvas
                            id="myChart2"
                            ref={this.chartRef1}
                        />
                    </div>

                    <div className="col-md-6">
                        <canvas
                            id="myChart3"
                            ref={this.chartRef2}
                        />
                    </div>

                </div>
            </div>
        )
    }
}