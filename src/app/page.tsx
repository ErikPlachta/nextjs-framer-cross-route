import ExtLink from '@/components/anchor/external'

export default function Home() {
  
  return (
    <section className="h-full mx-2">
      
      <article className="flex flex-col p-4 rounded-lg max-w-2xl m-auto bg-slate-100 gap-4 shadow-sm shadow-slate-500">
        <h1 className="text-2xl ">
          Cross-Route Animation Concept
        </h1>
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          Original concept built by {` `}
          <ExtLink  href="https://github.com/ryanto/fmr-next-cross-route">
            Ryan Toronto
          </ExtLink>
          . This is a rework of that concept I used to learn how it&#39;s working.
        </div>
      </article>
    </section>
  )
}