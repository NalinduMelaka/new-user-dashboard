'use server';

import prisma from '@/app/lib/prisma';

export const uploadfile = async (filename: string, path: string,  userId : string) => {
  await prisma.upload.create({
      data: {
        filename,
          path,
          userId ,
      },
  });

  return "Successfully uploaded new pdf!";
};
