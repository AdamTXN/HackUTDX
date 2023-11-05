import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

/*function PieChart({ chartData }) {
  return <Pie data={chartData} />
}*/

function PieChart({ chartData }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;