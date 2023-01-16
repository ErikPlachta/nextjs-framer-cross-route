import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Header from "../components/header";

export default function Home() {
  let router = useRouter();

  return (
    <div className="h-full">
      <Header titlePre='Index' />
      <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        <h1 className="block text-5xl tracking-tighter pb-10" >
          Places
        </h1>
        <div className={`relative bg-slate-100 overflow-hidden p-4 m-4 rounded-md text-2xl`}>
          A cross-origin animation solution using NextJs and Framer-Motion.
        </div>

      </div>
    </div>
  );
}