import React from 'react';

interface DisplayFileComponentProps {
  uploadedFile: File | null;
}

const DisplayFileComponent: React.FC<DisplayFileComponentProps> = ({ uploadedFile }) => {
  if (!uploadedFile) return null;

  return (
    <div>
      <h2>Uploaded File</h2>
      <p>File Name: {uploadedFile.name}</p>
    </div>
  );
};

export default DisplayFileComponent;
