import AboutUs from "./components/About"
import CTASection from "./components/CTA"
import Features from "./components/features"
import Footer from "./components/footer"
import GetStarted from "./components/getStarted"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import AnimatedTestimonial from "./components/testimonial"
import WhatWeDo from "./components/whatWeDo"
import WhoWeHelpSection from "./components/whoWeHelp"
import BusinessNeed from "./components/whyBusNeed"
import WhyChoose from "./components/whyChoose"
import PainPoints from "./components/whyNeed"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <AnimatedTestimonial />
      <WhoWeHelpSection />
      <BusinessNeed />
      <WhyChoose />
      <GetStarted />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
