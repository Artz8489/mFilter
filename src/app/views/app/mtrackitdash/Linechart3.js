import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options : {
   
        chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
          },
       
       
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      yaxis:{
        labels: {
            show: false,
        }
      },
      xaxis:{
        labels: {
            show: false,
        },
        axisBorder: {
          show: false
        },
      
      },

      grid: {
        yaxis: {
          lines: {
            show: false
          }
        }
      },
   
     
      plotOptions: {
    
        fill: {
            colors: ['#E91E63']
          }
      },

     
      },

      
     
     
      series: [
        {
          
          data: [3,56,23,90,76,21,56,78,43,1]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="200"
            
           
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;