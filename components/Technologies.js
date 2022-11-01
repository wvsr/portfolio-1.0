import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiPython,
  SiDjango,
  SiJavascript,
} from 'react-icons/si'
export default function Technologies() {
  return (
    <section className='container mx-auto pt-16 pb-24'>
      <h2 className='text-center my-14 text-2xl md:text-3xl text-gray-900 font-light tracking-wider'>
        Skills & Tools
      </h2>
      <p className='font-bold text-lg text-gray-500'></p>

      <article className='flex gap-12 flex-wrap justify-center mt-8 text-gray-600'>
        <div>
          <SiJavascript className='w-20 h-20' />
        </div>
        <div>
          <SiReact className='w-20 h-20' />
        </div>
        <div>
          <SiNextdotjs className='w-20 h-20' />
        </div>
        <div>
          <SiFirebase className='w-20 h-20' />
        </div>
        <div>
          <SiTailwindcss className='w-20 h-20' />
        </div>
        <div>
          <SiPython className='w-20 h-20' />
        </div>
        <div className='hidden sm:block md:hidden lg:block '>
          <SiDjango className='w-20 h-20' />
        </div>
      </article>
    </section>
  )
}
