import Head from "next/head";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Route animations</title>
      </Head>
      <div className={`${inter.className} flex flex-col max-h-0 bg-slate-300`}>
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
