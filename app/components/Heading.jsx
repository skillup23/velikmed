export default function Heading({ children, style }) {
  return <h2 className={`font-display ${style}`}>{children}</h2>;
}
