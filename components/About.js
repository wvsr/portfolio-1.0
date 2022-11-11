import Image from 'next/image'
export default function About() {
  return (
    <div
      className='pt-20 pb-16 md:pt-24 md:pb-14 container mx-auto px-3'
      id='about'
    >
      <article>
        <h2 className='text-3xl sm:text-4xl font-bold text-center'>ABOUT ME</h2>
        <div className='text-center flex justify-center text-base sm:text-lg text-gray-600 py-8'>
          <p className='max-w-4xl'>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className='block lg:grid grid-cols-2 gap-10 py-10'>
          <section>
            <h3 className='text-base sm:text-2xl font-bold'>Get to know me!</h3>
            <p className='py-8 text-gray-800 font-medium text-sm sm:text-base  tracking-wider leading-8 md:pr-20'>
              I am a <b>Full stack Web Developer</b> building the Websites and
              Web Applications that leads to the success of the overall product.
              Check out some of my work in the Projects section. I also like
              sharing content related to the stuff that I have learned over the
              years in Web Development so it can help other people. With my
              experience as a Web Developer, {`I've`} learned to build web
              applications from scratch as well as maintain existing
              applications. <br /> My skills are not just limited to
              programming, but I also know how to deal with graphic design,
              digital marketing, and user experience design.Do you need help
              developing your next product or project? Get in touch with me and
              {`let's`} discuss your requirements! <br /> Contact me now for any
              web development needs you have!
            </p>
            <a href='#contact' className='px-10 py-4 text-sm font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'>
              CONTACT
            </a>
          </section>
          <section className='mt-14 lg:mt-0'>
            <h3 className='text-2xl font-bold'>My skills</h3>
            <div className='flex gap-3 flex-wrap py-8'>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                HTML
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                CSS
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                React
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                ES6
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Firebase
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Tailwind CSS
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Next JS
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Express JS
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                MongoDB
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Python
              </div>
              <div className='py-3 px-5 bg-gray-200 rounded-md text-sm lg:text-lg font-semibold text-gray-500'>
                Django
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
