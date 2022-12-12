import React from "react";
import Chart from "./Chart";

const ChartData = () => {
  const dataPoints = [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 20 },
    { label: 'Mar', value: 70 },
    { label: 'Apr', value: 100 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 60 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 15 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 13 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 95 },
  ];


  return (
    <div>
      <Chart dataPoints={dataPoints} />
    </div>
  )
}

export default ChartData;