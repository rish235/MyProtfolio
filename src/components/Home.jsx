import React from 'react'
import pic from "../assets/pic.jpg";
import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-row'>
            <div className='w-3/4 mt-24 p-20'>
            <span className='text-xl font-bold'>Welcome to my Portfolio</span>
              <div className='flex space-x-l text-2xl'>
              <h1 className='text-3xl' >Hello, I'm a </h1>
                 <span className='text-3xl text-red-700 font-bold pl-2'>
                 <ReactTyped
                    // typedRef={setTyped}
                    strings={["Developer","Programmer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                  </span>
                 </div>
              <p className='mt-10'>I am a passionate BTech final year Student at Graphic Era Hill University. My Area of Interest is in Problem Solving, Machine Learning, Web Development. I am Proficient in Computer Fundamentals and am well versed with the concepts of OOPS, DBMS and OS.</p><p className='pt-10'>Do Checkout my Projects and Skills.</p>
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