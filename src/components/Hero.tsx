import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { Icon: Github, href: "https://github.com/ZinnyEdmund", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/ezinne-edmund-103044308",
      label: "LinkedIn",
    },
    { Icon: Mail, href: "mailto:edmunddebyy24@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-mono backdrop-blur-sm hover:border-purple-400 transition-all animate-fade-in-up">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gray-400 block mb-2">Hi, I'm</span>
                <span className="bg-linear-to-r from-white via-purple-200 to-violet-400 bg-clip-text text-transparent block">
                  Ezinne Edmund
                </span>
              </h1>

              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6">
                Frontend Developer
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                I build clean, responsive websites with simple code and
                user-friendly designs. Specializing in modern web technologies
                to create exceptional digital experiences.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollToSection("work")}
                className="group px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 rounded-xl font-semibold flex items-center gap-3 hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                data-cursor-hover
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-105"
                data-cursor-hover
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="relative flex flex-col items-center lg:items-end space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-violet-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border-4 border-purple-500/50 overflow-hidden bg-gray-900 transition-all duration-500 group-hover:border-purple-400 group-hover:scale-105">
                <img
                  src="/mine.jpg"
                  alt="Ezinne Edmund"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-black/90 backdrop-blur-sm rounded-lg border border-purple-500/50 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  Available
                </span>
              </div>
            </div>

            <div
              className="flex gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
                  data-cursor-hover
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
