import Link     from 'next/link'
import { usePathname }   from 'next/navigation'
import { 
  HomeIcon,
  PencilIcon
 } from "@heroicons/react/20/solid";


//TODO: Add the rest of the pages.
const navItems: {
   label: string;
   page?: string;
   description?: string;
   link?: string;
   icon?: any;
  }[] = [
  {   label: 'Home',    
      page: '/',
      description: '',
      icon: <HomeIcon className='h-10px w-10px' key={'nav.home'}/>,
    },
    // { label: 'Places - Original',
    //   page: '/places',
    //   description: 'Original Places Concept'
    // },
    // { label: 'Places - Rebuild',
    //   page: '/places-rebuild',
    //   description: '' 
    // },
    {
      label: 'Blog',
      page: '/blog',
      description: 'Third rework of the cross-route animation concept.',
      icon: <PencilIcon className='h-10px w-10px' key={'nav.home'}/>,
  }
];

export default function Header({params}:any){
  const pathname  = usePathname()
  return (
    <header className={`fixed flex justify-center left-0 top-0 py-4 m-auto w-full z-20 backdrop-blur-md bg-white/20 border-solid border-black/10 border-b-2 border-t-0 border-l-0 border-r-0 h-10vh`}>
      
      <nav className="flex-auto"> 
        <ul className={`flex flex-row justify-center text-center space-around max-w-[800px] m-auto gap-5 md:gap-10 lg:gap-10 xl:gap-10`}>
          {navItems.map(({ label, page, link, icon }) => (
            page &&
              <Link className='group flex flex-row w-full gap-2 text-lg tracking-wide' href={page}>
                <li key={label}
                    className={`group flex justify-center w-full `
                          + ` underline-offset-4 hover:underline hover:decoration-blue-600 `
                  }
                >
                  <span className='h-6 w-6 text-blue-400 group-hover:text-blue-500 drop-shadow-sm'>
                    {icon}
                  </span>
                  <span className={
                      pathname === page
                        ? ' drop-shadow-sm underline underline-offset-6 hover:decoration-transparent'
                        : ''
                    }
                  >
                    {label}
                  </span>
                </li>
              </Link>
            )
          )}
        </ul>
      </nav>
    </header>
  )
};
