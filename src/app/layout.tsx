'use client';
import './globals.css';

import Header from '@/components/layout/header';
import React from 'react';

const metadata = {
  title: 'Cross-Route Animation',
  description: 'Cross-Route Animations in Next.js 13 App Directory using Framer-Motion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="en" className='antialiased h-[100%]'>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="color-scheme" content="dark light" /> */}
          <meta name="description" content={metadata.description} />
          <meta name="theme-color" content="#000000" />
         

          <title>{metadata.title}</title>
        <body className={`h-100 min-h-[100%] bg-secondary`}>
          <Header/>
          
          <main className='h-100vh min-h-[100vh] my-20 px-6 py-4 max-w-2xl mx-auto'>
            {children}
          </main>
          
          <footer className='bottom-0 flex justify-center border-solid border-2 border-b-0 border-l-0 border-r-0 border-tertiary bg-primary py-2'>
            Footer Placeholder
          </footer>
        </body>
      </html>
  )
}
