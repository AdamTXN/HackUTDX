import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
)


const LineChart = ( {chartData, idealData}) => {
  const data = {
    labels: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    datasets: [{
      label: "User's Current Monthly Mortgage Spending ",
      data: [0, chartData],
      backgroundColor: 'black',
      borderColor: 'black',
      pointBorderColor: 'red',
      fill: false,
      tension: .4
    },
    {
       label: "User's Ideal Monthly Mortgage Spending",
       data: [0, idealData],
      backgroundColor: 'green',
       borderColor: 'green',
      pointBorderColor: 'red',
      fill: false,
      tension: .4,
    }]
  }

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      yAxes: {
        display: true,
        ticks: {
          min: 0,
          max: 10000,
        }
      },
      x: {
        display:true,
      }
    }
  }
  
  return <Line
      options={options}
      data={data}
      
    />
}

export default LineChart