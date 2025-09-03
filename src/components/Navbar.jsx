import React, { useState } from 'react'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false); 
    // var, function to update the var, initial value of the var
  return (
    <nav>
      <div className="lg:flex hidden justify-between items-center p-5 bg-gray-900 fixed top-0 w-full">
        <div>
          <h2 className="text-lg font-semibold text-green-600 font-mono">
            Voqz.ai
          </h2>
        </div>
        <ul className="flex gap-7 text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="text-white bg-purple-500 px-2 py-1 rounded-xl font-semibold hover:bg-purple-300 hover:text-black">
          <a href="tel:+918877665544">+91 8877665544</a>
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center p-5 bg-gray-900 fixed top-0 w-full text-white">
        <div>
          <h2 className="text-lg font-semibold text-green-600 font-mono">
            Voqz.ai
          </h2>
        </div>

        <button onClick={() => setIsClicked(!isClicked)} className="rotate-90 cursor-pointer text-xl font-bold">
          |||
        </button>
      </div>
      {isClicked && (
        <div className="lg:hidden flex flex-col justify-center items-center p-5 bg-gray-900 fixed top-16 w-full text-white gap-5">
          <ul className="flex flex-col gap-5 text-white">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar