"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Props = {
  manager: number,
  admin: number,
  user: number
};

function Adoughnut({manager, admin, user}: Props){

  const data = {
    labels: ['Admin', 'User','Manager'],
    datasets:[{
      label:'Count',
      data:[admin,user,manager],
      backgroundColor: [
        'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'],
      borderColor: ['rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'],
      hoverOffset: 4
    }]
  }

  const options = {
    responsive: true,
  }

  return (
    <div className='  lg:h-[50vh] h-[40vh] m-5 p-4 border rounded-lg  bg-white w-2/5'>
      <Doughnut
      data ={data} 
      options={options}
      ></Doughnut>
    </div>
  );

}

export default Adoughnut;