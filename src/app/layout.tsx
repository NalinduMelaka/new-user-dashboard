import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'OceanEdge',
    description: 'OceanEdge order management system web app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='h-screen'>
            <body className={inter.className}>
                <Navbar />
                <Provider>
                    <main className='h-screen'>
                    {children}
                    </main>
                </Provider>
                <Footer />
            </body>
        </html>
    );
}
