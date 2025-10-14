import {
  Code,
  Zap,
  Palette,
  Cloud,
  Compass,
  ArrowRight,
  Check,
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description:
        "Modern and responsive websites designed for performance and growth.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Design",
        "Performance Optimized",
        "SEO-Friendly",
        "Fast Loading",
      ],
    },
    {
      id: 2,
      icon: Zap,
      title: "AI-Driven Automation",
      description:
        "Streamline repetitive tasks and boost efficiency using intelligent automation tools.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Smart Workflows",
        "Process Automation",
        "Data Integration",
        "Real-time Insights",
      ],
    },
    {
      id: 3,
      icon: Palette,
      title: "Product Design & Branding",
      description:
        "Build your brand identity and user experience that stand out.",
      color: "from-orange-500 to-red-500",
      features: [
        "Brand Strategy",
        "UI/UX Design",
        "Visual Identity",
        "Design Systems",
      ],
    },
    {
      id: 4,
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description:
        "Scalable and secure deployment strategies tailored for your business.",
      color: "from-emerald-500 to-teal-500",
      features: [
        "Cloud Infrastructure",
        "CI/CD Pipelines",
        "Monitoring & Logging",
        "Security First",
      ],
    },
    {
      id: 5,
      icon: Compass,
      title: "Digital Strategy Consulting",
      description:
        "We guide you to make smarter technology investments for long-term success.",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Strategy Planning",
        "Tech Assessment",
        "Roadmap Creation",
        "Expert Guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Comprehensive digital solutions tailored to drive your business
              forward
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    {/* Main card */}
                    <div className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                      {/* Number badge */}
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600/50 to-cyan-600/50 border border-cyan-400/30 flex items-center justify-center text-sm font-bold text-cyan-300">
                        {String(service.id).padStart(2, "0")}
                      </div>

                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2 mb-6 pb-6 border-b border-slate-700">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Learn more link */}
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
