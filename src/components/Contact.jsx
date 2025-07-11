import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, AtSign, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);
    
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Invalid email format.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (error) setError('');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sairakesh150@gmail.com",
      href: "mailto:sairakesh150@gmail.com",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-500/20 to-indigo-600/20",
      hoverGradient: "from-purple-600 to-indigo-700"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9618496428",
      href: "tel:+919618496428",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/20 to-teal-600/20",
      hoverGradient: "from-emerald-600 to-teal-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "ongol, Andhra Pradesh, India",
      href: "#",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-500/20 to-rose-600/20",
      hoverGradient: "from-pink-600 to-rose-700"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/sairakesh118",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sai-rakesh-a65865319",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      gradient: "from-sky-400 to-sky-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-5 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridFlow 30s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-32 right-20 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border-2 border-cyan-400/30 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <MessageCircle className="w-8 h-8 text-purple-400" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's collaborate and create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Section - Enhanced */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group block p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                  >
                    {/* Animated Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    
                    {/* Floating Orb */}
                    <div className={`absolute top-2 right-2 w-12 h-12 bg-gradient-to-r ${contact.bgGradient} rounded-full blur-lg animate-pulse`}></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-r ${contact.gradient} text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {contact.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm md:text-base">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Follow Me</h4>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-gradient-to-r ${social.gradient} rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-${social.gradient.split('-')[1]}-500/25`}
                    >
                      <div className="text-white">
                        {social.icon}
                      </div>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Enhanced */}
          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 hover:border-white/30 focus:bg-white/15"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 hover:border-white/30 focus:bg-white/15"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Message Input */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageCircle className="h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                  </div>
                  <textarea
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:border-pink-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none hover:border-white/30 focus:bg-white/15"
                    rows="6"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl backdrop-blur-sm animate-pulse">
                    <p className="text-red-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      {error}
                    </p>
                  </div>
                )}
                
                {/* Success Message */}
                {success && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl backdrop-blur-sm animate-pulse">
                    <p className="text-green-300 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                      Thank you! Your message has been sent successfully!
                    </p>
                  </div>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gridFlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;