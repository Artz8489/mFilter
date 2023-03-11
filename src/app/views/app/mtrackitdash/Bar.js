import React from "react";
import Chart from "react-apexcharts";
export default function Bar() {
  const series = [
    {
      data: [70, 60, 32, 20, 9],
    },
  ];
  const options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30, 56, 78, 56],
      },
    ],
    chart: {
      height: 350,
      type: "bar",

      toolbar: {
        show: false,
      },
    },
    colors: ["#118819"],

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

    legend: {
      show: true,
    },
    xaxis: {
      categories: [
        "demo_p",
        "demo_p",
        "demo_p",
        "test_affiliate",
        "test_affiliate",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            type="bar"
            series={series}
            width="250"
            height="350"
          />
        </div>
      </div>
    </div>
  );
}
