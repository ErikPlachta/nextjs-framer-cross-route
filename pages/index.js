import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Header from "../components/Header";

export default function Home() {
  let router = useRouter();

  return (
    <div>
      <Header titlePre='Index' />
      <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        {/* TODO:: Add my own here? */}
        <motion.h1
              className="block text-5xl tracking-tighter pb-10"
            >
              Places
            </motion.h1>


        <motion.div
          layoutId={`places-original`}
          className={`relative bg-slate-100 overflow-hidden p-4 m-4 rounded-md text-2xl`}
          transition={{ ease: "easeOut" }}
          initial={{ height: 200 }}
          animate={{ height: 200 }}
          style={{ originX: 0.5 }}
        >
          Taking the concept of places and making it my own.
        </motion.div>

      </div>
    </div>
  );
}