// src/components/EnquiryFormPopup.jsx
import React, { useState } from "react";
import { X, User, Mail, Phone, Send } from "lucide-react";
import { database } from "../../firebase";
import { ref, push } from "firebase/database";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EnquiryFormPopup() {
  const [showForm, setShowForm] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [phoneError, setPhoneError] = useState(""); // phone validation
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // ✅ Real-time phone validation
    if (name === "mobile") {
      const phoneRegex = /^[0-9]{0,10}$/; // allow up to 10 digits
      if (!phoneRegex.test(value)) {
        setPhoneError("Only numbers allowed (max 10 digits)");
      } else if (value.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation
    if (!/^\d{10}$/.test(form.mobile)) {
      setPhoneError("Phone number must be exactly 10 digits");
      toast.error("❌ Please enter a valid 10-digit phone number");
      return;
    }

    const entry = {
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      timestamp: Date.now(),
      source: "floating_form",
    };

    try {
      await push(ref(database, "popupEnquiries"), entry);
      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });
      setPhoneError("");
      setShowForm(false);
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 transition-all p-4 rounded-full shadow-lg text-white flex items-center justify-center"
        title="Express Interest"
      >
        <Mail className="w-6 h-6" />
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/50"
            onClick={() => setShowForm(false)}
          ></div>

          {/* Form Container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 border border-white/20 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 animate-fadeIn z-50">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Request a Callback
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Unlock your child’s potential. Connect with us today!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-all"
                />
              </div>

              {/* Mobile */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  maxLength={10}
                  required
                  className={`w-full bg-white/5 border rounded-xl px-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    phoneError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-white/20 focus:border-teal-500 focus:ring-teal-500/30"
                  }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" /> SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
