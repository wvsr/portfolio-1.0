import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const [toggleNav, setToggleNav] = React.useState(false)

  return (
    <header className='w-full top-0 fixed bg-slate-50 shadow-lg text-gray-900 z-50'>
      <nav className='container mx-auto px-2 py-4 flex justify-between items-center w-full'>
        <Link href=''>
          <div
            id='logo'
            className='ml-2 text-[1.3rem] text-gray-700 font-bold flex items-center gap-3 hover:text-yellow-300 duration-150 transition-colors cursor-pointer'
          >
            <Image
              src='/sami-white.png'
              width={40}
              height={40}
              className='rounded-full'
              alt='wasimul vari sami'
            />
            <a href='#'>
              <p>wasimul sami</p>
            </a>
          </div>
        </Link>
        <div className='hidden md:block text-lg'>
          <ul className='flex gap-8 list-none capitalize'>
            <li className='hover:text-yellow-500 font-bold duration-150 transition-colors'>
              <a href='#about' className='w-full'>
                about
              </a>
            </li>
            <li className='hover:text-yellow-500 font-bold duration-150 transition-colors'>
              <a href='#project' className='w-full'>
                project
              </a>
            </li>
            <li className='hover:text-yellow-500 font-bold duration-150 transition-colors'>
              <a href='#contact' className='w-full'>
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className='md:hidden block'>
          <button
            className='text-2xl outline-none px-3 py-2 rounded-md'
            onClick={() => setToggleNav(!toggleNav)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
      {toggleNav && (
        <div className='block md:hidden nav-animate'>
          <ul className='list-none capitalize ml-4'>
            <a
              href='#about'
              className='w-full hover:text-yellow-500 font-bold duration-150 transition-colors py-6 block'
              onClick={() => setToggleNav(false)}
            >
              about
            </a>

            <a
              href='#project'
              className='w-full hover:text-yellow-500 font-bold duration-150 transition-colors py-6 block'
              onClick={() => setToggleNav(false)}
            >
              project
            </a>

            <a
              href='#contact'
              className='w-full hover:text-yellow-500 font-bold duration-150 transition-colors py-6 block'
              onClick={() => setToggleNav(false)}
            >
              contact
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
