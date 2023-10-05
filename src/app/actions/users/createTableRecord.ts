'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTableRecord = async (article: string, description: string, pricePerUnit: number, totalUnits: number, netValue: number, currency: string) => {
    try {
        await prisma.table1.create({
            data: {
                article,
                description,
                pricePerUnit,
                totalUnits,
                netValue,
                currency,
            },
        });

        return "Successfully created new table record!";
    } catch (error) {
        console.error(error);
        return "Error creating table record.";
    }
};
