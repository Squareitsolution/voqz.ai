import React from "react";
import { Calendar, FileText, Rocket, ArrowRight, Sparkles } from "lucide-react";

export default function GetStarted() {
  const steps = [
    {
      number: "1",
      icon: <Calendar className="w-6 h-6 text-indigo-400" />,
      title: "Book a Free Consultation",
      description: "Talk to our AI experts to explore your business needs.",
    },
    {
      number: "2",
      icon: <FileText className="w-6 h-6 text-indigo-400" />,
      title: "Get a Custom Strategy",
      description:
        "We'll design a tailored AI implementation plan just for you.",
    },
    {
      number: "3",
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      title: "Launch & Transform",
      description:
        "Watch your customer engagement scale while your costs drop.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(255, 255, 255) 2px, transparent 2px),
                           linear-gradient(to bottom, rgb(255, 255, 255) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How to <span className="text-indigo-400">Get Started</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Begin Your AI Journey in 3 Easy Steps
            </p>
          </div>

          {/* Steps Section */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-40"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative bg-[#0B1220] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-indigo-500/40 h-full flex flex-col items-center text-center">
                    {/* Step Number Circle */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-2xl">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#11182A] border border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-20 -right-4 items-center justify-center z-20">
                      <ArrowRight className="w-8 h-8 text-indigo-400 opacity-60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
              <span>Start My AI Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
