import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  const chartContainerStyle = {
    maxwidth: "100vh",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  };

  return (
    <div style={chartContainerStyle}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;