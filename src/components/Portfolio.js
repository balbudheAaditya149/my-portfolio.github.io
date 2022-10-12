import React from 'react'
import proj1 from '../img/proj1.png'
import proj2 from '../img/proj2.png'
import proj3 from '../img/proj3.png'

export default function Portfolio() {
  return (
    <>
        <div className='portfolio py-20'>
            <h2 className='text-3xl font-semibold text-center'>Portfolio</h2>
            <div className='mt-9 flex justify-evenly items-center md:flex-row flex-col'>
              <div className='card  w-[89%] md:w-[30%] h-96 flex flex-col justify-center items-center border-2 border-red-500' >
                <div>
                  <img src={proj1} alt='project1' />
                </div>
                <div>
                  <h3 className='font-semibold text-2xl'>Project - 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className='my-4 flex justify-center flex-wrap'>
                    <a href='/' className='px-4 py-3 border bg-slate-600 text-white font-semibold hover:bg-slate-800 rounded-md ' >Source Code</a>
                    <a href='/' className='px-4 py-3 border bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md w-[156.3px] ' >Live demo</a>
                  </div>
                </div>
              </div>
              <div className='card w-[89%] md:w-[30%] h-96 flex flex-col justify-center items-center  border-2 border-red-500' >
                <div>
                  <img src={proj2} alt='project2' />
                </div>
                <div>
                  <h3 className='font-semibold text-2xl'>Project - 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className='my-4 flex justify-center flex-wrap'>
                    <a href='/' className='px-4 py-3 border bg-slate-600 text-white font-semibold hover:bg-slate-800 rounded-md ' >Source Code</a>
                    <a href='/' className='px-4 py-3 border bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md w-[156.3px] ' >Live demo</a>
                  </div>
                </div>
              </div>
              <div className='card  w-[89%] md:w-[30%] h-96 flex flex-col justify-center items-center border-2 border-red-500' >
                <div>
                  <img src={proj3} alt='project3' />
                </div>
                <div>
                  <h3 className='font-semibold text-2xl'>Project - 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className='my-4 flex flex-wrap justify-center'>
                    <a href='/' className='px-4 py-3 border bg-slate-600 text-white font-semibold hover:bg-slate-800 rounded-md ' >Source Code</a>
                    <a href='/' className='px-4 w-[156px] py-3 border bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md ' >Live demo</a>
                  </div>
                </div>
              </div>
            </div>
        </div> 
    </>
  )
}
