import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-bold">
            <span className="text-white">&lt;</span>
            <span className="bg-linear-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent">EE</span>
            <span className="text-white">/&gt;</span>
          </div>

          <div className="flex gap-6">
            {[
              { Icon: Github, href: 'https://github.com/ZinnyEdmund' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/ezinne-edmund-103044308' },
              { Icon: Twitter, href: 'https://x.com/Zinny_Edmund' },
              { Icon: Mail, href: 'mailto:edmunddebby24@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-400 transition-all hover:scale-110"
                data-cursor-hover
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
