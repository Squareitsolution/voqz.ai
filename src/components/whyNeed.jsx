import React from "react";
import {
  PhoneOff,
  Timer,
  CalendarX2,
  CheckCircle2,
  Clock,
  CalendarCheck2,
} from "lucide-react";

const PainPoints = () => {
  return (
    <section className="relative min-h-[90vh] w-full py-20 px-6 overflow-hidden bg-[#1B1B2C]">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-transparent to-blue-700/20 animate-pulse" />

      {/* Floating blurred orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Why businesses need <span className="text-purple-400">VOQZ AI</span>
        </h2>
        <p className="text-md text-gray-300 max-w-2xl mx-auto mb-14">
          Missed calls, slow follow-ups, and manual scheduling cost businesses
          opportunities every day.
        </p>

        {/* Before vs After cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="bg-[#23233a]/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              ❌ Before VOQZ AI
            </h3>
            <ul className="space-y-5 text-left text-gray-300">
              <li className="flex items-start gap-3">
                <PhoneOff className="w-6 h-6 text-red-400 flex-shrink-0" />
                Missed customer calls lead to lost opportunities
              </li>
              <li className="flex items-start gap-3">
                <Timer className="w-6 h-6 text-red-400 flex-shrink-0" />
                Slow follow-ups frustrate customers
              </li>
              <li className="flex items-start gap-3">
                <CalendarX2 className="w-6 h-6 text-red-400 flex-shrink-0" />
                Manual scheduling wastes time & resources
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-[#23233a]/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              ✅ After VOQZ AI
            </h3>
            <ul className="space-y-5 text-left text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                Every call is answered instantly by AI
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-green-400 flex-shrink-0" />
                Real-time follow-ups keep customers engaged
              </li>
              <li className="flex items-start gap-3">
                <CalendarCheck2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                Smart scheduling automates meetings & reminders
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default PainPoints;
