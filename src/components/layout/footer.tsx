import Github from '@/components/Icons/svg/github';
import ExtLink from '@/components/anchor/external';

export default function Footer(){
  return(
    <footer className='bottom-0 flex justify-center gap-4 border-solid border-2 border-b-0 border-l-0 border-r-0 border-tertiary bg-primary py-2'>
       &#169; 2023 - MIT
       <span className='bg-black w-[1px] my-1'></span>
       <span className='flex my-auto ml-2 gap-2'>
          <Github styles={'w-[20px] h-auto'} />
          <ExtLink 
            href='https://github.com/ErikPlachta/nextjs-framer-cross-route'
          >
            Next Framer Cross-Route 
          </ExtLink>
       </span>
    </footer>
  )
}