import prisma from "@/app/lib/prisma";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from '@next-auth/prisma-adapter'



export const authOptions: AuthOptions = {
     

    providers: [
        CredentialsProvider({
            name: 'credentials',
            
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            authorize: async (credentials) => {
                if(!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                });

                if(!user) {
                    return null;
                }

                const userPassword = user.passwordHash;

                const userType = user.userType; 

                const isValidPassword = bcrypt.compareSync(password, userPassword);

                if(!isValidPassword) {
                    return null;
                }

                return {
                    email: user.email,
                    id: user.id,
                    userType: user.userType,
                    type: user.userType,
                };
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: 
    
    {
        async jwt(params: any) {
            if(params.user?.userType) {
                params.token.userType = params.user.userType;
                params.token.id = params.user.id; 
               
            }

            return params.token;
        },

        async session({ session, token}) {
            if(session.user) {   
             
              (session.user as {userType: string}).userType = token.userType as string;   
            }

            return session;
        }
        
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };