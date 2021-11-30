import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
)

const data = {
  labels: Array.from({ length: 22 }, (_, i) => `${i + 1}`),
  datasets: [
    {
      data: Array.from({ length: 22 }, (_, i) => i * Math.random() * 5),
      fill: false,
      backgroundColor: '#FC3C8D',
      borderColor: '#FC3C8D'
    },
    {
      data: Array.from({ length: 22 }, (_, i) => i * Math.random() * 5),
      fill: false,
      backgroundColor: '#A4A6B3',
      borderColor: '#A4A6B3'
    }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {}
  }
}

export function LineChart() {
  return <Line data={data} options={options} />
}
