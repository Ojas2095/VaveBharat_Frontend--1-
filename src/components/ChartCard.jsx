import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartCard = ({ title, labels, values, icon, bg = "bg-white" }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Penetration (%)',
        data: values,
        backgroundColor: '#4ade80' // Tailwind green-400
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <div className={`${bg} rounded-xl shadow-md p-6 transition-all duration-300 hover:scale-[1.02]`}>
      <h3 className="text-xl font-semibold text-green-700 mb-4">
        {icon} {title}
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartCard;
