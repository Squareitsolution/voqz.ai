import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const features = [
    "Custom Digital Solutions",
    "Fast and Scalable Delivery",
    "Dedicated Technical Expertise",
    "Future-Ready Approach",
  ];

  return (
    <section className="min-h-screen bg-slate-200 text-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
            Why Voqz.ai?
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-8"></div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              At Voqz.ai, we believe in{" "}
              <span className="text-cyan-600 font-semibold">
                simplifying technology
              </span>
              . Our goal is to make intelligent digital solutions accessible to
              every business — from small startups to large enterprises.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We combine{" "}
              <span className="text-blue-600 font-semibold">
                innovation, design, and strategy
              </span>{" "}
              to build scalable tech experiences that make an{" "}
              <span className="text-cyan-600 font-semibold">impact</span>.
            </p>

            {/* Features list */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:translate-x-2"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {/* Animated cards */}
            <div className="absolute inset-0 flex items-center justify-center perspective">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-3xl blur-2xl opacity-60"></div>

              {/* Main card */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 to-blue-50/40 rounded-2xl"></div>

                <div className="relative h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-32 bg-gray-300 rounded-full"></div>
                      <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Secondary cards */}
              <div className="absolute top-12 right-12 w-32 h-32 bg-gray-100/60 border-2 border-gray-200 rounded-xl backdrop-blur-sm transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute bottom-12 left-12 w-32 h-32 bg-gray-100/60 border-2 border-gray-200 rounded-xl backdrop-blur-sm transform -rotate-12 hover:-rotate-6 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-gray-200 pt-16">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Team Members" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}
 