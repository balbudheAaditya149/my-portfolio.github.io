import React from 'react'
import img1 from '../img/home-image.png'

export default function About() {
  return (
    <>
        <div className='about py-20'>
            <h2 className='text-3xl font-semibold text-center'>About me</h2>
            <div className='my-8 mx-2'>
              <div className='flex justify-center '>
                <img src={img1} alt="aboutImage" className='border-2 border-red-500 rounded-md h-48' />
              </div>
              <div className='mt-9'>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.
                <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minima quis repudiandae ad. Incidunt natus autem repellat reprehenderit! Quo cumque minus quibusdam deleniti.
                </p>
              </div>
            </div>
        </div> 
    </>
  )
}
