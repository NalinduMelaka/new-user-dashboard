
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import prisma from '../../lib/prisma';
import { PrismaClient } from '@prisma/client';
import UserRoleInput from '@/app/components/UserRoleInput';



type Props = {
  params: { id: string}
}

const getUser = async ( id: string) => {
  const user = await prisma.user.findUnique({
    where: {id}
  });

  if(!user){
    console.log("user is not found")
    return null;
  }
  


  return user;
}

const updateUserRole = async (id: string, newRole: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { userType: newRole }
    });
    return updatedUser;
  } catch (error) {
    console.error('Error updating user role:', error);
    return null;
  }
}


const  page = async ({ params }: Props) => {
  const { id } = params;
  const users = await getUser(id);
  const userType = users?.userType;

  


  
  return (
    <>
    <div className="bg-gray-100 p-4 mb-4 rounded-md  justify-center h-96">
      <h2 className="text-xl font-bold mb-2">User Details</h2>
      <div className="mb-2">
        <span className="font-bold">ID:</span> {id}
      </div>
      <div className="mb-2">
        <span className="font-bold">Role:</span> {userType}
      </div>
      <div className="mb-2">
        <span className="font-bold">Email:</span> {users?.email}
      </div>
      <div className="flex items-center">
        <UserRoleInput idnumber={id}/>
      </div>
    </div>
  </>
  )
}

export default page