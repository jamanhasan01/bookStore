import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  let { bookId, bookName, author, image, tags } = book;
  return (
    <Link to={`book/${bookId}`}>
    <div className="p-5 border rounded-xl">
     <div className="bg-gray-100 mb-5 p-5 rounded-xl flex justify-center items-center">
     <img className="h-[150px]  object-cover" src={image} alt="" />
     </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button className=" bg-slate-100 text-green-500 px-3 py-2 rounded-full">Young Adult</button>
          <button className=" bg-slate-100 text-green-500 px-3 py-2 rounded-full"> Identity</button>
        </div>
        <h3 className="text-xl font-semibold">{bookName}</h3>
        <h4 className="text-base ">{author}</h4>

        <div className=" divide-dashed border"></div>
      <div className="flex gap-3">
        <p> {tags[0]}</p>
        <p> {tags[1]}</p>
      </div>
      </div>
    </div></Link>
  );
};

export default Book;
