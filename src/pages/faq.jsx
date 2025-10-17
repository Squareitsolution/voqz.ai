import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is VOQZ AI and how does it work?",
      answer: "VOQZ AI is an advanced voice automation platform that helps businesses manage inbound and outbound calls using AI voice agents. These agents sound natural, understand customer intent, and respond instantly—reducing missed calls, automating follow-ups, and improving customer engagement while syncing with your CRM seamlessly."
    },
    {
      question: "Can VOQZ AI integrate with my existing CRM or software?",
      answer: "Yes. VOQZ AI integrates smoothly with major CRMs like HubSpot, GoHighLevel, Monday, Salesforce, and Zoho. It automatically updates call logs, lead status, and customer data, ensuring your workflow remains organized and efficient without requiring any manual data entry."
    },
    {
      question: "How can AI voice agents help my business grow?",
      answer: "AI voice agents from VOQZ handle calls 24/7, respond instantly, and engage leads with human-like accuracy. This ensures no lost inquiries, faster conversions, and better customer satisfaction—helping your business increase efficiency, reduce costs, and scale operations effortlessly."
    },
    {
      question: "Are the AI voices human-like and customizable?",
      answer: "Absolutely. VOQZ offers natural, conversational AI voices that mimic real human tones and emotions. You can customize voice accents, tone, and scripts to match your brand personality—making your customer interactions feel authentic and engaging."
    },
    {
      question: "What industries can benefit from VOQZ AI?",
      answer: "VOQZ AI is built for every industry—from real estate, healthcare, education, and finance to travel, e-commerce, and home services. Whether it's lead follow-ups, appointment reminders, or customer support, VOQZ automates voice workflows tailored to your sector's specific needs."
    },
    {
      question: "How quickly can I start using VOQZ AI?",
      answer: "VOQZ AI can be deployed in as little as 48–72 hours. After your free consultation, our team builds a tailored strategy, integrates your CRM or phone system, and trains your AI voice agents for your specific workflows—so you can start automating almost immediately."
    },
    {
      question: "How secure is VOQZ AI?",
      answer: "We prioritize your data security with enterprise-grade encryption and compliance with global standards. VOQZ AI ensures all call recordings, customer data, and communication logs are stored securely, providing 99.99% uptime and full data protection at every step."
    },
    {
      question: "Can VOQZ AI handle multiple calls at once?",
      answer: "Yes! VOQZ AI's system supports unlimited concurrent calls—meaning your business can handle 10 or even 1,000 calls simultaneously without any wait times. Every customer gets an instant response, boosting satisfaction and reducing missed opportunities dramatically."
    },
    {
      question: "How much does VOQZ AI cost?",
      answer: "VOQZ AI offers flexible pricing based on your business size, call volume, and integration needs. Plans are designed to deliver maximum ROI while reducing operational costs by up to 70%. Contact us for a free consultation and a custom pricing quote tailored to your goals."
    },
    {
      question: "How can I get started with VOQZ AI?",
      answer: "Getting started is simple! Just book a free consultation on our website. Our experts will assess your business needs, create a personalized AI strategy, and help you launch your intelligent voice agents within 72 hours—so you can start transforming your customer communication instantly."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              Questions
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Everything you need to know about VOQZ AI and how it can transform your business communication
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4 group-hover:text-teal-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 mb-4"></div>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 sm:p-12 text-center shadow-2xl border border-teal-400/20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-teal-50 mb-6 sm:mb-8 text-base sm:text-lg max-w-xl mx-auto">
            Start automating your customer communication with AI-powered voice agents today
          </p>
          <button className="bg-white text-teal-600 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}