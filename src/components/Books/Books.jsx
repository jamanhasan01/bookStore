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
    <div>
        <h1 className="text-2xl">Books {books.length}</h1>
        {/* made sigle card dianamically */}
        <div>
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