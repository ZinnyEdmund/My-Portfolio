import { Code2, Heart, Lightbulb, Target, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
   const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Code2, title: "Clean Code", desc: "I write maintainable, well-documented code that scales with your project's growth." },
    { icon: Heart, title: "User-Focused", desc: "Every design decision I make prioritizes user experience and accessibility." },
    { icon: Lightbulb, title: "Innovative", desc: "I stay updated with the latest technologies to bring fresh solutions to projects." },
    { icon: Target, title: "Goal-Oriented", desc: "I focus on delivering results that meet both user needs and business objectives." }
  ];

  const stats = [
    { value: "2+", label: "Years Learning" },
    { value: "9+", label: "Projects Built" },
    { value: "6+", label: "Technologies" },
    { value: "100%", label: "Commitment" }
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-mono backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Get to Know Me
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gray-500 pr-3">About</span>
            {/* <br /> */}
            <span className="bg-linear-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm passionate about creating beautiful, interactive web experiences that make technology accessible to everyone. I specialize in React and modern JavaScript, with a keen eye for responsive design using Tailwind CSS.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I believe in writing clean, maintainable code and always prioritize user experience. When I'm not coding, I'm exploring new technologies and working on personal projects that challenge me to grow as a developer.
            </p>
            <div className="pt-6">
              <a
                href="/CV.pdf"
                download="EzinneEdmund.pdf"
                className="inline-block px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                data-cursor-hover
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className={`p-6 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all hover:bg-gray-900/50 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100 + 400}ms`, transitionDuration: '1000ms' }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100 + 800}ms` }}
            >
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}