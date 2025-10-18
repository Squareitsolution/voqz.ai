import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  X,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full animate-grid-move"
            style={{
              backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl animate-float-3"></div>
        <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-pink-600/20 rounded-full blur-3xl animate-float-4"></div>

        {/* Moving Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-line-move-1"></div>
          <div className="absolute top-2/4 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-line-move-2"></div>
          <div className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-line-move-3"></div>
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-emerald-900/10 animate-gradient-shift"></div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 border-t border-gray-700/50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4 animate-fade-in">
                <div className="size-3 rounded-full bg-emerald-400 ring-2 ring-emerald-300/60 animate-pulse-glow"></div>
                <h2 className="text-xl font-semibold text-emerald-300 font-mono tracking-tight">
                  Voqz.ai
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs animate-fade-in-delay">
                Let AI handle your calls while you focus on growing your
                business. Transform customer service with intelligent
                automation.
              </p>

              {/* Contact info */}
              <div className="space-y-3 animate-fade-in-delay-2">
                <a
                  href="tel:+918877665544"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="size-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/40 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-medium">+91 8877665544</span>
                </a>

                <a
                  href="mailto:hello@voqz.ai"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="size-8 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600/40 group-hover:border-emerald-400/50 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="font-medium">hello@voqz.ai</span>
                </a>
              </div>
            </div>

            {/* Navigation column */}
<div className="animate-fade-in-delay">
  <h3 className="text-white font-semibold mb-4 relative">
    Quick Links
    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-expand"></div>
  </h3>
  <ul className="space-y-3">
    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "FAQs", path: "/faqs" },
      { name: "Contact", path: "/contact" },
    ].map((item, index) => (
      <li
        key={item.name}
        className="animate-slide-in"
        style={{ animationDelay: `${0.1 * index}s` }}
      >
        <Link
          to={item.path}
          className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block relative group"
        >
          <span className="relative z-10">{item.name}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded"></div>
        </Link>
      </li>
    ))}
  </ul>
</div>

            

            {/* Services column */}
            <div className="animate-fade-in-delay-2">
              <h3 className="text-white font-semibold mb-4 relative">
                Services
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent animate-expand-delay"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  "AI Call Handling",
                  "Voice Automation",
                  "Customer Support",
                  "Lead Generation",
                  "24/7 Availability",
                ].map((service, index) => (
                  <li
                    key={service}
                    className="animate-slide-in"
                    style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
                  >
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block relative group"
                    >
                      <span className="relative z-10">{service}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4 mb-6 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span>
                    1234 Innovation Drive, Suite 200 <br />
                    San Francisco, CA 94105, USA
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a href="tel:+14155552671" className="hover:text-white">
                    +1 (415) 555-2671
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a href="mailto:contact@vihu.ai" className="hover:text-white">
                    contact@vihu.ai
                  </a>
                </li>
              </ul>

              {/* Social links */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">
                  Follow Us On
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-lg bg-gray-700/40 ring-1 ring-gray-600/40 flex items-center justify-center hover:bg-blue-400/30 hover:ring-blue-400/50 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-lg bg-gray-700/40 ring-1 ring-gray-600/40 flex items-center justify-center hover:bg-pink-500/30 hover:ring-pink-500/50 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-lg bg-gray-700/40 ring-1 ring-gray-600/40 flex items-center justify-center hover:bg-blue-500/30 hover:ring-blue-500/50 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 mb-8 relative">
            <div className="absolute inset-0 border-t border-purple-500/20 animate-border-glow"></div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-delay-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© {currentYear} Voqz.ai. All rights reserved.</span>
              <span className="hidden sm:block">•</span>
              <span className="hidden sm:block animate-pulse-subtle">
                Made with ❤️ in India
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              {["Privacy Policy", "Terms", "Cookies"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-y-[-2px] animate-fade-in"
                  style={{ animationDelay: `${0.8 + 0.1 * index}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(-15px, 25px) rotate(240deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-25px, -30px) rotate(180deg);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -10px) scale(1.1);
          }
          66% {
            transform: translate(-20px, -25px) scale(0.9);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -15px) rotate(90deg);
          }
          50% {
            transform: translate(-30px, -20px) rotate(180deg);
          }
          75% {
            transform: translate(-10px, 15px) rotate(270deg);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes line-move-1 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes line-move-2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes line-move-3 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 2rem;
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.8),
              0 0 30px rgba(16, 185, 129, 0.4);
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes border-glow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 30s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 22s ease-in-out infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-line-move-1 {
          animation: line-move-1 8s linear infinite;
        }
        .animate-line-move-2 {
          animation: line-move-2 10s linear infinite;
        }
        .animate-line-move-3 {
          animation: line-move-3 12s linear infinite;
        }
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
        }
        .animate-expand-delay {
          animation: expand 1s ease-out 0.7s forwards;
        }
        .animate-expand-delay-2 {
          animation: expand 1s ease-out 0.9s forwards;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
