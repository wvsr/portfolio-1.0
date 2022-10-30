import React, { useEffect } from 'react'
import Button from './Button'
import { FcSms } from 'react-icons/fc'

// based in Dhaka. Available for freelance & collaborations.

export default function Hero() {
  return (
    <div className='hero p-3  pt-4 pb-10 w-full'>
      <div className='container lg:max-w-6xl 2xl:max-w-6xl mx-auto'>
        <p className='py-2 px-3 rounded-full bg-violet-200 max-w-fit flex gap-3 items-center my-6  border  font-bold text-lg'>
          Available For Work <FcSms />
        </p>
        <article
          data-aos='fade-right'
          data-aos-delay='50'
          data-aos-duration='900'
          data-aos-offset='250'
        >
          <p className='leading-tight mb-5 max-w-5xl text-gray-900 font-black text-5xl md:text-5xl lg:text-7xl py-14'>
            I’m{' '}
            <span className='text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-900'>
              Wasimul Sami
            </span>
            , <br /> a website developer.
          </p>
        </article>
        {/* <p className='mt-4 text-2xl max-w-2xl t mb-4 text-gray-700 font-light tracking-wide'>
          I love programming, and I'm always looking for new ways to learn. You
          could say I'm a software engineer at heart.
        </p> */}
        <p className='mt-6'>
          <Button>view my works</Button>
        </p>
      </div>
    </div>
  )
}
