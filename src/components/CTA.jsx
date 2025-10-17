import React from "react";

const CTASection = () => {
  return (
    <section className="relative py-5 w-full flex items-center justify-center bg-gray-300 overflow-hidden px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-slide"></div>
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-float-slow opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float-reverse opacity-60" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-glow opacity-40" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black/80 rounded-full animate-float-particles"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-1 animate-slide-up leading-tight">
            Let AI handle the calls.
          </h2>
          <h4 className="text-xl md:text-6xl lg:text-2xl font-black text-gray-700 animate-slide-up leading-tight">
            You focus on growing your business.
          </h4>
        </div>

        {/* Subtext */}
        <p className="text-gray-700 text-lg lg:text-lg mb-4 animate-fade-in-up opacity-0 max-w-2xl mx-auto leading-relaxed">
          AI that never sleeps, never takes breaks, and always delivers results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0">
          <button className="group relative px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gray-800/25 overflow-hidden">
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>

          {/* <button className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-900 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Let's Talk</span>
          </button> */}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-2 animate-fade-in-up opacity-0">
          <p className="text-gray-600 text-sm mb-4">
            Trusted by 10,000+ businesses worldwide
          </p>
        </div> */}
      </div>

      {/* CSS Animations */}
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
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes float-particles {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
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

        .animate-grid-slide {
          animation: grid-slide 20s linear infinite;
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
};

export default CTASection;
