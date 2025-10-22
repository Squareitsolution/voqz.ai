
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
import Login from "./pages/Admin/Login"
import Dashboard from "./pages/Admin/Dashboard"
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from "./components/scrollToTop"
import MainLayout from "./pages/layout"
import ProtectedRoute from "./pages/ProtectedRoute"
import ThankYou from "./pages/thanks"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<AboutUs /> } />
            <Route path="/services" element={<ServicesPage /> } />
            <Route path="/faqs" element={<FAQ /> } />
            <Route path="/contact" element={<Contact /> } />
          </Route>


          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

        </Routes>

        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      </Router>
    
      
    </>
  )
}

export default App
