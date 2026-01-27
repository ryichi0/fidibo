import { Link } from "react-router-dom"


export function VertBookCard({ book }) {
  return (
    <Link className="xl:flex-1 lg:w-2/12 w-8/12 shrink-0 flex flex-col gap-4 items-center px-4 pt-6 bg-bg-muted rounded-md h-96 overflow-hidden snap-start" to={`/BooksDetailPage/${book.id}`} >
      <div className="w-10/12">
        <img className="w-full max-h-40  rounded-xl object-contain" src={book?.cover?.image} alt="" />
      </div>
      <div className=" flex flex-col gap-2 items-center justify-center">
        <h4 className="font-bold text-lg line-clamp-1 py-1">{book?.title}</h4>
        <p className="font-light text-gray-600">{book?.subtitle}</p>
        <span className="font-light text-gray-600">{book?.rate?.score} {`(${book?.rate?.responses})`}</span>
        <p className=" flex gap-2 items-center mt-4">
          <del className="text-sm font-extralight">{book?.price}</del>
          <span className="text-lg font-bold">{book?.campaign?.discounted_price}</span>
        </p>
      </div>
    </Link>
  )
}
function HorizBookLayout({book, children}) {
  <div className="flex gap-4 items-end bg-bg-muted overflow-visible h-40 rounded-sm snap-start">
    <div className="flex-3 h-40 object-cover mb-4 mr-4">
      <img className="w-full h-full shadow-2xl rounded-sm" src={book?.cover?.image} alt="" />
    </div>
    <div className="flex-4 flex flex-col gap-1 me-8 self-center">
      {children}
    </div>

  </div>
}
export function HorzBookCard({ book }) {
  return (
    <Link className="flex gap-4 items-end bg-bg-muted overflow-visible h-40 rounded-sm snap-start" to={`/BooksDetailPage/${book?.id}`}>
      <div className="flex-3 h-40 object-cover mb-4 mr-4">
        <img className="w-full h-full shadow-2xl rounded-sm" src={book?.cover?.image} alt="" />
      </div>
      <div className="flex-4 flex flex-col gap-1 me-8 self-center">
        <span className="text-[12px] font-light">{book?.rate?.score}</span>
        <h4 className="font-bold line-clamp-1">{book?.title}</h4>
        <p className="font-light text-sm">{book?.subtitle}</p>
        <span className="font-extralight text-sm">{book?.footerText}</span>
      </div>

    </Link>
  )
}