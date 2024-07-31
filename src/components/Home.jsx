import React from 'react'
import pic from "../assets/pic.jpg";
function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-row'>
            <div className='w-3/4 mt-24 p-20'>
            <span>Welcome to my Portfoliio</span>
              <div className='flex space-x-l text-2xl'>
              <h1 >Hello, I'm <span className='text-red-700 font-bold'>Rishabh</span></h1></div>
              <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque dolorum ab nulla provident ducimus labore minima aliquid aspernatur aperiam, ratione totam? Reprehenderit recusandae debitis facilis perspiciatis cumque praesentium quis?</p>
            </div>
            <div className='w-1/4 ml-48 mt-20'>
             <img className='rounded-full w-[50]px h-[50]px ' src={pic} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home