
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
    <a {...props} rel="noopener" target={props.target || '_blank'} />
  )
}



