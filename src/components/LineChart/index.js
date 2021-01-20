import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import './lineChart.scss';

const lineOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          drawBorder: true,
          lineWidth: 0,
          display: true,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawBorder: true,
          lineWidth: 1,
          display: true,
        },
      },
    ],
  },
  legend: {
    display: true,
  },
  tooltips: {
    enabled: true,
  },
  responsive: true,
};

const LineChart = ({ dataSource }) => {
  const data = {
    labels: dataSource?.forecast?.map(t => moment(t.time).format('HH:mm')) || [],
    background: '#fff',
    datasets: [
      {
        label: 'Temperature',
        fill: false,
        data: dataSource?.forecast?.map(t => t.temp_f) || [],
      },
    ],
  };

  return <Line data={data} options={lineOptions} />;
};

export default LineChart;
