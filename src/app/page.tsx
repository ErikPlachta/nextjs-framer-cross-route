'use client';
import ExtLink from '@/components/anchor/external'
import Header from '@/components/layout/header'
export default function Home() {
  
  return (
    <>
    <Header titlePre='Index'/>

      <article className="h-full mt-20 mx-2">
        <div className="flex flex-col p-4 my-10 rounded-lg max-w-2xl m-auto bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        {/* <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500"> */}
          <h1 className="text-2xl ">
            Cross-Route Animation Concept
          </h1>
          <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
            Original concept built by {` `}
            <ExtLink  href="https://github.com/ryanto/fmr-next-cross-route"
                      className='underline text-blue-500 hover:text-blue-700'
            >
              Ryan Toronto
            </ExtLink>
            . This is a rework of that concept I used to learn how it's working.
          </div>
          <div>

          </div>
        </div>
      </article>
    </>
  )
}
