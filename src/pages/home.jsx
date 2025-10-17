import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import TestimonialsSection from '../components/testimonial'
import WhoWeHelpSection from '../components/whoWeHelp'
import BusinessNeed from '../components/whyBusNeed'
import WhyChoose from '../components/whyChoose'
import GetStarted from '../components/getStarted'
import CTASection from '../components/CTA'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TestimonialsSection />
      <WhoWeHelpSection />
      <BusinessNeed />
      <WhyChoose />
      <GetStarted />
      <CTASection />
    </>
  )
}

export default Home
