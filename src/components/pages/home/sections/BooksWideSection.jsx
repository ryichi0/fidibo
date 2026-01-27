import { HorzBookCard } from "../cards/BookCard"
import BookSectionLayout from "../layout/BookSectionLayout"



export default function BooksWideSection({ data }) {
  return (
    <BookSectionLayout data={data}>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-start">

        {data.items.slice(0, 4).map((book, i) => {
          return (
            <HorzBookCard key={i} book={book} />
          )
        })
        }
      </div>
    </BookSectionLayout>
  )
}

