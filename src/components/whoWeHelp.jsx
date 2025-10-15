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
      description: "Roofing, Plumbing, HVAC, Electrical",
      gradient: "from-blue-500 to-cyan-500",
      code: "01",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Migration, Family, Commercial Law",
      gradient: "from-purple-500 to-indigo-500",
      code: "02",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Clinics, Dental, Therapy",
      gradient: "from-pink-500 to-rose-500",
      code: "03",
    },
    {
      icon: Plane,
      title: "Tourism & Travel",
      description: "24/7 inquiries and bookings",
      gradient: "from-orange-500 to-amber-500",
      code: "04",
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Event bookings, ticketing & customer service",
      gradient: "from-violet-500 to-purple-500",
      code: "05",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Lead qualification and appointment scheduling",
      gradient: "from-emerald-500 to-teal-500",
      code: "06",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(100, 116, 139) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(100, 116, 139) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-slate-500 bg-slate-300 px-4 py-2 rounded-full border border-slate-400">
              &lt;INDUSTRIES /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-mono">
            Who We Help
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI voice solutions are built for businesses of all sizes,
            including:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-300 relative overflow-hidden"
              >
                {/* Technical Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-slate-400"></div>
                </div>

                {/* Code Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors duration-300">
                  {industry.code}
                </div>

                {/* Icon with Gradient Background */}
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-slate-900/10`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">
                  {industry.title}
                </h3>

                {/* Separator Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent mb-4"></div>

                {/* Description */}
                <p className="text-slate-600 text-base leading-relaxed relative z-10">
                  {industry.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-slate-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                  <span className="mr-2 text-sm">[Learn_more]</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-slate-900 text-white px-10 cursor-pointer py-4 rounded-lg font-semibold text-lg  hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 border-2 border-slate-700">
            <span>Find Your Industry</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
