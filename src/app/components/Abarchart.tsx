"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  manager: number,
  admin: number,
  user: number
};

function Abarchart({manager, admin, user}: Props) {
  const chartData = {
    labels: ['Admin','User','Manager'],
    datasets: [
      {
        label: 'Accounts',
        data: [admin,user,manager],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235, 0.4)',
      },
    ],
  };

  const chartOptions ={
    plugins: {
      legend: {
        position: 'top'as const,
      },
      title: {
        display: true,
        text: 'Account count',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className=' lg:h-[50vh] h-[40vh] m-5 p-4 border rounded-lg w-3/5 bg-white'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default Abarchart;
