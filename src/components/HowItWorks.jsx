import React from "react";
import { Bot, CalendarCheck2, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="relative min-h-[90vh] w-full py-20 px-6 overflow-hidden bg-white">
      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-100 animate-bgFlow" />
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-200/40 rounded-full blur-3xl animate-moveSlow" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-3xl animate-moveReverse" />
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-pink-200/30 rounded-full blur-3xl animate-moveSlower" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          How <span className="text-purple-600">VOQZ AI</span> Helps
        </h2>
        <p className="text-md text-gray-600 max-w-2xl mx-auto mb-14">
          Smarter conversations, effortless scheduling, and real business
          impact.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card-animate bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500">
            <div className="flex justify-center mb-6">
              <Bot className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI answers and engages naturally
            </h3>
            <p className="text-gray-600">
              Every customer is greeted instantly with human-like conversations.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card-animate delay-200 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500">
            <div className="flex justify-center mb-6">
              <CalendarCheck2 className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Automates scheduling & follow-ups
            </h3>
            <p className="text-gray-600">
              No more missed meetings—AI schedules calls, sends reminders, and
              follows up automatically.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card-animate delay-400 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-500">
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Drives conversions while saving time
            </h3>
            <p className="text-gray-600">
              Free up your team to focus on growth while AI boosts customer
              engagement and closes deals.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        /* Background animations */
        @keyframes bgFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bgFlow {
          background-size: 300% 300%;
          animation: bgFlow 20s ease infinite;
        }

        @keyframes moveSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
        }
        .animate-moveSlow {
          animation: moveSlow 18s ease-in-out infinite;
        }

        @keyframes moveSlower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 40px); }
        }
        .animate-moveSlower {
          animation: moveSlower 22s ease-in-out infinite;
        }

        @keyframes moveReverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -20px); }
        }
        .animate-moveReverse {
          animation: moveReverse 25s ease-in-out infinite;
        }

        /* Card animations */
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card-animate {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }
        .card-animate.delay-200 {
          animation-delay: 0.2s;
        }
        .card-animate.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
