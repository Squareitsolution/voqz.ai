import {
  Zap,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Brain,
  Clock,
  Calendar,
  Server,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Seamless Conversations",
      description: "Seamless Conversations",
      color: "from-blue-500 to-cyan-500",
      lightColor: "from-blue-50 to-cyan-50",
      shadowColor: "shadow-blue-200/50",
    },
    {
      id: 2,
      icon: <Brain className="w-7 h-7" />,
      title: "Human-like Understanding",
      description:
        "Advanced speech recognition and NLP to truly understand customer intent beyond keywords.",
      color: "from-purple-500 to-pink-500",
      lightColor: "from-purple-50 to-pink-50",
      shadowColor: "shadow-purple-200/50",
    },
    {
      id: 3,
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Availability",
      description:
        "Never miss an opportunity—our voice agents are always active, ensuring round-the-clock.",
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-50 to-red-50",
      shadowColor: "shadow-orange-200/50",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Real Business Impact",
      description:
        "Boost conversions, reduce response times, and unlock growth with AI that drives measurable results.",
      color: "from-emerald-500 to-teal-500",
      lightColor: "from-emerald-50 to-teal-50",
      shadowColor: "shadow-emerald-200/50",
    },
    {
      id: 5,
      icon: <Calendar className="w-7 h-7" />,
      title: "Smart Scheduling & Follow-ups",
      description:
        "Automated reminders, bookings, and follow-ups so businesses never lose leads to delays.",
      color: "from-indigo-500 to-blue-500",
      lightColor: "from-indigo-50 to-blue-50",
      shadowColor: "shadow-indigo-200/50",
    },
    {
      id: 6,
      icon: <Server className="w-7 h-7" />,
      title: "Scalable & Reliable",
      description:
        "Built to handle thousands of calls without compromising quality or performance.",
      color: "from-gray-600 to-gray-800",
      lightColor: "from-gray-50 to-slate-50",
      shadowColor: "shadow-gray-200/50",
    },
  ];

  return (
    <div className="max-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
            WHAT WE DO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 }, // md screen → 2 cards
            1024: { slidesPerView: 4 }, // lg screen → 3 cards
          }}
          //   navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          className="pb-12"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${service.shadowColor} hover:shadow-xl`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg mb-4 text-white shadow-md`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatWeDo;
