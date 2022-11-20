import React from 'react';
import { Header, Pie as PieChart } from '../../components'
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisibility height="full"/>
    </div>
  )
}

export default Pie