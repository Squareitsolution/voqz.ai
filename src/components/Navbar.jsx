import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Main bar */}
      <div 
        className={[
          "flex items-center justify-between",
          "border-b border-gray-400/20",
          "bg-gray-800/30 backdrop-blur-xl backdrop-saturate-150",
          "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
          "px-4 sm:px-6 lg:px-8 py-3",
        ].join(" ")}
      >
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-emerald-400/90 ring-2 ring-emerald-300/40" />
          <h2 className="text-lg font-semibold text-emerald-300 font-mono tracking-tight">
            Voqz.ai
          </h2>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-7 text-white/90">
          {["Home", "About", "Services", "FAQs", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="tel:+918877665544"
            className="rounded-xl px-3 py-1.5 font-semibold text-white/90 ring-1 ring-white/25 bg-purple-500/70 hover:bg-purple-400/80 hover:text-white transition-colors"
          >
            +91 8877665544
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden grid place-items-center cursor-pointer  rounded-xl ring-1 ring-gray-400/10 bg-gray-800/10 hover:bg-gray-700/10 text-white"
        >
          {/* Hamburger icon */}
          <span
            className={[
              "block h-0.5 w-5 rounded-full bg-white transition-all",
              isOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />
          <span
            className={[
              "block h-0.5 w-5 rounded-full bg-white transition-opacity",
              isOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-0.5 w-5 rounded-full bg-white transition-all",
              isOpen ? "-translate-y-1 -rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      {isOpen && (
        <div
          className={[
            "lg:hidden",
            "border-t border-gray-400/20",
            "bg-gray-800/30 backdrop-blur-xl backdrop-saturate-150",
            "shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
            "px-6 py-5 text-white/90",
          ].join(" ")}
        >
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Services", "FAQs", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg px-2 py-2 hover:bg-gray-700/40 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="tel:+918877665544"
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl px-3 py-2 font-semibold text-white ring-1 ring-white/25 bg-purple-500/70 hover:bg-purple-400/80 transition-colors"
          >
            +91 8877665544
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
