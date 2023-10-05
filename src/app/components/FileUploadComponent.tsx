import React, { ChangeEvent, useState } from 'react';

interface FileUploadComponentProps {
  onFileUpload: (file: File) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({ onFileUpload }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadComponent;
