import React from "react";
import { Zap, Shield, RefreshCw, Target, ArrowRight } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Lightning Fast Implementation",
      description: "Your AI is live in 48–72 hours—not months.",
      cta: "Get Started Fast",
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Enterprise-Grade Security",
      description:
        "We protect your data with 99.99% secure, military-grade encryption.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Continuous Innovation",
      description:
        "Our AI models evolve weekly, so you're always ahead of the curve.",
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      title: "Tailored Solutions",
      description:
        "Every solution is 100% custom-fit to your goals for maximum ROI.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-indigo-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-indigo-50/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl w-full">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose <span className="text-indigo-600">Voqz AI?</span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Smart. Secure. Scalable. Everything your business needs — done
              right.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative h-full">
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group-hover:border-indigo-200 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="absolute top-7 right-7 w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 flex-1">
                      {feature.description}
                    </p>

                    {feature.cta && (
                      <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group/cta cursor-pointer mt-auto">
                        <span className="border-b-2 border-transparent group-hover/cta:border-indigo-600 transition-all">
                          {feature.cta}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
            <span>Start Your AI Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
