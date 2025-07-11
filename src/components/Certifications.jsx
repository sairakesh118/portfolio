import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Python Programming",
      issuer: "HackerRank",
      icon: "🐍",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      skills: ["Python", "Programming Logic", "Data Structures"],
      description: "Comprehensive Python programming certification covering core concepts and advanced techniques."
    },
    {
      id: 2,
      title: "SQL and Relational Databases",
      issuer: "Stanford Online",
      icon: "🗄️",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      skills: ["SQL", "Database Design", "Data Modeling"],
      description: "Advanced certification in SQL queries, database design, and relational database management."
    },
    {
      id: 3,
      title: "Cybersecurity",
      issuer: "Cisco",
      icon: "🛡️",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      skills: ["Network Security", "Threat Analysis", "Security Protocols"],
      description: "Comprehensive cybersecurity certification covering network security and threat prevention."
    },
    {
      id: 4,
      title: "Python Basics Data Science",
      issuer: "IBM",
      icon: "📊",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      skills: ["Data Analysis", "NumPy", "Data Visualization"],
      description: "Foundational data science certification focusing on Python libraries and data analysis techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Professional certifications that demonstrate my expertise across various technologies and platforms
        </p>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
              hoveredCard === cert.id ? 'transform scale-[1.02]' : ''
            }`}
            onMouseEnter={() => setHoveredCard(cert.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Certificate Content */}
            <div className="relative p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-purple-300 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300 border border-purple-500/30 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Verified Certificate</span>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Bottom Border Animation */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      

      {/* Call to Action */}
      
    </div>
  );
};

export default Certifications;