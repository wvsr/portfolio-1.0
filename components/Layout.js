import Header from './Header'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'

function Layout({ children }) {
  return (
    <div className='font-poppins'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className='w-full '>{children}</main>
    </div>
  )
}

export default Layout
