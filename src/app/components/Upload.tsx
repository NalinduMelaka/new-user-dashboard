'use client';
import { getServerSession } from 'next-auth/next';
import React, { useState } from 'react';
import { uploadfile } from '../actions/users/uploadfile';
import { authOptions } from '../api/auth/[...nextauth]/route';


const  Upload = () => {

 

  const [filename, setFilename] = useState('');
  const [path, setPath] =useState('.');
  const [ userId ,setuserId]  = useState('clmrk7t7d0000t9zc4b58lbeh');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await uploadfile(filename, path,  userId );
    setMessage(message);
  }

  return (
    <div className='flex flex-col gap-4 bg-gray-400 p-4 max-w-md mx-auto m-10'>
      <input type="text"   className='form-radio h-5  text-indigo-600 w-full'placeholder='name'onChange={(e) => setFilename(e.target.value)}/>
      <input type="file" accept=".pdf"  />
      <button   className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>upload </button>
      <p>{message}</p>
    </div>
  );
};

export default Upload 
