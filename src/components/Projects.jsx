import { ExternalLink } from 'lucide-react';
import jobby from '../assets/jobby.png';
import nxttrends from '../assets/nxttrends.png';

const Projects = () => {
  const projects = [
    {
      title: "Jobby App",
      image: jobby,
      description: "A comprehensive job search platform featuring secure JWT authentication, REST API integration, and local storage functionality for seamless user experience.",
      link: "https://jobby318.ccbp.tech/login",
      tags: ["React", "JWT", "REST API", "Local Storage"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Nxt Trendz",
      image: nxttrends,
      description: "Modern e-commerce application with wishlist functionality, detailed product views, and secure authentication system for enhanced shopping experience.",
      link: "https://cpnxttrendscrtp.ccbp.tech/",
      tags: ["React", "E-commerce", "Authentication", "UI/UX"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-5 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 leading-[1.3] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work in web development and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-gray-600"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center">
                    <p className="text-sm opacity-80">Click to view project</p>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${project.gradient} rounded-full group-hover:w-16 transition-all duration-300`}></div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:translate-x-1`}
                >
                  <span>View Project</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/sairakesh118" target='_blank'>
          <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
            View More Projects
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;