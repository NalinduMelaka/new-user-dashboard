import React, { useState } from "react";
import { createTableTwoRecord } from "../actions/users/createTableTwoRecord";

const SecondTable: React.FC<{ yourProp: string }>  = ({ yourProp }) => {
  const [rows, setRows] = useState([{ id: 1, articleVariant: "", idColor: "", size: "", quantity: "", igst: "", igstRate: "", eanCode: "" }]);
  

  const hsn = "62034200";

  const calculateMRP = (igst: number, igstRate: number) => {
    return igst * igstRate;
  };

  const generateArticleVariant = (article: string, index: number) => {
    const variantNumber = (index + 1).toString().padStart(3, "0");
    return `${yourProp}${variantNumber}`;
  };


  const handleEnterPress = async (index: number) => {
    const newRow = { id: rows.length + 1, articleVariant: generateArticleVariant(rows[0].articleVariant, index), idColor: "", size: "", quantity: "", igst: "", igstRate: "",eanCode: "" };
    setRows([...rows, newRow]);
    const val = parseFloat(calculateMRP(parseFloat(newRow.igst), parseFloat(newRow.igstRate)).toFixed(2));
    
    if(rows){
      const result = await createTableTwoRecord(
        newRow.articleVariant,
        newRow.idColor,
        newRow.size,
        newRow.quantity,
        newRow.igst,
        newRow.igstRate,
        val,
        newRow.eanCode,
        hsn,
        yourProp
      )
    }else {
      alert("Please fill in all fields.");
  }

    
  };

  return (
    <table className="border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Item</th>
          <th className="border border-gray-300 p-2">Article Variant</th>
          <th className="border border-gray-300 p-2">ID/Color</th>
          <th className="border border-gray-300 p-2">Size</th>
          <th className="border border-gray-300 p-2">Quantity</th>
          <th className="border border-gray-300 p-2">IGST</th>
          <th className="border border-gray-300 p-2">IGST Rate</th>
          <th className="border border-gray-300 p-2">MRP</th>
          <th className="border border-gray-300 p-2">EAN Code</th>
          <th className="border border-gray-300 p-2">HSN</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id}>
            <td className="border border-gray-300 p-2">{row.id}</td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={generateArticleVariant(rows[0].articleVariant, index)}
                readOnly
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.idColor}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].idColor = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.size}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].size = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.quantity}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].quantity = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.igst}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].igst = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.igstRate}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].igstRate = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">{calculateMRP(parseFloat(row.igst), parseFloat(row.igstRate)).toFixed(2)}</td>
            <td className="border border-gray-300 p-2">
              <input
                type="text"
                value={row.eanCode}
                onChange={(e) => {
                  const updatedRows = [...rows];
                  updatedRows[index].eanCode = e.target.value;
                  setRows(updatedRows);
                }}
                className="w-full"
              />
            </td>
            <td className="border border-gray-300 p-2">{hsn}</td>
            {index === rows.length - 1 && (
              <td className="border border-gray-300 p-2">
                <button onClick={() => handleEnterPress(index)}>Add Row</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SecondTable;
