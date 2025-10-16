import React, { useState } from "react";
import {
  Phone,
  PhoneCall,
  Users,
  Zap,
  Database,
  PhoneForwarded,
  Bell,
  MessageSquare,
  Clock,
  Target,
  Calendar,
  TrendingUp,
  DollarSign,
  BarChart3,
  Briefcase,
  Workflow,
  Mail,
  Bot,
} from "lucide-react";

export default function AIVoiceSolutions() {
  const [activeTab, setActiveTab] = useState("inbound");

  const inboundFeatures = [
    {
      icon: Clock,
      title: "Your AI Receptionist—Always On",
      description:
        "Never miss an enquiry, even at 5 AM—customers get instant help.",
    },
    {
      icon: Users,
      title: "Instant Connect – Zero Wait Time",
      description:
        'Manage 10+ callers at once—no frustrating "please hold" moments.',
    },
    {
      icon: MessageSquare,
      title: "Personalized AI Responses",
      description:
        "AI answers tailored to your business for a human-like experience.",
    },
    {
      icon: Database,
      title: "Effortless CRM Sync",
      description: "Integrates smoothly with HubSpot, Monday, GHL, and more.",
    },
    {
      icon: Phone,
      title: "Simplified Telephony",
      description: "Works with major providers for seamless call forwarding.",
    },
    {
      icon: PhoneForwarded,
      title: "Smart Call Transfers",
      description:
        "Connect callers directly to your team on your existing system.",
    },
    {
      icon: Bell,
      title: "Live Call Insights",
      description:
        "Send SMS and emails instantly for every enquiry—stay updated.",
    },
    {
      icon: Zap,
      title: "Unified Voice & Chat",
      description:
        "Transform your site into a powerful voice + chat engagement hub.",
    },
  ];

  const outboundFeatures = [
    {
      icon: Target,
      title: "AI That Handles Follow-Ups",
      description:
        "No more chasing payments or documents—automated reminders done right.",
    },
    {
      icon: Calendar,
      title: "Expiry Alerts Made Easy",
      description:
        "Notifies customers about visas, insurance, or subscriptions on time.",
    },
    {
      icon: PhoneCall,
      title: "High-Volume Calling Power",
      description:
        "Reach 1,000+ past clients daily—boost repeat sales effortlessly.",
    },
    {
      icon: Zap,
      title: "Instant Lead Engagement",
      description:
        "Connect with new leads in under 60 seconds from your site or ads.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Bulk Calling",
      description:
        "Make thousands of calls at a fraction of the usual expense.",
    },
    {
      icon: TrendingUp,
      title: "Faster Conversions Guaranteed",
      description: "Instant calls can increase booking rates by up to 72%.",
    },
    {
      icon: Database,
      title: "Seamless CRM Integration",
      description: "Works perfectly with HubSpot, Monday, GHL, and more.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Updates",
      description:
        "Each call triggers instant SMS or email—stay informed instantly.",
    },
  ];

  const workflowFeatures = [
    {
      icon: Briefcase,
      title: "Proven Industry Expertise",
      description:
        "From legal to education, we build AI that fits your sector.",
    },
    {
      icon: Workflow,
      title: "Efficient Workflows",
      description: "Tailored automation designed to save both time and money.",
    },
    {
      icon: Mail,
      title: "AI-Powered Email Automation",
      description:
        "Automate emails for outreach, updates, and follow-ups easily.",
    },
    {
      icon: Bot,
      title: "Custom AI for Daily Tasks",
      description:
        "Automate routine work like scheduling, reports, and customer care.",
    },
  ];

  return (
    <div className="min-h-screen relative bg-slate-300 py-12 px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our AI Voice Solutions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Revolutionize your business communications with intelligent voice
            agents
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab("inbound")}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === "inbound"
                ? "bg-slate-900 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Inbound Voice Agents</span>
            </div>
            <p className="text-sm mt-1 opacity-90">
              Handle incoming calls intelligently—24/7
            </p>
          </button>

          <button
            onClick={() => setActiveTab("outbound")}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === "outbound"
                ? "bg-slate-900 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              <span>Outbound Voice Agents</span>
            </div>
            <p className="text-sm mt-1 opacity-90">
              Automate outgoing calls naturally
            </p>
          </button>

          <button
            onClick={() => setActiveTab("workflow")}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === "workflow"
                ? "bg-slate-900 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 hover:bg-slate-50 shadow"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Workflow className="w-5 h-5" />
              <span>Workflow Automation</span>
            </div>
            <p className="text-sm mt-1 opacity-90">
              Custom AI for your business
            </p>
          </button>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            activeTab === "workflow" ? "lg:grid-cols-2" : "lg:grid-cols-4"
          } gap-6 mb-12`}
        >
          {(activeTab === "inbound"
            ? inboundFeatures
            : activeTab === "outbound"
            ? outboundFeatures
            : workflowFeatures
          ).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            {activeTab === "inbound"
              ? "Discover Inbound AI →"
              : activeTab === "outbound"
              ? "Start Outbound Automation →"
              : "Automate My Business →"}
          </button>
        </div> */}
      </div>
    </div>
  );
}
