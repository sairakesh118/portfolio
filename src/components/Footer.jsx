import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import leetcode from '../assets/leetcode.png';

const Footer = ({ scrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          {/* Navigation Links */}
          <div className="mb-8">
            <nav className="flex flex-wrap justify-center gap-8 text-sm">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-cyan-400 transition-colors duration-300 hover:scale-105 transform"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/sairakesh118" 
              className="group p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-rakesh-a65865319" 
              className="group p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm flex items-center gap-2">
              © 2025 SaiRakesh Gundapaneni. Crafted with 
              <Heart size={14} className="text-red-500 animate-pulse" /> 
              and modern web technologies.
            </p>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Built with React • Styled with Tailwind CSS • Deployed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;