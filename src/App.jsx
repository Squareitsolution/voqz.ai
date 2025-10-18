
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import AboutUs from "./pages/about"
import ServicesPage from "./pages/services"
import FAQ from "./pages/faq"
import Contact from "./pages/contact"
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import ScrollToTopButton from "./components/ScrollToTopButton"
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from "./components/scrollToTop"

function App() {

  return (
    <>
      <FloatingButtons />

      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<AboutUs /> } />
          <Route path="/services" element={<ServicesPage /> } />
          <Route path="/faqs" element={<FAQ /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
          <Footer />
      </Router>
    
      
    </>
  )
}

export default App
