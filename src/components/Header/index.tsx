import Link     from 'next/link'
import ExtLink  from '../ext-link'
import Image    from 'next/image';
import { 
  usePathname,
  useRouter }   from 'next/navigation'


//TODO: 20230108 #EP || Add Descriptions for each page.
const navItems: { label: string; page?: string; description?: string; link?: string  }[] = [
  {   label: 'Home',    
      page: '/',
      description: ''
  },
  { label: 'Places - Original',
    page: '/places',
    description: 'Original Places Concept'
  },
  { label: 'Places - Rebuild',
    page: '/places-rebuild',
    description: '' 
  }
];

const Header = ( titlePre: any ) => {
  const pathname  = usePathname()

  return (
    <header className={`fixed flex justify-center left-0 top-0 py-4 m-auto w-full z-20 `
                      + `bg-gradient-to-b from-slate-900 to-slate-900/80 `
                      + `text-slate-100 font-semibold tracking-wide uppercase`
  }>
    {/* <header className={styles.wrapper}> */}
      
      {/* <Link href="/" className={styles.logo}>
          <img src="./assets/image/logo.png" alt="Logo" width="40" height='40' />
      </Link> */}
      

      <nav className="flex-auto">
        <ul className={`flex flex-row justify-center text-center space-around max-w-[800px] m-auto gap-5 md:gap-10 lg:gap-10 xl:gap-10 `
                        + ` text-MD `
                      }>
          {navItems.map(({ label, page, link }) => (
            <li className='flex m-auto text-center align-center hover:underline hover:text-slate-700 dark:hover:text-slate-300'
                key={label}
            >
              {page ? (
                <Link href={page}>
                  <span className={ pathname === page 
                                    ? 'active'
                                    : null
                                  }
                  >
                    {label}
                  </span>
                </Link>
              ) : null 
            }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
