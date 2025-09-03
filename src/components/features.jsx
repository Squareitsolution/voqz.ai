import React from "react";
import { Mic, Brain, Clock, Link2 } from "lucide-react";

const Features = () => {
  return (
    <section className="relative min-h-[80vh] w-full py-20 px-6 bg-[#1B1B2C] overflow-hidden">
      {/* Background Glow Animations */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-move1" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl animate-move2" />
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-3xl animate-move3" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Powerful <span className="text-purple-400">Features</span>
        </h2>
        <p className="text-md text-gray-300 max-w-2xl mx-auto mb-14">
          Everything you need to deliver seamless, human-like conversations with
          your customers.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="feature-card flex flex-col items-center delay-0">
            <Mic className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Natural Voice Conversations
            </h3>
            <p className="text-gray-400">
              Engage customers with realistic, human-like voice interactions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card flex flex-col items-center delay-0">
            <Brain className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Intelligent Understanding
            </h3>
            <p className="text-gray-400">
              AI that truly understands context and responds meaningfully.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card flex flex-col items-center delay-0">
            <Clock className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              24/7 Availability
            </h3>
            <p className="text-gray-400">
              Always on, ensuring no call or customer goes unanswered.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card flex flex-col items-center delay-0">
            <Link2 className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Easy Integration
            </h3>
            <p className="text-gray-400">
              Seamlessly connects with your existing tools and workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        /* Moving glowing blobs */
        @keyframes move1 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(40px, -30px); }
        }
        .animate-move1 { animation: move1 18s ease-in-out infinite; }

        @keyframes move2 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-50px, 20px); }
        }
        .animate-move2 { animation: move2 20s ease-in-out infinite; }

        @keyframes move3 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-30px, -40px); }
        }
        .animate-move3 { animation: move3 22s ease-in-out infinite; }

        /* Card animation (fade + lift) */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .feature-card {
          background: rgba(35,35,58,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0,0,0,0.6);
        }

        .feature-card.delay-200 { animation-delay: 0.2s; }
        .feature-card.delay-400 { animation-delay: 0.4s; }
        .feature-card.delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Features;
