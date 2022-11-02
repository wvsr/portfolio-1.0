import React, { useEffect } from 'react'
import Image from 'next/image'
function Projects() {
  const projects = [
    { title: 'coinbase app', skill: [], img: '/coinbase.png' },
    { title: 'blog app', skill: [], img: '/blog.png' },
    { title: 'movie app', skill: [], img: '/movie.png' },
  ]

  return (
    <div className='pt-24 pb-14 px-4 bg-[#fafafa]' id='project'>
      <div className='flex flex-col items-center space-y-8'>
        <h2 className='text-3xl md:text-4xl font-bold'>PROJECTS</h2>
        <p className='text-sm sm:text-lg max-w-3xl text-center font-medium text-gray-700'>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
        <div></div>
      </div>

      <article className='container mx-auto my-14'>
        <div
          className='block md:grid gap-10'
          style={{ gridTemplateColumns: '1.5fr 1fr' }}
        >
          <div className='h-auto max-w-fit w-full'>
            <Image src='/yubter.jpeg' width={1080} height={640} />
          </div>
          <div className='space-y-10 flex items-center md:items-start justify-center flex-col mt-8 md:mt-0'>
            <h3 className='text-2xl font-bold'>Yubter</h3>
            <p className='text-center md:text-left text-gray-700 text-sm sm:text-base '>
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <div>
              <button className='px-10 py-4 text-sm font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'>
                PROJECTS
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Projects
