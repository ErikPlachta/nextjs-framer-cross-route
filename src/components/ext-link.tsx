
const ExtLink = (props = {
  target: String() || '_blank',
} ) => (
  <a {...props} rel="noopener" target={props.target || '_blank'} />
)
export default ExtLink
