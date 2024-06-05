// components/GenderPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const GenderPieChart = ({ data }) => {
  return (
    <div className="gender-pie-chart">
      <Pie data={data} />
    </div>
  );
}

export default GenderPieChart;
