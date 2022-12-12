import React from "react";
import './Chart.css';

const Chart = (props) => {
  return (
    <div className="chart">

      {props.dataPoints.map(dataPoint => {
        return (
          <div className="chart-bar">
            <div className="chart-bar__inner">
              <div className="chart-bar__fill" style={{ height: dataPoint.value }}></div>
            </div>
            <div className="chart-bar-label">{dataPoint.label}</div>
          </div>
        )

      })
      }

    </div>

  )
}

export default Chart;