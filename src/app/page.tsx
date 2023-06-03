import ChoiceMenu, {MenuGroup} from '@/components/Menu'
import { DropdownMenu } from '@/components/DropdownMenu';
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


      <div>
        <DropdownMenu label='test' menus={menus} />
        
      </div>
    </section>
  )
}


const menus:MenuGroup[] = [
  {
    id: 1,
    type: 'list',
    items: [
      { id: '1', title: 'Home', href: '/', alt: { 'aria-label': 'Home page link' } },
      { id: '2', title: 'About', href: '/about', alt: { 'aria-label': 'About page link' } },
    ],
  },
  {
    id: 2,
    type: 'collapse',
    items: [
      { id: '3', title: 'FAQ', href: '/faq', alt: { 'aria-label': 'FAQ page link' } },
      { id: '4', title: 'Support', href: '/support', alt: { 'aria-label': 'Support page link' } },
    ],
  },
  {
    id: 3,
    type: 'pop-out',
    items: [
      { id: '5', title: 'Contact', href: '/contact', alt: { 'aria-label': 'Contact page link' } },
      { id: '6', title: 'Terms of Service', href: '/tos', alt: { 'aria-label': 'Terms of Service page link' } },
    ],
  },
];