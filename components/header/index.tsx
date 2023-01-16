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
    <header className="flex p-6 max-w-2xl m-auto">
    {/* <header className={styles.wrapper}> */}
      
      {/* <Link href="/" className={styles.logo}>
          <img src="./assets/image/logo.png" alt="Logo" width="40" height='40' />
      </Link> */}
      

      <nav className="flex-auto">
        <ul className='flex flex-row justify-end space-evenly gap-10 color text-slate-800 text-lg font-bold tracking-wide'>
          {navItems.map(({ label, page, link }) => (
            <li className=' hover:underline hover:text-slate-600'
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
