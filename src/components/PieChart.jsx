import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  const chartContainerStyle = {
    width: "80%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  };

  return (
    <div style={chartContainerStyle}>
      <Pie data={chartData} />
    </div>
  );
}


export default PieChart;