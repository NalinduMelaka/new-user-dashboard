import { getServers } from 'dns'
import React from 'react'
import PDFComponent from '../../components/PDFComponent'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'



const DashboardPage = async () => {
  const session =  await getServerSession(authOptions)
  if(session?.user.userType !== 'manager' && session?.user.userType !== 'admin'){
    return (
      <div>
          This is protected and you do not have access to it.
      </div>
  )
   }

  return ( 
   <><PDFComponent /></>
  )
}

export default DashboardPage