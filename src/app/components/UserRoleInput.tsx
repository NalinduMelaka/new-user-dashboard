'use client'

import React, { useState } from 'react';
import { updateuser } from '../actions/users/updateuser';


type Props = {
  idnumber?: string;
}

const UserRoleInput = ({idnumber}: Props) => {
  const [role, setRole] =  useState('');
  const [message, setMessage] = useState('');
  
 

  const handleSubmit = async () => {
    if (idnumber) {
      setMessage("Changing...");
      const response = await updateuser(idnumber, role);
      setMessage(response);
    } else {
      setMessage("ID number is not available");
    }
  };

  return (
    <>
    <input
          className="border border-gray-300 p-2 mr-2 rounded-md"
          type="text"
          placeholder="New Role"
          onChange={(e) => setRole(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit} >
          Update Role
        </button>
        <p>{message}</p>
    </>
  )
}

export default UserRoleInput