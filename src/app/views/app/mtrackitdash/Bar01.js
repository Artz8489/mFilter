import React  from "react";
import Chart from "react-apexcharts";

export default function Bar01() {
  const series = [
    {
      data: [70, 60, 32, 20, 9],
    },
  ];
  const options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
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

    legend: {
      show: false,
    },

    colors: ["#36486b"],
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

      colors: ["transparent"],
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
            series={series}
            type="bar"
            width="250"
            height="350"
          />
        </div>
      </div>
    </div>
  );
}
