'use server';

import prisma from '@/app/lib/prisma';

export const updateuser = async (id: string, newType: string) => {
    const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      userType: newType,
    },
  });

  return "Successfully  updated user!";


}