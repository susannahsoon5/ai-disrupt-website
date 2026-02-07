import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
    title: 'GenAI Community',
    description: 'Connect with like-minded individuals, share knowledge, and explore the future of AI together.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}