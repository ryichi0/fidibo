import { LogoCard } from "../cards/LogoCard"
import OverflowScroll from "./OverflowScroll"

export default function GridLogoSection({ data }) {
  return (
    <OverflowScroll>
      <div className="flex gap-2 xl:justify-center">
        {data.items.map((logo, i) => {
          return (
            <LogoCard key={i} logo={logo} />
          )
        })}
      </div>
    </OverflowScroll >
  )
}