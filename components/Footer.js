import { BsArrowUpRight } from 'react-icons/bs'
export default function Footer() {
  return (
    <footer className='bg-indigo-700 text-white'>
      <article className='w-5xl py-10 container mx-auto p-4'>
        <p className='text-2xl font-bold'>
          Looking for same one to join an awesome venture.
        </p>
        <p className='text-4xl font-extrabold py-8'>
          <a href='' className='flex gap-3'>
            Let{`'`}s connect
            <span className='mt-[4px] font-black'>
              <BsArrowUpRight />
            </span>
          </a>
        </p>
        <ul className='flex flex-col md:flex-row gap-4 text-xl pt-6 pb-3'>
          <li>
            <a href='' className='flex gap-1'>
              Linkedin
              <span className='mt-[4.5px] font-black'>
                <BsArrowUpRight />
              </span>
            </a>
          </li>
          <li>
            <a href='' className='flex gap-1'>
              Facebook
              <span className='mt-[4.5px] font-black'>
                <BsArrowUpRight />
              </span>
            </a>
          </li>
          <li>
            <a href='' className='flex gap-1'>
              Github
              <span className='mt-[4.5px] font-black'>
                <BsArrowUpRight />
              </span>
            </a>
          </li>
        </ul>
      </article>
    </footer>
  )
}
