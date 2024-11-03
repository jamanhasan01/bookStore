import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Bookdetails = () => {
    let data= useLoaderData()
    let param = useParams()
    let book=data.find((b)=> b.bookId==param.bookId)
    
    let { bookId, bookName, author, image, tags ,review}=book
    
    
  return (
    <div className='grid lg:grid-cols-2 p-5 gap-5 py-20'>
        <div className='bg-gray-100 p-5 flex justify-center items-center'><img className=' w-1/2' src={image} alt="" /></div>
        <div className='p-5 flex flex-col gap-3'>
            <h1 className='text-4xl'>{bookName}</h1>
            <h3 className='text-2xl'>By: {author}</h3>
            <hr />
                <div className='flex gap-3'>
                    <p className='text-lg'>{tags[0]}</p>
                    <p className='text-lg'>{tags[1]}</p>
                </div>
            <hr />
            <p>Review:{review}</p>
            <div className="flex gap-2">
          <button className=" text-white btn-outline bg-green-500 px-3 py-2 rounded-lg">React</button>
          <button className=" text-white  btn-outline bg-green-500 px-3 py-2 rounded-lg">WishList</button>
        </div>
        </div>
    </div>
  )
}

export default Bookdetails