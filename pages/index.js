import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'

export default function Index() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      {/* <Technologies /> */}
      <Contact />
      <Footer />
    </>
  )
}
