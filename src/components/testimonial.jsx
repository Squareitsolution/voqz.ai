import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Zap,
} from "lucide-react";

const AnimatedTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      content:
        "This service completely transformed our workflow. The team's attention to detail and innovative solutions exceeded all our expectations.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      lightColor: "from-purple-50 to-pink-50",
      shadowColor: "shadow-purple-200/50",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Outstanding results! The implementation was seamless and the ongoing support has been exceptional. Highly recommended for any business.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-50 to-cyan-50",
      shadowColor: "shadow-blue-200/50",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupVenture",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "A game-changer for our organization. The results speak for themselves - increased efficiency and remarkable customer satisfaction.",
      rating: 5,
      color: "from-emerald-500 to-teal-500",
      lightColor: "from-emerald-50 to-teal-50",
      shadowColor: "shadow-emerald-200/50",
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO",
      company: "Digital Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Professional, reliable, and innovative. This partnership has been instrumental in scaling our operations and achieving our goals.",
      rating: 5,
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-50 to-red-50",
      shadowColor: "shadow-orange-200/50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center md:justify-start mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 transition-all duration-300 ${
            i < rating
              ? "text-yellow-500 fill-yellow-500 animate-star-twinkle"
              : "text-gray-300"
          }`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
            TESTIMONIALS
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${currentTestimonial.color} mx-auto rounded-full animate-pulse`}
          ></div>
        </div>
        {/* <div className="text-center mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-4 animate-glow">
            TESTIMONIALS
          </h2>
        </div> */}

        {/* Main Content */}
        <div className="relative overflow-hidden p-3">
          <div
            key={currentTestimonial.id}
            className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl ${currentTestimonial.shadowColor} animate-fade-slide overflow-hidden`}
          >
            {/* Gradient Background Accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.lightColor} opacity-30 rounded-3xl animate-gradient-shift`}
            ></div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Avatar Section */}
                <div className="text-center md:text-left">
                  <div className="relative inline-block">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.color} rounded-full blur-lg opacity-20 animate-pulse-glow`}
                    ></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.color} rounded-full opacity-10`}
                    ></div>
                    <img
                      key={currentTestimonial.id}
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl animate-float-subtle"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r ${currentTestimonial.color} bg-clip-text text-transparent`}
                    >
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-2 w-12 h-12 text-gray-300 opacity-50" />
                    <blockquote
                      key={`quote-${currentTestimonial.id}`}
                      className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-8 animate-typewriter"
                    >
                      {currentTestimonial.content}
                    </blockquote>
                  </div>

                  <StarRating rating={currentTestimonial.rating} />

                  {/* Call to Action */}
                  <div className="flex items-center gap-3 mt-6">
                    <span className="text-gray-600 font-medium">
                      Trusted by professionals
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-500 animate-bounce-horizontal" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="group bg-white/90 backdrop-blur-sm rounded-full p-4 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 animate-glow-button"
            >
              <ChevronLeft
                className={`w-6 h-6 text-gray-600 group-hover:bg-gradient-to-r group-hover:${currentTestimonial.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}
              />
            </button>

            {/* Modern Dots */}
            <div className="flex gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === currentIndex ? "w-12 h-3" : "w-3 h-3 hover:w-6"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? `bg-gradient-to-r ${testimonial.color} animate-pulse shadow-lg`
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></div>
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group bg-white/90 backdrop-blur-sm rounded-full p-4 border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 animate-glow-button"
            >
              <ChevronRight
                className={`w-6 h-6 text-gray-600 group-hover:bg-gradient-to-r group-hover:${currentTestimonial.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}
              />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-slow opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-float-slow-reverse opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-subtle opacity-40"></div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            text-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
          }
        }

        @keyframes gradientShift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes floatSubtle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatSlowReverse {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes starTwinkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes bounceHorizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes glowButton {
          0%,
          100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
        }

        .animate-fade-slide {
          animation: fadeSlide 0.6s ease-out;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient-shift {
          animation: gradientShift 3s ease-in-out infinite;
        }

        .animate-float-subtle {
          animation: floatSubtle 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: floatSlowReverse 10s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-star-twinkle {
          animation: starTwinkle 1.5s ease-in-out infinite;
        }

        .animate-bounce-horizontal {
          animation: bounceHorizontal 1s ease-in-out infinite;
        }

        .animate-glow-button {
          animation: glowButton 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedTestimonial;
