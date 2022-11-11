import Header from './Header'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className='relative'>
      <Head>
        <title>Wasimul Vari Sami - Web Programmer</title>
        <meta name='title' content='Wasimul Vari Sami - Web Programmer' />
        <meta
          name='description'
          content='A Full Stack Developer who specializes in JavaScript and python Technologies across the whole mern stack (Node.js, Express, Angular, React). Experience building complete web applications with backend API System'
        />
        <meta
          name='keywords'
          content='Wasimul Sami, Wasimul Vari Sami, Developer Portfolio'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className='fixed bottom-10 left-[16px] md:left-16 z-50 text-gray-100'>
      <a href='https://www.fiverr.com/share/1NXKa9' target='_blank' rel='noreferrer' className='capitalize px-10 py-4 text-sm font-bold bg-blue-700 rounded-lg shadow-xl hover:-translate-y-1 duration-200 transition-transform outline-none'>
              hire me :)
      </a>
      </div>
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default Layout
