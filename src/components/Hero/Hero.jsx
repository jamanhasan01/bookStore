import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-base-200 py-20 rounded-xl">
    <div className="hero-content flex-col justify-between items-center  lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-xl rounded-lg shadow-2xl" />
      <div className='lg:w-[50%] flex flex-col gap-5 items-start'>
        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
   
        <button className="btn bg-green-600 text-white">View The List</button>
      </div>
    </div>
  </div>
  )
}

export default Hero