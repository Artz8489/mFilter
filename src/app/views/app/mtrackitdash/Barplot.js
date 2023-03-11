import React from "react";
import Chart from "react-apexcharts";
export default function SampleLine() {
  const series = [
    {
      data: [90, 78, 56, 45, 32, 21, 11, 9],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",

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
        "demo_p2",
        "demo_p1",
        "demo_publisher",
        "Test_affiliate1",
        "demo_publisher",
        "demo_pub",
      ],
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
            height="375"
          />
        </div>
      </div>
    </div>
  );
}
