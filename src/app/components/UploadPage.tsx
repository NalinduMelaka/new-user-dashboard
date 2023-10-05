import React, { useState } from 'react';
import FileUploadComponent from '../components/FileUploadComponent';
import DisplayFileComponent from '../components/DisplayFileComponent';
import DataTable from '../components/DataTable'; // Import the DataTable component
import { convertExcelToJson } from '../utils/excelToJson';
import { uploadDataToMongoDB } from '../utils/uploadDataToMongoDB';

const UploadPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jsonResult, setJsonResult] = useState<any[]>([]);

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);

    try {
      const jsonData = await convertExcelToJson(file);
      console.log('JSON Data:', jsonData);
      setJsonResult(jsonData);
      await uploadDataToMongoDB(jsonData);
      console.log('Data uploaded to MongoDB successfully');
    } catch (error) {
      console.error('Error converting Excel to JSON:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Excel File</h1>
      <FileUploadComponent onFileUpload={handleFileUpload} />
      <DisplayFileComponent uploadedFile={uploadedFile} />
      {jsonResult.length > 0 && (
        <div>
          {/*<h2 className="text-xl font-bold mt-4">JSON Result</h2>*}
          {/*<pre>{JSON.stringify(jsonResult, null, 2)}</pre>*/}

          <h2 className="text-xl font-bold mt-4">Data in Table</h2>
          <DataTable data={jsonResult} /> {/* Render the DataTable component */}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
