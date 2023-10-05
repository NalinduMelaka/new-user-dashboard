import { getServers } from 'dns'
import React from 'react'
import Edituser from '../../components/Edituser'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'


const EdituserPage = async () => {
  const session =  await getServerSession(authOptions)
  if(session?.user.userType !== 'admin'){
     return (
      <div>
          This is protected and you do not have access to it.
      </div>
  )
     }
  return ( 
   <><Edituser /></>
  )
}

export default EdituserPage