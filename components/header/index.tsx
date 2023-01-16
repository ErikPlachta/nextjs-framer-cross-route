import Link     from 'next/link'
import ExtLink  from '../ext-link'
import Image from 'next/image';
import { 
  usePathname,
  useRouter } from 'next/navigation'
import styles   from './assets/css/header.module.css'


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
  { label: 'Places - Updated',
    page: '/places-updated',
    description: '' 
  }
];

const Header = ( titlePre: any ) => {
  const pathname  = usePathname()

  return (
    <header className={styles.wrapper}>
      
      {/* <Link href="/" className={styles.logo}>
          <img src="./assets/image/logo.png" alt="Logo" width="40" height='40' />
      </Link> */}

      <nav>
        <ul>
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link href={page}>
                  <span className={ pathname === page 
                                    ? 'active'
                                    : undefined
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
