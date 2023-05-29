import Head from "next/head";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home | CrossOrigin Animation with Framer-Motion</title>
      </Head>
      <main className={`${inter.className} flex flex-col bg-slate-300 dark:bg-slate-900 `}>
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
