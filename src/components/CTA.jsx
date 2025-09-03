import React from "react";

const CTASection = () => {
  return (
    <section className="relative py-5 w-full flex items-center justify-center bg-black overflow-hidden px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-grid-slide"></div>
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float-slow opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-float-reverse opacity-60" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse-glow opacity-40" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-float-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative text-center max-w-4xl z-20">
        {/* Main Headline */}
        <div className="mb-2">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-black text-white mb-1 animate-slide-up leading-tight">
            Let AI handle the calls.
          </h2>
          <h4 className="text-xl md:text-6xl lg:text-2xl font-black text-purple-300 animate-slide-up leading-tight">
            You focus on growing your business.
          </h4>
        </div>

        {/* Subtext */}
        <p className="text-gray-400 text-lg lg:text-lg mb-4 animate-fade-in-up opacity-0 max-w-2xl mx-auto leading-relaxed">
          AI that never sleeps, never takes breaks, and always delivers results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 overflow-hidden">
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>

          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:border-purple-400/50 overflow-hidden">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-2 animate-fade-in-up opacity-0">
          <p className="text-gray-500 text-sm mb-4">
            Trusted by 10,000+ businesses worldwide
          </p>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-40px, -40px) rotate(180deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes float-particles {
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

        @keyframes gradient-text {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes grid-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.6s forwards;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 15s ease-in-out infinite;
        }

        .animate-float-particles {
          animation: float-particles linear infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease-in-out infinite;
        }

        .animate-grid-slide {
          animation: grid-slide 20s linear infinite;
        }

        /* Hover effects for buttons */
        .group:hover .group-hover\\:scale-x-100 {
          transform: scaleX(1);
        }

        /* Glass morphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
};

export default CTASection;
