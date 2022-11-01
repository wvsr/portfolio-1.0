import React, { useEffect } from 'react'
import Button from './Button'
import { FcSms } from 'react-icons/fc'

// based in Dhaka. Available for freelance & collaborations.

export default function Hero() {
  return (
    <div>
      <div className='w-full h-[40rem] md:h-screen block hero'>
        <article className='flex flex-col items-center justify-center h-screen w-full space-y-10 absolute top-0 left-0 text-black text-center p-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black'>
            Hey, I am Wasimul Sami.
          </h1>
          <p className='max-w-4xl md:text-xl font-medium text-center leading-7'>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <button className='px-10 py-4 text-lg font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'>
            PROJECTS
          </button>
        </article>
      </div>
    </div>
  )
}
