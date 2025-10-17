import React, { useState } from "react";
import {
  Phone,
  Clock,
  Users,
  MessageSquare,
  Database,
  PhoneForwarded,
  Bell,
  BarChart3,
  PhoneOutgoing,
  Target,
  TrendingUp,
  Zap,
  RefreshCw,
  Mail,
  Calendar,
  Home,
  Heart,
  GraduationCap,
  ShoppingCart,
  Building2,
  Lock,
  DollarSign,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inboundFeatures = [
    { icon: <Clock className="w-5 h-5" />, title: "Always Available", description: "Round-the-clock coverage so you never miss a call." },
    { icon: <Zap className="w-5 h-5" />, title: "Zero Wait Times", description: "Instant responses = happier customers." },
    { icon: <MessageSquare className="w-5 h-5" />, title: "Personalized Conversations", description: "Tailored scripts that reflect your brand voice." },
    { icon: <Database className="w-5 h-5" />, title: "CRM Integration", description: "Every interaction logged automatically." },
    { icon: <Phone className="w-5 h-5" />, title: "Easy Telephony Setup", description: "Connects with your existing phone system." },
    { icon: <PhoneForwarded className="w-5 h-5" />, title: "Smart Call Transfer", description: "Smooth handovers to your human team when needed." },
    { icon: <Bell className="w-5 h-5" />, title: "Real-Time Call Insights", description: "Instant SMS/email reports on outcomes." },
    { icon: <MessageSquare className="w-5 h-5" />, title: "Voice + Chat Fusion", description: "Customers switch naturally between voice & chat." },
  ];

  const automationFeatures = [
    { icon: <Building2 className="w-5 h-5" />, title: "Industry-Specific Expertise", description: "Tailored solutions for healthcare, real estate, finance, and more." },
    { icon: <Zap className="w-5 h-5" />, title: "Efficiency First", description: "Workflows designed to save time and money." },
    { icon: <Mail className="w-5 h-5" />, title: "Smart Email Automation", description: "AI handles reminders, outreach, and follow-ups." },
    { icon: <Calendar className="w-5 h-5" />, title: "Daily Ops Bots", description: "Automate scheduling, reporting, and data entry." },
  ];

  const industries = [
    { icon: <Home className="w-6 h-6" />, title: "Real Estate", subtitle: "Lead Follow-Ups", description: "Never lose a potential buyer. AI manages timely follow-ups & qualifies prospects.", color: "from-teal-500 to-cyan-500" },
    { icon: <Heart className="w-6 h-6" />, title: "Healthcare", subtitle: "Appointment Reminders", description: "Reduce no-shows with voice reminders for visits, prescriptions, and check-ups.", color: "from-pink-500 to-rose-500" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Education", subtitle: "Admissions Outreach", description: "AI-driven calls keep students and parents updated on admissions and enrollments.", color: "from-blue-500 to-indigo-500" },
    { icon: <ShoppingCart className="w-6 h-6" />, title: "E-Commerce", subtitle: "Promotional Campaigns", description: "Boost sales with personalized outbound calls and offers.", color: "from-orange-500 to-amber-500" },
    { icon: <Building2 className="w-6 h-6" />, title: "Finance", subtitle: "Loan & Policy Reminders", description: "Automated reminders keep payments, renewals, and policies on track.", color: "from-purple-500 to-pink-500" },
  ];

  const whyChoose = [
    { icon: <Zap className="w-8 h-8" />, title: "Fast Setup", description: "Go live in 48–72 hours.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    { icon: <Lock className="w-8 h-8" />, title: "Enterprise-Grade Security", description: "Data encrypted and compliance ready.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop" },
    { icon: <DollarSign className="w-8 h-8" />, title: "ROI Guaranteed", description: "See measurable savings and growth.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
    { icon: <Headphones className="w-8 h-8" />, title: "Dedicated Support", description: "Ongoing optimization to keep you ahead.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(148,163,180) 1px, transparent 1px),
                             linear-gradient(to bottom, rgb(148,163,184) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Banner */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">AI-Powered Voice Solutions</span>
            </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Voice Interaction <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                That Feels Human
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              More than just answering calls—VOQZ delivers real conversations that understand, engage, and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                <span>Talk to an AI Voice Agent Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-300">
                <span>Check Demo</span>
              </button>
            </div>
        </div>
      </section>

        {/* Inbound Voice Agents */}
        <section className="py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Inbound Voice Agents</h2>
              </div>
              <p className="text-gray-400 text-lg">Conversations That Work 24/7</p>
              <p className="text-gray-300 text-base mt-4 max-w-3xl mx-auto">
                Our inbound AI receptionists ensure your business never misses a lead, while delivering human-like service at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {inboundFeatures.map((feature, index) => (
                <div key={index} className="bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl">
                  <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                <span>Start a Free Trial Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-300">
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </section>

        
       

        {/* Custom AI Workflow Automation */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Started With Us In Three Simple Steps
              </h2>
              <p className="text-gray-400 text-lg">
                Begin your AI transformation journey with our streamlined onboarding process
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto mb-16">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 via-cyan-500 to-purple-500"></div>

              {/* Step 1 - Right */}
              <div className="relative flex items-center justify-end mb-20">
                <div className="w-1/2 pr-12">
                  <div className="bg-white rounded-xl p-8 shadow-2xl border-t-4 border-teal-500">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-teal-500" />
                      <h3 className="text-xl font-bold text-gray-900">Book a Consultation</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Schedule a personalized session with our AI experts to discuss your business needs and goals.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-slate-950 z-10">
                  01
                </div>
              </div>

              {/* Step 2 - Left */}
              <div className="relative flex items-center justify-start mb-20">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-slate-950 z-10">
                  02
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-xl p-8 shadow-2xl border-t-4 border-cyan-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-6 h-6 text-cyan-500" />
                      <h3 className="text-xl font-bold text-gray-900">Custom Strategy</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Receive a tailored AI implementation strategy, customized to fit your unique business processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Right */}
              <div className="relative flex items-center justify-end">
                <div className="w-1/2 pr-12">
                  <div className="bg-white rounded-xl p-8 shadow-2xl border-t-4 border-purple-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-purple-500" />
                      <h3 className="text-xl font-bold text-gray-900">Launch & Transform</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Watch your business transform with live deployment and optimize your AI automation solutions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-slate-950 z-10">
                  03
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                <span>Start Your Journey Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Additional Features Grid */}
            <div className="mt-20 pt-16 border-t border-gray-800">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Custom AI Workflow Automation
                </h3>
                <p className="text-gray-400 text-base">
                  Streamline your business with AI that works for you
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-gray-400 text-lg">Flexible AI for Every Sector</p>
              <p className="text-gray-300 text-base mt-4 max-w-3xl mx-auto">
                VOQZ adapts to your industry, delivering tailored voice automation that creates real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {industries.map((industry, index) => (
                <div key={index} className="bg-[#0B1220] rounded-xl p-6 border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl">
                  <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{industry.title}</h3>
                  <p className="text-teal-400 text-sm font-medium mb-3">{industry.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                <span>Explore AI for Your Industry</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Why Businesses Choose VOQZ */}
        <section className="py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Businesses Choose VOQZ</h2>
              <p className="text-gray-400 text-lg">The advantages that set us apart</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {whyChoose.map((item, index) => (
                <div key={index} className="group bg-[#0B1220] rounded-xl overflow-hidden border border-gray-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl">
                  <div className="relative h-40 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-teal-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 text-lg">Fill out the form below and our team will reach out to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-[#0B1220] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold text-base shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
                  