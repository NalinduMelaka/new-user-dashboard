import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import { createTableRecord } from '../actions/users/createTableRecord'
import SecondTable from "./SecondTable";


const prisma = new PrismaClient();

const Table1: React.FC = () => {
  const generateRandomNumber = () => {
    const min = 1000000; // Minimum 7-digit number
    const max = 9999999; // Maximum 7-digit number
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [article, setArticle] = useState(generateRandomNumber().toString());
  const [description, setDescription] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [netValue, setNetValue] = useState("");
  const [showTable2, setShowTable2] = useState(false);

  // Update netValue whenever pricePerUnit or totalUnits change
  useEffect(() => {
    if (pricePerUnit && totalUnits) {
      setNetValue((parseFloat(pricePerUnit) * parseInt(totalUnits)).toString());
    } else {
      setNetValue("");
    }
  }, [pricePerUnit, totalUnits]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(e.target.value);
  };


  const handleEnterPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const randomArticleNumber = generateRandomNumber().toString();
        // Validate if all input fields are filled
        if (article && description && pricePerUnit && totalUnits && netValue && currency) {
            const result = await createTableRecord(article, description, parseFloat(pricePerUnit), parseInt(totalUnits), parseFloat(netValue), currency);

            if (result === "Successfully created new table record!") {
                alert(result);
                // Reset input fields
                setArticle("");
                setDescription("");
                setPricePerUnit("");
                setTotalUnits("");
                setNetValue("");
                setShowTable2(true);
            } else {
                alert(result);
            }
        } else {
            alert("Please fill in all fields.");
        }
    }
};

  return (
    <div>
    <table className="border border-gray-300 m-6">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Article</th>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">Price Per Unit</th>
          <th className="border border-gray-300 p-2">Total Units</th>
          <th className="border border-gray-300 p-2">Net Value</th>
          <th className="border border-gray-300 p-2">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="w-full"
              disabled
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              value={description}
              onChange={(e) => handleInputChange(e, setDescription)}
              className="w-full"
              onKeyPress={handleEnterPress}
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="number"
              value={pricePerUnit}
              onChange={(e) => handleInputChange(e, setPricePerUnit)}
              className="w-full"
              onKeyPress={handleEnterPress}
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="number"
              value={totalUnits}
              onChange={(e) => handleInputChange(e, setTotalUnits)}
              className="w-full"
              onKeyPress={handleEnterPress}
            />
          </td>
          <td className="border border-gray-300 p-2">{netValue}</td>
          <td className="border border-gray-300 p-2">{currency}</td>
        </tr>
      </tbody>
    </table>
    {showTable2 && <SecondTable yourProp={article} />}
    </div>
  );
};

export default Table1;
