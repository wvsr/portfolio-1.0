export default function Footer() {
  return (
    <footer className='bg-black text-white'>
      <article className='w-5xl py-10 container mx-auto p-4'>
        <h3 className='text-2xl font-bold text-gray-200 uppercase'>
          Wasimul Sami
        </h3>
        <p className='mt-8 max-w-lg text-sm font-medium'>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <div className='mt-14 border-t border-[#444] text-center py-5'>
          <p className='my-3 text-gray-200 text-sm'>Made by sami With ❤</p>
          <p className='text-xs capitalize font-extralight'>
            based from{' '}
            <a
              href='https://github.com/rammcodes/Dopefolio'
              target='_blank'
              rel='noreferrer'
            >
              Dopefolio Project
            </a>{' '}
            implemented using
            <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
              Tailwind CSS
            </a>
          </p>
        </div>
      </article>
    </footer>
  )
}
