import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 area ">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          Transform Your Business <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            with AI Automation
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Voqz.ai helps startups and enterprises automate workflows, enhance
          productivity, and accelerate digital growth with modern, AI-inspired
          tools and technology services.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg transition"
          >
           Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
