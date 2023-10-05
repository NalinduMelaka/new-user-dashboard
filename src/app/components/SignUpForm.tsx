'use client';

import React, { useState } from 'react';
import { signUp } from '../actions/users/signUp';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [userType, setUserType] = useState('user'); // Default to 'user'

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserType(e.target.value);
    };

    const handleSubmit = async () => {
        setMessage("Signing up...");
        const message = await signUp(email, password, userType);
        setMessage(message);
    };

    return (
        <div className='flex flex-col gap-4 bg-gray-400 p-4 max-w-md mx-auto m-10'>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}  className='p-2 rounded border border-gray-300'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  className='p-2 rounded border border-gray-300'/>

            <div>
                <label className='inline-flex items-center'>
                    <input
                        type="radio"
                        value="admin"
                        checked={userType === 'admin'}
                        onChange={handleRadioChange}
                        className='form-radio h-5 w-5 text-indigo-600'
                    />
                    Admin
                </label>
                <label  className='inline-flex items-center'>
                    <input
                        type="radio"
                        value="user"
                        checked={userType === 'user'}
                        onChange={handleRadioChange}
                        className='form-radio h-5 w-5 text-indigo-600'
                    />
                    Normal User
                </label>
                <label  className='inline-flex items-center'>
                    <input
                        type="radio"
                        value="manager"
                        checked={userType === 'manager'}
                        onChange={handleRadioChange}
                        className='form-radio h-5 w-5 text-indigo-600'
                    />
                    Manager
                </label>
            </div>

            <button onClick={handleSubmit}  className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>Sign up</button>

            <p>{message}</p>
        </div>
    );
};

export default SignUpForm;
