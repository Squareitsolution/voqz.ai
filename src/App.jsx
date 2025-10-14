import AboutUs from "./components/About"
import CTASection from "./components/CTA"
import Features from "./components/features"
import Footer from "./components/footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import AnimatedTestimonial from "./components/testimonial"
import WhatWeDo from "./components/whatWeDo"
import PainPoints from "./components/whyNeed"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      {/* <PainPoints /> */}
      <HowItWorks />
      <Features />
      <AnimatedTestimonial />
      {/* <CTASection /> */}
      <Footer />
    </>
  )
}

export default App
