import Link from "next/link";

/**
 * External Link component that opens in a new tab. 
 * 
 * @param {Object} props - props object
 * @param {String} props.target - target attribute
 * @param {String} props.rel - rel attribute
 * @param {String} props.href - href attribute
 * 
 * @returns {JSX.Element} - JSX Element
 * 
 * @example
 * import ExtLink from 'components/ext-link'
 * 
 * <ExtLink href="https://example.com" target="_blank" rel="noopener">
 * 
 */
export default function ExternalLink({target, rel, href, ...props}:any){
  return (
    <Link
      className='hover:underline text-blue-500/90 hover:text-blue-500 cursor-pointer underline-offset-2'
      href = {href}
      // {...props}
      rel="noopener"
      target={props.target || '_blank'} 
    >
      {props.children}
    </Link>
  )
}



