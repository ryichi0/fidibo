import { VertBookCard } from "../cards/BookCard"
import OverflowScroll from "./OverflowScroll"

export default function PromotionSection({ data }) {
  return (
    <div className=" bg-[#BBDBED] rounded-md ps-8 pe-2 py-4">
      <header className="flex gap-2 mb-4">
        <img className="w-6" src={data?.icon} alt="" />
        <h2 className="text-2xl">{data?.title}</h2>
      </header>
      <OverflowScroll>
        <div className="flex gap-8 items-start">

          {data.items.slice(0, 6).map((book, i) => {
            return (
              <VertBookCard key={i} book={book} />
            )
          })
          }
        </div>
      </OverflowScroll>
    </div>
  )
}