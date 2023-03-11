import React from "react";
import Chart from "react-apexcharts";
export default function Barplot01() {
  const series = [
    {
      name: "Revenue",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Costs",
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
      events: {
        click: function(chart, w, e) {},
      },
    },

    //
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
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
        // colors: ["#b30000" , "#3366ff"],
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
      categories: [
        "Demo_pub",
        "test_0991",
        "Demo_publisher",
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
          />
        </div>
      </div>
    </div>
  );
}
