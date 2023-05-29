import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cross-Route Animation',
  description: 'Cross-Route Animations in Next.js 13 App Directory using Framer-Motion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //-- Uncomment to Enable Service Worker
  // useEffect(() => {
  //   if(typeof window !== undefined && 'serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.js', { scope: '/' })
  //       .then((registration) => console.log('scope is: ', registration.scope));
  //   }
  // }, []);

  return (
    <html lang="en" className='antialiased'>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
