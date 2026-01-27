import { HorzBookCard } from "./BookCard";

export default function BookCardDetails({ book }) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="w-full bg-white p-2 rounded-md">breadcrumps</div>
      <div className="w-[66%]">
        <HorzBookCard book={book}/>
      </div>
      <div className="w-[33%]">price</div>
    </div>
  )
}