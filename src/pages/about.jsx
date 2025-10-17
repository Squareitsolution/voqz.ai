import React from "react";
import {
  Target,
  Globe,
  Lightbulb,
  TrendingUp,
  Users,
  Sparkles,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function AboutUs() {
  const goals = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Leadership",
      description: "Become the go-to AI automation partner globally.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Transform 100,000+ businesses through AI.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Excellence",
      description: "Set benchmarks for voice AI technology.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Customer Success",
      description: "Deliver industry-leading ROI and satisfaction.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const values = [
    {
      icon: <Users className="w-7 h-7 text-teal-400" />,
      title: "Client Success First",
      description: "Your wins are our wins.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-teal-400" />,
      title: "Innovation Always",
      description: "Pushing AI boundaries every day.",
    },
    {
      icon: <Award className="w-7 h-7 text-teal-400" />,
      title: "Excellence in Delivery",
      description: "From product to support, quality comes first.",
    },
    {
      icon: <Heart className="w-7 h-7 text-teal-400" />,
      title: "Empowering Growth",
      description: "Helping businesses unlock their full potential.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-300">
      {/* ✅ Tech Banner Section */}
      <section
        className="relative w-full h-[50vh] sm:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=1600&h=900&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Text */}
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            <span className="text-white/90 hover:text-teal-400 transition-colors cursor-pointer">
              Home
            </span>{" "}
            <span className="mx-2 text-teal-400">›</span> About Us
          </p>
        </div>
      </section>

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

      {/* 🌟 About Overview Section (Newly Added) */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            At <span className="text-teal-400 font-semibold">VOQZ</span>, we are
            redefining how businesses communicate through cutting-edge{" "}
            <span className="text-cyan-400 font-semibold">Voice AI</span>.
            Our platform empowers companies to automate conversations,
            enhance customer experiences, and accelerate growth — all through
            the power of intelligent voice interaction.
          </p>
        </div>
      </section>

      {/* 🌀 Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Story
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              VOQZ began as a small team passionate about AI and has grown into a
              leading voice-automation provider. Our vision was simple: make AI
              conversations so natural that customers couldn't tell the
              difference—and ensure businesses never lose opportunities to missed
              calls.
            </p>
          </div>
        </div>
      </section>

      {/* 🎯 Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
              "Our mission is to bridge the gap between human and AI voice
              interactions. We design intelligent systems that not only answer
              but also engage, convert, and support business growth."
            </p>
          </div>

          {/* Right - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Mission and vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Goals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Goals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all duration-300 hover:scale-[1.03]"
              >
                <div
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${goal.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-400">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💎 Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-teal-600 to-cyan-500 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s Build the Future of Voice AI Together
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Partner with VOQZ to revolutionize customer engagement through
          cutting-edge Voice AI solutions.
        </p>
        <button className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition-all">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}
