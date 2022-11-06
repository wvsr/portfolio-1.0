import React, { useEffect } from 'react'

// based in Dhaka. Available for freelance & collaborations.

export default function Hero() {
  return (
    <div>
      <div className='pt-40 pb-28 md:py-0 w-full md:h-screen hero flex items-center'>
        <article className='h-auto w-full space-y-10 text-black text-center p-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black'>
            Hey, I am Wasimul Sami.
          </h1>
          <div className='flex justify-center'>
            <p className='max-w-4xl md:tgit add .ext-xl font-medium text-center leading-7'>
              A Full stack Web Developer building the Websites and Web
              Applications that leads to the success of the overall product.
            </p>
          </div>
          <button className='px-10 py-4 text-lg font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'>
            <a href='#project'>PROJECTS</a>
          </button>
        </article>
      </div>
    </div>
  )
}
