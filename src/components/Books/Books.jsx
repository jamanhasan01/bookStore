import { useEffect, useState } from "react"
import Book from "../Book/Book"

const Books = () => {
    let [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("./booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
        
        
    },[])
  return (
    <div className="py-20">
        <h1 className="text-6xl text-center mb-5">Books {books.length}</h1>
        {/* made sigle card dianamically */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                books.map(book=>( 
                <Book key={book.bookId}  book={book}/>
                ))
            }
        </div>
    </div>
  )
}

export default Books