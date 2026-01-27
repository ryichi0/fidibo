import { useEffect, useState } from "react";

export function useBooks(url) {
  const [sections, setSections] = useState([]);

  async function getBooks() {
    const res = await fetch(url)
    const data = await res.json()
    setSections(data.data.result)
  }

  useEffect(() => {
    getBooks()
  }, []);

  return sections;
}