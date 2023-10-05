
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { UploadForm } from '@/app/components/UploadForm'
import { getServers } from 'dns'
import React from 'react'
import { getServerSession } from 'next-auth/next';



const DashboardPage = async () => {
   
  return ( 
   <><UploadForm /></>
  )
}

export default DashboardPage