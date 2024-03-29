function Contact() {
  return (
    <div className='py-32 hero flex items-center flex-col p-4' id='contact'>
      <h2 className='text-center font-bold sm:text-3xl text-4xl'>CONTACT</h2>
      <p className='text-base sm:text-lg font-medium text-gray-700 py-8 max-w-3xl text-center'>
        I would love to hear from you! Fill out this form and I will get back to
        you as soon as possible.
      </p>
      <article className='py-10 px-8 rounded-md shadow-lg bg-white max-w-3xl w-full my-14'>
        <form action='' className='space-y-6'>
          <section className='space-y-2'>
            <label htmlFor='name' className='font-bold text-sm text-gray-600'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full py-3.5 pl-2 rounded-md bg-[#f0f0f0] outline-none'
              placeholder='Enter Your Name'
            />
          </section>
          <section className='space-y-2'>
            <label htmlFor='email' className='font-bold text-sm text-gray-600'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='w-full py-3.5 pl-2 rounded-md bg-[#f0f0f0] outline-none'
              placeholder='Enter Your Email'
            />
          </section>
          <section className='space-y-2'>
            <label
              htmlFor='message'
              className='font-bold text-sm text-gray-600'
            >
              Message
            </label>
            <textarea
              name=''
              id='message'
              cols='30'
              rows='10'
              className='w-full py-3.5 pl-2 rounded-md bg-[#f0f0f0] outline-none'
              placeholder='Enter Your Message'
            ></textarea>
          </section>
          <section className='flex justify-end'>
            <button className='px-10 py-4 text-sm font-bold bg-yellow-400 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none w-full sm:w-auto'>
              SUBMIT
            </button>
          </section>
        </form>
      </article>
    </div>
  )
}

export default Contact
