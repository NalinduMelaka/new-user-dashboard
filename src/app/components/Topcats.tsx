
import React, { useState, useEffect } from 'react'
import prisma from '@/app/lib/prisma'

type Props = {
}

const Topcats=  async () => { 
    const users = await prisma.user.count();
    const uploads = await prisma.upload.count();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dailyCount = await prisma.user.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });
    const dailyCountpost = await prisma.upload.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });


  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg'><div className='flex flex-col w-full p-4'>
        <p className='text-2xl font-bold'>{users}</p>
        <p className='text-gray-600'>Users</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 m-2 rounded-lg'>
         <span className='text-green-700 text-lg'>+{dailyCount}</span>
        </p>
        </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg'><div className='flex flex-col w-full p-4'>
        <p className='text-2xl font-bold'>{uploads}</p>
        <p className='text-gray-600'>Uploads</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 m-2 rounded-lg'>
         <span className='text-green-700 text-lg'>+{dailyCountpost}</span>
        </p>
        </div>
    </div>
  )
}

export default Topcats