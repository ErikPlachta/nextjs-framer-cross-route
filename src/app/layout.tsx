import Link from 'next/link'
import './globals.css'

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
    <html lang="en" className='antialiased h-[100%]'>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="color-scheme" content="dark light" /> */}
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#000000" />
        
        
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}

        <title>{metadata.title}</title>
      <body className={`h-100 min-h-[100%] bg-primary`}>
        <header className='bg-secondary p-2'>
          <Link href="/"><h1>{metadata.title}</h1></Link>
        </header>
        
        {/*//TODO: 20230529 #EP || Add Navigation */}

        <main className='h-100vh min-h-[100vh] p-2 py-4'>
          {children}
        </main>
        
        <footer className='bottom-0'>
          Concept App
        </footer>
      </body>
    </html>
  )
}
