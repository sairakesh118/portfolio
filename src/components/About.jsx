import { Github, Linkedin, Code2, Zap, Target, Heart, Award, Coffee, Rocket, Brain, Download, ExternalLink, MapPin, Mail, Phone, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['React Developer', 'MERN Stack Developer', 'AWS Cloud Architect', 'Full Stack Engineer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500', level: 95 },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500', level: 88 },
    { name: 'MongoDB', icon: '🍃', color: 'from-emerald-400 to-green-500', level: 85 },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-500', level: 82 },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500', level: 92 },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-indigo-500', level: 86 },
    { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-gray-600', level: 88 },
    { name: 'Express.js', icon: '🚀', color: 'from-purple-400 to-pink-500', level: 85 }
  ];

  const achievements = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "React Developer",
      description: "Currently at QFLOO AI (2025)",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "8.6 CGPA",
      description: "B.Tech IT Student (2022-2026)",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "AWS Certified",
      description: "Cloud Architecture Intern",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "MERN Expert",
      description: "Full-stack project experience",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "MERN stack expertise with modern frameworks",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cloud Architecture",
      description: "AWS services: EC2, S3, RDS deployment",
      color: "from-orange-400 to-red-400"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-time Applications",
      description: "Socket.IO integration for live features",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User Experience",
      description: "Creating intuitive, responsive interfaces",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const certifications = [
    "Python Programming - HackerRank",
    "SQL & Relational Databases - Stanford",
    "Cybersecurity - Cisco",
    "Python Data Science - IBM"
  ];

async function downloadFile(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error("Network response was not ok");

    // Read the data as a Blob
    const blob = await response.blob();

    // Create a temporary <a> element to start the download
    const tempLink = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);

    //  Preserve server‑supplied file‑name if present, otherwise fall back
    const disposition = response.headers.get("Content-Disposition") || "";
    const match = disposition.match(/filename="?([^"]+)"?/);
    const filename = match ? match[1] : "CV.pdf";

    tempLink.href = objectUrl;
    tempLink.download = filename;
    document.body.appendChild(tempLink);
    tempLink.click();

    // Clean up
    tempLink.remove();
    URL.revokeObjectURL(objectUrl);
  } catch (err) {
    console.error("Download failed:", err);
    alert("Sorry, something went wrong while downloading the CV.");
  }
}


  const projects = [
    {
      name: "Real Estate Platform",
      tech: "MERN Stack, Socket.IO, Prisma",
      description: "Full-stack platform with real-time chat"
    },
    {
      name: "Next Trendz E-commerce",
      tech: "React.js, HTML, CSS",
      description: "Fashion & electronics shopping platform"
    },
    {
      name: "Movies Website",
      tech: "React.js, API Integration",
      description: "Dynamic movie exploration platform"
    },
    {
      name: "Jobby App",
      tech: "React.js, JWT, RESTful API",
      description: "Job search platform with authentication"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-indigo-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          
          {/* Contact Info */}
         
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Passionate <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">MERN Stack Developer</span> creating 
            web applications that enhance user experiences through innovative solutions
          </p>
        </div>
        
        <div className="grid xl:grid-cols-2 gap-20 items-start">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Image with Ultra Effects */}
            <div className="relative mx-auto max-w-md">
              <div className="relative w-80 h-80 mx-auto">
                {/* Multiple Rotating Borders */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin opacity-75" style={{animationDuration: '10s'}}></div>
                <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-spin opacity-60" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full animate-spin opacity-40" style={{animationDuration: '6s'}}></div>
                
                {/* Profile Image */}
                <div className="absolute inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl overflow-hidden border-4 border-white/20 group">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center text-8xl">
                    👨‍💻
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl animate-bounce delay-300 shadow-lg">⚛️</div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-xl animate-bounce delay-700 shadow-lg">☁️</div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-lg animate-bounce delay-1000 shadow-lg">🟢</div>
              </div>
            </div>
            
            {/* Dynamic Role Display */}
            <div className="text-center p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-4">I'm a</h3>
              <div className="h-16 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
            </div>
            
            {/* Work Experience */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
                Work Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-bold text-white">React Developer</h4>
                  <p className="text-purple-300 mb-2">QFLOO AI • Jan 2025 - Present</p>
                  <p className="text-gray-300 text-sm">Designed automation tools website with dynamic workflow builder and engaging landing pages, enhancing user experience through innovative front-end solutions.</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-xl font-bold text-white">AWS Cloud Architect Intern</h4>
                  <p className="text-orange-300 mb-2">NIELIT • Jun 2024 - Jul 2024</p>
                  <p className="text-gray-300 text-sm">Gained hands-on experience with EC2, S3, and RDS. Developed and deployed a food ordering website on AWS infrastructure.</p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h4 className="text-lg font-bold text-white">B.Tech Information Technology</h4>
                  <p className="text-cyan-300 mb-1">Sagi Rama Krishnam Raju Engineering College</p>
                  <p className="text-gray-300 text-sm">2022-2026 • CGPA: 8.6</p>
                </div>
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-bold text-white">Intermediate MPC</h4>
                  <p className="text-green-300 mb-1">Sri Saraswathi Jr College</p>
                  <p className="text-gray-300 text-sm">2020-2022 • 94.3%</p>
                </div>
              </div>
            </div>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group backdrop-blur-lg shadow-lg hover:shadow-xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white group-hover:animate-pulse">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* About Content */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-lg shadow-xl">
              <div className="prose prose-lg text-gray-300 mb-8">
                <p className="text-xl leading-relaxed mb-6">
                  I am passionate about creating web applications that enhance user experiences with the <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">MERN stack</span>. With a strong foundation in front-end and back-end development, I excel at solving complex problems.
                </p>
                <p className="text-lg text-gray-400 mb-6">
                  Currently working as a <span className="text-purple-300 font-semibold">React Developer at QFLOO AI</span>, where I design automation tools and create engaging user interfaces. I'm expanding my full-stack skills and contributing to projects utilizing RESTful APIs and modern frameworks.
                </p>
                <p className="text-lg text-gray-400">
                  With experience in cloud architecture through my AWS internship and multiple full-stack projects, I bring both technical expertise and practical problem-solving skills to every development challenge.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 mb-8">
               <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/sairakesh_gundapaneni_resume.pdf"; // 👈 file inside public/
    link.download = "sairakesh_gundapaneni_resume.pdf"; // 👈 this will be the saved filename
    document.body.appendChild(link);
    link.click();
    link.remove();
  }}
  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
>
  <Download className="w-5 h-5" />
  Download CV
</button>
                <button 
                 onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View Projects
                </button>
              </div>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm shadow-lg"
                  >
                    <div className={`text-transparent bg-gradient-to-r ${highlight.color} bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-1 text-sm">{highlight.title}</h4>
                    <p className="text-xs text-gray-400">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Skills Section */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-lg shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, idx) => (
                  <div 
                    key={skill.name} 
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:animate-pulse shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            
            {/* Certifications */}
            

            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center">
              <a 
                href="https://github.com/sairakesh118"
                className="group relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 backdrop-blur-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={28} className="text-white group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  GitHub
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-rakesh-a65865319/" 
                className="group relative p-4 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 backdrop-blur-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  LinkedIn
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </a>
              <a 
                href="mailto:sairakesh150@gmail.com"
                className="group relative p-4 bg-gradient-to-r from-green-800 to-green-900 rounded-xl border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/25 backdrop-blur-lg"
              >
                <Mail size={28} className="text-white group-hover:text-green-400 transition-colors duration-300" />
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  Email
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </a>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;