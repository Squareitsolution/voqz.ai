import React from "react";
import {
  TrendingUp,
  DollarSign,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function BusinessNeed() {
  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-gray-200" />,
      percentage: "150%",
      title: "Increase Efficiency",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-gray-200" />,
      percentage: "70%",
      title: "Reduce Costs",
    },
    {
      icon: <Users className="w-5 h-5 text-gray-200" />,
      percentage: "90%+",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(148,163,180) 1px, transparent 1px),
                             linear-gradient(to bottom, rgb(148,163,184) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Subtle Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div> */}

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl w-full">
          {/* Main Content Container */}
          <div className=" shadow-2xl p-8 sm:p-10 lg:p-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 leading-tight">
                <span className="text-white">Why Businesses Need </span>
                <span className="text-gray-300">AI Automation</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-2">
                In a world that never sleeps, your business shouldn't either.
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Voqz AI helps you:
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 group-hover:bg-gray-700 transition-colors">
                      {benefit.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {benefit.percentage}
                    </div>
                  </div>

                  <h3 className="text-sm font-medium text-gray-300">
                    {benefit.title}
                  </h3>

                  <div className="h-0.5 w-8 bg-gray-700 rounded-full mt-3"></div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Stay ahead of your competition with
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-6">
                instant, intelligent communication
              </p>

              {/* <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span>Experience Voqz AI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
