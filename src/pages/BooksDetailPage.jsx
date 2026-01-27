import { useParams } from "react-router-dom";
import BookCardDetails from "../components/pages/home/cards/BookCardDetails";
import { useBooks } from "../hooks/useBook";
import { useEffect, useState } from "react";

export default function BooksDetailPage() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState()

  async function getBookId() {
    const res = await fetch('https://api.fidibo.com/flex/page/HOME_MENU');
    const data = await res.json();
    const sections = data.data.result ;
    
    const allBooks = sections.flatMap(section => section?.items);
    console.log(sections);
    setBookDetails(allBooks.find(item => String(item.id) === id));
    console.log(bookDetails);
    return bookDetails
  }
  useEffect(()=>{
    getBookId();
    
  },[])

  return (
    <>
      <BookCardDetails book={bookDetails}/>
    </>
  )
}