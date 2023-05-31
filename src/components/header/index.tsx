import Link     from 'next/link'
import { usePathname }   from 'next/navigation'


//TODO: 20230108 #EP || Add Descriptions for each page.
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

const Header = ( titlePre: any ) => {
  const pathname  = usePathname()

  return (
    <header className={`fixed flex justify-center left-0 top-0 py-4 m-auto w-full z-20 `
                      // + `bg-gradient-to-b from-slate-900 to-slate-900/80 `
                      // + `text-slate-100 font-semibold tracking-wide uppercase`
    }>
      <nav className="flex-auto">
        <ul className={`flex flex-row justify-center text-center space-around max-w-[800px] m-auto gap-5 md:gap-10 lg:gap-10 xl:gap-10 `
                        + ` text-MD `
        }>
          {navItems.map(({ label, page, link }) => (
            <li key={label} className='flex m-auto text-center align-center hover:underline'>
              {page &&
                <Link href={page}>
                  <span className={ pathname === page ? 'active' : '' }>
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
}

export default Header
