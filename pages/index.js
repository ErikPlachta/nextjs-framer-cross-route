// import Link from "next/link";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import ExtLink from "../components/ext-link";

import Header from "../components/Header";

export default function Home() {
  // let router = useRouter();

  return (
    <>
      <Header titlePre='Index' />
      
      <article className="h-full mt-20 mx-2">
        <div className="flex flex-col p-4 my-10 rounded-lg max-w-2xl m-auto bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        {/* <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500"> */}
          <h1 className="page--title">
            Cross Origin Animations with Framer Motion
          </h1>
          <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
            A cross-origin animation solution built by {` `}
            <ExtLink  href="https://github.com/ryanto/fmr-next-cross-route"
                      className='underline text-blue-500 hover:text-blue-700'
            >
              Ryan Toronto
            </ExtLink>
            , used to demonstrate how Framer-Motion can be used to create a
            cross-origin animation solution using in NextJs.
          </div>
          <div>

          </div>
        </div>
      </article>
    </>
  );
}