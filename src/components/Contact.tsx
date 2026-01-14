import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    { icon: Mail, label: "Email", value: "edmunddebby24@gmail.com", href: "mailto:edmunddebby24@gmail.com" },
    { icon: Phone, label: "Phone", value: "+(234) 901-480-8878", href: "tel:+2349014808878" },
    { icon: MapPin, label: "Location", value: "Enugu, NG" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/50 text-purple-400 text-sm font-mono backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="block text-gray-500 mb-2">Let's Work</span>
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <div
                  key={i}
                  className="border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all group"
                  data-cursor-hover
                >
                  <a href={contact.href} className="flex items-center space-x-4 group-hover:text-purple-300 transition-colors">
                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-purple-600/20 transition-all">
                      <contact.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">{contact.label}</p>
                      <p className="text-lg font-semibold text-white">{contact.value}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-6 text-white">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: 'https://github.com/ZinnyEdmund' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/ezinne-edmund-103044308' },
                  { Icon: Twitter, href: 'https://x.com/Zinny_mund' }
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
                    data-cursor-hover
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`flex flex-col justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-white">Ready to Start?</h3>
                <p className="text-gray-400 text-lg">
                  Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:edmunddebby24@gmail.com"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                    data-cursor-hover
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Send me an email
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </a>
                  <a
                    href="https://calendly.com/edmunddebby24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-8 py-4 border border-gray-800 text-gray-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-105"
                    data-cursor-hover
                  >
                    <Calendar className="h-5 w-5 mr-3" />
                    Schedule a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center p-8 border border-gray-800 rounded-2xl transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-2xl font-bold text-white mb-4">Have a specific project in mind?</h4>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I love working on unique challenges and innovative solutions. Let's discuss your vision and make it reality.
          </p>
          <a
            href="mailto:edmunddebby24@gmail.com?subject=Project Inquiry&body=Hi Edmund, I have a project in mind and would love to discuss it with you."
            className="inline-flex items-center px-6 py-3 border border-gray-800 text-gray-300 font-semibold rounded-xl hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-105"
            data-cursor-hover
          >
            Let's discuss your project
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}