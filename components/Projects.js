import React from 'react'
import Image from 'next/image'

function Projects() {
  const ProjectItem = ({ desc, title, img, link }) => {
    return (
      <div
        className='block md:grid gap-10'
        style={{ gridTemplateColumns: '1.5fr 1fr' }}
      >
        <div className='h-auto max-w-fit w-full'>
          <Image src={img} width={1080} height={640} />
        </div>
        <div className='space-y-10 flex items-center md:items-start justify-center flex-col mt-8 md:mt-0'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <p className='text-center md:text-left text-gray-700 text-sm sm:text-base '>
            {desc}
          </p>
          <div>
            <a
              className='px-10 py-4 text-sm font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'
              href={link}
              target='_blank'
              rel="noreferrer"
            >
              PROJECTS
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='pt-24 pb-14 px-4 bg-[#fafafa]' id='project'>
      <div className='flex flex-col items-center space-y-8'>
        <h2 className='text-3xl md:text-4xl font-bold'>PROJECTS</h2>
        <p className='text-sm sm:text-lg max-w-3xl text-center font-medium text-gray-700'>
          Here you will find my feature showcase projects.
        </p>
        <div></div>
      </div>

      <article className='container mx-auto my-14 space-y-24'>
        <ProjectItem
          link='https://moviebysami.netlify.app/'
          img='/moviebase.png'
          title='MovieBase'
          desc='MovieBase is movie database website made with TMDB database. the website contain tending movies, searching movies or tv series, genres section with modern UI'
        />
        <ProjectItem
          link='https://cryptobase.netlify.app/'
          title='CryptoBase'
          img='/cryptobase.png'
          desc='CryptoBase is a crypto dashboard website. the webapp created using nextJs with ISR functionality. the website contain with trending coin, latest crypto newses, exchange crypto price in different currency section. Data updated in every 10 minute.'
        />
        <ProjectItem
          link='https://cryptobase.netlify.app/'
          title='Teacher Website'
          img='/youtuber-website.png'
          desc='The website made for ed-tech YouTuber. The website sync every new video uploaded in Channel automatically and show al the latest data. '
        />
      </article>
    </div>
  )
}

export default Projects
