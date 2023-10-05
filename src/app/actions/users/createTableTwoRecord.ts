'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTableTwoRecord = async (articleVariant: string, idColor: string, size: string,quantity: string, igst: string, igstRate: string, mrp: number, eanCode: string, hsn: string, tableid: string) => {
    try {
        await prisma.table2.create({
            data: {
              articleVariant,
              idColor,
              size,
              quantity,
              igst,
              igstRate,
              mrp,
              eanCode,
              hsn,
              tableid
            },
        });

        return "Successfully created new table record!";
    } catch (error) {
        console.error(error);
        return "Error creating table record.";
    }
};
