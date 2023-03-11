import React from "react";
import Chart from "react-apexcharts";
export default function Barplot02() {
  const series = [
    {
      name: "Events",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Frauds",
      data: [76, 85, 101, 98, 87, 10],
    },
  ];
  const options = {
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

    colors: ["#6b5b95", "#bc5a45"],
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

      colors: ["transparent"],
    },

    xaxis: {
      categories: [
        "demo_p",
        "test_0991",
        "demo_publisher",
        "Test_affiliate",
        "Test_affiliate1",
        "demo_publisher",
      ],

      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
            height="400"
            colors="colors"
          />
        </div>
      </div>
    </div>
  );
}
