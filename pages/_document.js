import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-slate-200 dark:bg-slate-900 px-5'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
