import React from "react";
import {
  Home,
  Scale,
  Heart,
  Plane,
  Music,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function WhoWeHelpSection() {
  const industries = [
    {
      icon: Home,
      title: "Home Services",
      description: "Roofing, plumbing, HVAC, and electrical professionals.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Family, commercial, and corporate law practices.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Clinics, dental care, therapy, and wellness centers.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Plane,
      title: "Tourism & Travel",
      description: "Tour agencies, hotels, and travel booking platforms.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Event management, bookings, and media production.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Agencies, brokers, and property management firms.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 sm:px-10 lg:px-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full font-medium">
            Industries We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-4 leading-tight">
            Who We Help
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering businesses across industries with smart automation and
            next-generation AI solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Accent gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Button */}
                <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-blue-500 transition-all duration-500">
            <span>Find Your Industry</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
