import React from 'react'
import c from '../img/c.png'
import HtmlImg from '../img/html.png'
import java from '../img/java.png'
import js from '../img/js.jpg'
import nodeJS from '../img/node-js.png'
import tCSS from '../img/tailwind-css.png'

export default function Skills() {
  return (
    <div name='skills' className='skills py-20'>
      <h2 className='text-2xl font-semibold'>My Skills</h2>

      <div className='flex flex-wrap justify-evenly mt-7 '>
        <img src={c} className='w-24 my-5 ' alt='c' />
        <img src={java} className='w-24 my-5 ' alt='java' />
        <img src={HtmlImg} className='w-24 my-5 ' alt='HtmlImg' />
        <img src={tCSS} className='w-24' alt='tCSS' />
        <img src={nodeJS} className='w-24 my-5 ' alt='nodeJS' />
        <img src={js} className='w-24 my-5 ' alt='js' />
      </div>
    </div>
  )
}
