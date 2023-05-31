import Link     from 'next/link'
import { usePathname }   from 'next/navigation'

//TODO: Add the rest of the pages.
const navItems: { label: string; page?: string; description?: string; link?: string  }[] = [
  {   label: 'Home',    
      page: '/',
      description: ''
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
    description: 'Third rework of the cross-route animation concept.'
  }
];

export default function Header({params}:any){
  const pathname  = usePathname()
  return (
    <header className={`fixed flex justify-center left-0 top-0 py-4 m-auto w-full z-20`}>
      <nav className="flex-auto">
        <ul className={`flex flex-row justify-center text-center space-around max-w-[800px] m-auto gap-5 md:gap-10 lg:gap-10 xl:gap-10`}>
          {navItems.map(({ label, page, link }) => (
            <li key={label} className='flex m-auto text-center align-center hover:underline'>
              {page &&
                <Link href={page}>
                  <span className={ pathname === page ? 'font-semibold underline underline-offset-2' : '' }>
                    {label}
                  </span>
                </Link>
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
