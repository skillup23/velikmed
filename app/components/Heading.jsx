export default function Heading({ children, style }) {
  return <h2 className={`ml-1 sm:ml-0 font-display ${style}`}>{children}</h2>;
}
