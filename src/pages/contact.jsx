import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  MessageSquare,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { database } from "../../firebase";
import { ref, push, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const inquiriesRef = ref(database, "inquiries");
      const newInquiryRef = push(inquiriesRef);

      await set(newInquiryRef, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(20,184,166) 1px, transparent 1px),
                             linear-gradient(to bottom, rgb(20,184,166) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

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
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            <span className="text-white/90 hover:text-teal-400 transition-colors cursor-pointer">
              Home
            </span>{" "}
            <span className="mx-2 text-teal-400">›</span> Contact Us
          </p>
        </div>
      </section>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Banner Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            We'd Love to{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              Hear From You
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 px-4">
            Whether you're ready to launch AI voice agents, curious about
            automation possibilities, or just exploring—our team is here to
            help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Reach Us Directly Card */}
            <div className="bg-slate-300 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-teal-500/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm mb-1">Email</p>
                    <a
                      href="mailto:info@voqz.ai"
                      className="text-black font-semibold hover:text-teal-400 transition-colors"
                    >
                      info@voqz.ai
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-teal-500/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+61468488102"
                      className="text-black font-semibold hover:text-teal-400 transition-colors"
                    >
                      +61 46848 8102
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal-500/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm mb-1">Location</p>
                    <p className="text-black font-semibold">
                      Sydney, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-300 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-teal-500/50 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-teal-500/50 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all group"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-teal-500/50 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-teal-500/50 rounded-xl flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-300 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Send Us a Message
              </h2>
              <p className="text-slate-800 mb-8">
                Have a question or project idea? Fill out the form and we'll get
                back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-white/10 rounded-xl px-12 py-3 sm:py-4 text-gray-800 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full bg-white border border-white/10 rounded-xl px-12 py-3 sm:py-4 text-gray-800 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Company Name{" "}
                    <span className="text-slate-600 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full bg-white border border-white/10 rounded-xl px-12 py-3 sm:py-4 text-gray-800 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-black font-semibold mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project or question..."
                      className="w-full bg-white border border-white/10 rounded-xl px-12 py-4 text-gray-800 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg hover:from-teal-500 hover:to-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
