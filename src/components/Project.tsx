import { Sparkles, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "The Pivot",
      image: "/pivot.jpg",
      description:
        "Co-developed a comprehensive analytics platform, implementing responsive UI, data visualizations, and collaboration features with seamless back-end integration.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
      ],
      liveUrl: "https://thepivotsite.netlify.app/",
      githubUrl: "https://github.com/pivotweb/Pivot-Website.git",
    },
    {
      title: "The Pivot Challenge",
      image: "/challenge.jpg",
      description:
        "Co-developed digital transformation platform empowering Nigerian entrepreneurs with practical tools and community-driven business growth.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "https://thepivot.netlify.app/",
      githubUrl: "https://github.com/pivotweb/Pivot-frontend.git",
    },
    {
      title: "Netflix Clone",
      image: "/netflix.jpg",
      description:
        "Developed complete Netflix clone with user authentication, video streaming, and responsive design independently.",
      technologies: ["React", "TypeScript", "Vanilla CSS", "Firebase"],
      liveUrl: "https://netflixclone-three-lime.vercel.app/",
      githubUrl: "https://github.com/ZinnyEdmund/Netflixclone.git",
    },
    {
      title: "Glowve",
      image: "/glowve.jpg",
      description:
        "Glowve is a modern e-commerce platform designed to deliver a smooth, visually engaging shopping experience with essential features for browsing and purchasing products.",
      technologies: ["React", "TypeScript", "Tailwind Css"],
      liveUrl: "https://https://glowve-theta.vercel.app/",
      githubUrl: "https://github.com/ZinnyEdmund/Glowve.git",
    },
    {
      title: "Ventree",
      image: "/ventree.jpg",
      description:
        "Ventree is an easy-to-use bookkeeping and business management platform designed to simplify financial tracking for SMEs.",
      technologies: ["React", "TypeScript", "node.js", "express.js", "redis"],
      liveUrl: "https://ventree.app/",
      githubUrl: "https://github.com/Okafor-Ifeanyi/Ventree.git",
    },
    {
      title: "Porfolio",
      image: "/port.jpg",
      description:
        "A showcase of my projects and skills, demonstrating modern, responsive, and user-friendly web applications.",
      technologies: ["React", "TypeScript", "Tailwind CSS", ],
      liveUrl: "https://mycv-ashen.vercel.app/",
      githubUrl: "https://github.com/ZinnyEdmund/My-Portfolio.git",
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-mono backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            My Work
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-500">Featured</span>
            <br />
            <span className="bg-linear-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 100 + 200}ms`,
                transitionDuration: "1000ms",
              }}
              data-cursor-hover
            >
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-purple-900/20 to-violet-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-400 font-mono group-hover:border-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
                    data-cursor-hover
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-800 text-gray-400 font-semibold rounded-lg hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-105"
                    data-cursor-hover
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center p-8 border border-gray-800 rounded-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h4 className="text-2xl font-bold text-white mb-4">
            Want to see more of my work?
          </h4>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Check out my GitHub for more projects and contributions to the open
            source community.
          </p>
          <a
            href="https://github.com/ZinnyEdmund"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-800 text-gray-300 font-semibold rounded-lg hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-105"
            data-cursor-hover
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
