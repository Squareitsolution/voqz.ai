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
    <section className="relative bg-slate-300 py-10 px-6 sm:px-10 lg:px-16 font-sans text-gray-800">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Who We Help
          </h2>

          <p className="text-gray-600 text-lg mx-auto leading-relaxed">
            Empowering businesses across industries with smart automation and
            next-generation AI solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gray-900 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
