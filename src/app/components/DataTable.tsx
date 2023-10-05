import React from 'react';

interface DataTableProps {
  data: any[]; 
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="min-w-full border border-gray-300">
  <thead className="bg-gray-100">
    <tr>
      {headers.map((header, index) => (
        <th key={index} className="border p-2">
          {header}
        </th> 
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {headers.map((header, colIndex) => (
          <td key={colIndex} className="border p-2">
            {row[header]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default DataTable;
