import React from 'react'

const Book = ({book}) => {
let {bookId,bookName,author,image}=book
console.log(book);

  return (
    <div>Book</div>
  )
}

export default Book