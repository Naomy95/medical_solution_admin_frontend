// components/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data, options }) => {
  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
