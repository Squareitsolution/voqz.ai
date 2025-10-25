import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import FloatingButtons from "../components/FloatingButtons";
import EnquiryFormPopup from "../components/PopupForm";


const MainLayout = () => {
  return (
    <>
      {/* <FloatingButtons /> */}

      <Navbar />
      <EnquiryFormPopup />

      <ScrollToTopButton />
      <Outlet />
      <Footer />

      {/* Floating CTA Buttons */}
    </>
  );
};

export default MainLayout;