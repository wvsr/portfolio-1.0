import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
const locomotiveScroll =
  typeof window !== `undefined` ? require('locomotive-scroll').default : null

export default function Projects() {
  function ProjectCard({ img, name }) {
    return (
      <div className='container mx-auto md:px-0'>
        <div className='border-t-[0.7px] border-gray-700 mt-14 mx-3 md:mx-0 '></div>
        <div className='mt-16 flex justify-between md:px-0 mx-4'>
          <p className='md:text-2xl text-lg font-bold'>{name}</p>
          <p className='text-4xl font-bold'>
            <BsArrowRight />
          </p>
        </div>
        <div className='pt-14 w-full h-auto relative max mb-24'>
          <Image
            src={`/${img}`}
            className='w-full h-auto'
            width={1920 / 3}
            height={960 / 3}
            sizes='100vw'
          />
        </div>
      </div>
    )
  }
  return (
    <div0>
      {/* <div className='border-t-2 border-black py-2 container mx-auto'></div> */}
      <div>
        <ProjectCard img='movie.png' name='movie database website' />
        <ProjectCard img='coinbase.png' name='crypto update app' />
        <ProjectCard img='blog.png' name='blog website with auth' />
      </div>
    </div0>
  )
}
