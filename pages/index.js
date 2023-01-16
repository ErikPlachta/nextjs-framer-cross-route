// import Link from "next/link";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import ExtLink from "../components/ext-link";

import Header from "../components/header";

export default function Home() {
  // let router = useRouter();

  return (
    <>
      <Header titlePre='Index' />
      
      <div className="h-full mx-2">
        <div className="flex flex-col p-4 my-10 rounded-lg max-w-2xl m-auto bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        {/* <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500"> */}
          <h1 className="block text-5xl tracking-tighter pb-10" >
            CrossOrigin Animations with Framer Motion
          </h1>
          <div className={`relative bg-slate-100 overflow-hidden p-4 m-4 rounded-md text-2xl`}>
            A cross-origin animation solution built by {` `}
            <ExtLink  href="https://github.com/ryanto/fmr-next-cross-route"
                      className='underline text-blue-500 hover:text-blue-700'
            >
              Ryan Toronto
            </ExtLink>
            , used to demonstrate how Framer-Motion can be used to create a
            cross-origin animation solution using in NextJs.
          </div>
        </div>
      </div>
    </>
  );
}