import * as XLSX from 'xlsx';

export const convertExcelToJson = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target?.result;
      if (data) {
        try {
          const workbook = XLSX.read(data as string, { type: 'binary' });
          const sheetName = workbook.SheetNames[1];
          const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error('Unable to read file'));
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsBinaryString(file);
  });
};
