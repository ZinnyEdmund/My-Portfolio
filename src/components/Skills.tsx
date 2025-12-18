import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Skills() {
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

  const skills = ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vanilla CSS", "HTML5", "Git & GitHub", "VS Code", "npm / yarn"];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with to build amazing experiences</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`px-6 py-3 border border-gray-800 rounded-full text-gray-300 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all font-mono hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${i * 50 + 200}ms`, transitionDuration: '800ms' }}
              data-cursor-hover
            >
              {skill}
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 border border-gray-800 rounded-xl text-gray-400 font-medium backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
            Always learning and exploring new technologies
          </div>
        </div>
      </div>
    </section>
  );
}