
import React from 'react'
import prisma from '../lib/prisma'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export const revalidate = 60;

const EditUser = async () => {
  const users = await prisma.user.findMany();

  const handleRoleChange = async (userId: string, newRole: string) => {
    await prisma.user.update({
      where: { id: userId },
      data: { userType: newRole }
    });
  };


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>  
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
     
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr className="odd:bg-white even:bg-slate-50" key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/user/${user.id}`}>
                {user.userType}
                </Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditUser;
