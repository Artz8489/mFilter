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
          
          data: [10,50,4,67,14,56,21,77,43]
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