export default function OverflowScroll({children}) {
  return(
    <div className="w-full overflow-x-scroll scroll-smooth snap-mandatory snap-x">{children}</div>
  )
}