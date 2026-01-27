import { VertBookCard } from "../cards/BookCard"
import BookSectionLayout from "../layout/BookSectionLayout"
import OverflowScroll from './OverflowScroll'
export default function BooksFullSection({ data }) {
  return (
    <BookSectionLayout data={data}>
      <OverflowScroll>
        <div className="flex gap-8 items-start">
          {data.items.slice(0, 6).map((book, i) => {
            return (
              <VertBookCard key={i} book={book} />
            )
          })}
        </div>
      </OverflowScroll>
    </BookSectionLayout>
  )
}


