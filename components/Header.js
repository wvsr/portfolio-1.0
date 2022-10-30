import React from 'react'
import Link from 'next/link'
import Button from './Button'
export default function Header() {
  return (
    <header className='w-full top-0 sticky bg-white text-black z-50'>
      <nav className='container mx-auto px-2 py-2 flex justify-between items-center w-full'>
        <div id='logo' className='text-3xl font-basic'>
          sami.
        </div>
        <div className='hidden md:block text-lg'>
          <ul className='flex gap-5 list-none capitalize'>
            <li className='hover:underline decoration-2 decoration-blue-700 underline-offset-4'>
              <Link href='/home'>home</Link>
            </li>
            <li className='hover:underline decoration-2 decoration-blue-700 underline-offset-4'>
              <Link href='/about'>about</Link>
            </li>
            <li className='hover:underline decoration-2 decoration-blue-700 underline-offset-4'>
              <Link href='/works'>works</Link>
            </li>
            <li className='hover:underline decoration-2 decoration-blue-700 underline-offset-4'>
              <Link href='/services'>services</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button>Hire Me</Button>
        </div>
      </nav>
    </header>
  )
}
