import Image from 'next/image'
export default function About() {
  return (
    <div className='py-5 md:py-14 container mx-auto p-3 max-w-5xl'>
      <article className='flex flex-col md:flex-row gap-6'>
        <section className='w-full md:w-1/2 order-2 md:order-1'>
          <h2 className='text-3xl py-8 font-bold tracking-wide'>
            Hi, I{`'`}m{' '}
            <span className='text-indigo-600 font-black text-4xl'>
              Wasimul Sami
            </span>
            . Web Developer based in Dhaka, Bangladesh
          </h2>
          <p className='text-xl px-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            architecto numquam molestias dolore itaque libero suscipit id
            commodi dolorum, dolorem et natus possimus illo eius enim pariatur
            exercitationem culpa nam.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            autem voluptatibus, ipsa nulla totam dolor. At enim quia veritatis
            doloribus molestias reiciendis maiores eos neque sit. Reprehenderit
            nesciunt quaerat voluptatibus? Praesentium quaerat quis
          </p>
        </section>
        <section className=' md:px-6 py-8 w-full md:w-1/2 order-1 md:order-2'>
          <div>
            <Image
              src='/sami.jpg'
              width={1648 / 3}
              height={1624 / 3}
              sizes='100vw'
              className='w-full h-auto'
            />
          </div>
        </section>
      </article>
    </div>
  )
}
