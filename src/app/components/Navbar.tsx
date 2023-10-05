import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

const Navbar = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);

    

    return (
        <div className='w-full px-4 py-8 bg-blue-400 flex flex-row items-center justify-between'>
            <Link href='/' className='text-white font-bold text-xl'>Home</Link>
            
           
            {session && session.user?.email ? (
                <>
                    <Link href='/protected/dashboard' className='mx-4 text-white'>Dashboard</Link>

                    <Link href='/protected/userlist' className='mx-4 text-white'>PDFList</Link>
                   {session.user?.userType === "admin" ? (<><Link href='/protected/adminpanel' className='mx-4 text-white'>AdminPanel</Link> <Link href='/protected/edituser' className='mx-4 text-white'>EditUser</Link> </>
                   ):(<></>)}
                    <Link href='/protected/uploadexcel' className='mx-4 text-white'>UploadExcel</Link>
                    <Link href='/protected/addarticle' className='mx-4 text-white'>AddArticle</Link>

                    <Link href='/auth/signout' className='mx-4 text-white'>Sign out</Link>
                    <p className='text-black-300'>
                        <b >Signed in as {session.user?.userType}</b>
                      
                        
                    </p>
                </>
            ) : (
                <>
                  <div className='flex items-center'>
                    <Link href='/auth/signin' className='mx-4 text-white'>Sign in</Link>
                    <Link href='/auth/signup' className='mx-4 text-white'>Sign up</Link>
                    </div>
                </>
            )}
             
        </div>
    );
};

export default Navbar;
