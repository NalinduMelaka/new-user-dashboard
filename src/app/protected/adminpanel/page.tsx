import React from 'react'
import Topcats from '@/app/components/Topcats'
import Abarchart from '@/app/components/Abarchart'
import prisma from '@/app/lib/prisma'
import Adoughnut from '@/app/components/Adoughnut'


type Props = {}

const Page =  async () => {

  const usersCount = await prisma.user.count({
    where: { userType: 'user' },
  });

  const managersCount = await prisma.user.count({
    where: { userType: 'manager' },
  });

  const adminsCount = await prisma.user.count({
    where: { userType: 'admin' },
  });
  
  return (
    <div className='bg-slate-200'> 
      <Topcats />
      <div className='flex'>
      <Abarchart admin={adminsCount} manager={managersCount} user={usersCount} />
      <Adoughnut admin={adminsCount} manager={managersCount} user={usersCount}/>
      </div>
    </div>
  )
}

export default Page