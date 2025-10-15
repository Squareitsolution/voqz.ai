import React from "react";
import { ArrowRight, Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Our appointment booking rates jumped by 40% within a month—without hiring new staff.",
      author: "Lisa M.",
      role: "Salon Owner",
      rating: 5,
    },
    {
      quote:
        "Voqz AI has cut our operational costs by 65% and delivers instant customer service.",
      author: "David K.",
      role: "Real Estate Broker",
      rating: 5,
    },
    {
      quote: "Clients get answers instantly, even after hours. Game-changer!",
      author: "Ravi P.",
      role: "Immigration Lawyer",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-slate-200 mt-2 text-lg ">
            Rated 5/5 by our clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative border border-slate-700"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-slate-950 rounded-full p-3 shadow-lg border border-slate-700">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-slate-700 pt-4">
                <p className="font-bold text-white text-lg font-mono">
                  {testimonial.author}
                </p>
                <p className="text-slate-400 text-sm font-mono">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center flex flex-col items-center mt-16">
          <p className="text-slate-200 text-lg mb-6">
            Join hundreds of businesses transforming their operations with AI
          </p>
          <button className="bg-slate-900 flex items-center gap-2 cursor-pointer text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-slate-700">
           Get Started Today <ArrowRight className="w-5 h-5 lg:mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
