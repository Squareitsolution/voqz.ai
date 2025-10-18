import React from "react";
import { MessageSquare, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export default function GetStarted() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
      title: "Book a Consultation",
      description: "Schedule a personalized session with our AI experts to discuss your business needs and goals.",
    },
    {
      number: "02",
      icon: <Lightbulb className="w-6 h-6 text-teal-400" />,
      title: "Custom Strategy",
      description: "Receive a tailored AI implementation strategy, crafted specifically for your business processes.",
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6 text-teal-400" />,
      title: "Launch & Transform",
      description: "Watch your business transform as you scale and optimize your AI automation solutions.",
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

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
              Get Started With Us In Three Simple Steps
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Begin your AI transformation journey with our streamlined onboarding process
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-teal-400 to-teal-500 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-teal-500 rounded-full blur-xl opacity-40"></div>
                    </div>

                    {/* Card */}
                    <div className="bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl max-w-sm">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 mb-4">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector line for mobile */}
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gradient-to-b from-teal-500 to-teal-400 my-6"></div>
                    )}
                  </div>

                  {/* Desktop Layout - Alternating sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                    {/* Left side content (odd items) */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right pr-8">
                          <div className="inline-block bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl max-w-md">
                            {/* Icon */}
                            <div className="flex justify-end mb-4">
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                {step.icon}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Number Badge in center */}
                        <div className="relative flex justify-start">
                          <div className="absolute -left-7 top-0">
                            <div className="relative">
                              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                                <span className="text-white font-bold text-lg">
                                  {step.number}
                                </span>
                              </div>
                              <div className="absolute inset-0 bg-teal-500 rounded-full blur-xl opacity-40"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Number Badge in center */}
                        <div className="relative flex justify-end">
                          <div className="absolute -right-7 top-0">
                            <div className="relative">
                              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                                <span className="text-white font-bold text-lg">
                                  {step.number}
                                </span>
                              </div>
                              <div className="absolute inset-0 bg-teal-500 rounded-full blur-xl opacity-40"></div>
                            </div>
                          </div>
                        </div>

                        {/* Right side content (even items) */}
                        <div className="text-left pl-8">
                          <div className="inline-block bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl max-w-md">
                            {/* Icon */}
                            <div className="flex justify-start mb-4">
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                {step.icon}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300">
              <span>Start Your Journey Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}