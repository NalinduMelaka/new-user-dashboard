'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface TextData {
  Con?: string;
  'HO-CODE'?: string;
  'FABRIC ARTICLE'?: string;
  Barcode: string;
  'Product-ID'?: string;
  Description?: string;
  Brand?: string;
  'Total Number'?: string;
  Perc?: string;
  'FINAL QTY'?: string;
}

export const uploadDataToMongoDB = async (jsonData: TextData[]) => {
  for (const data of jsonData) {
    try {
      data.Barcode = data.Barcode.toString(); 
      data.Perc = data.Perc?.toString();
      data['FINAL QTY'] = data['FINAL QTY']?.toString();
      await prisma.text.create({
        data: {
          con: data.Con,
          HOCODE: data['HO-CODE'],
          FabricArticle: data['FABRIC ARTICLE'],
          barcode: data.Barcode,
          productid: data['Product-ID'],
          description: data.Description,
          brand: data.Brand,
          total: data['Total Number'],
          perc: data.Perc,
          final: data['FINAL QTY'],
        },
      });
    } catch (error) {
      console.error('Error uploading data to MongoDB:', error);
    }
  }
};
