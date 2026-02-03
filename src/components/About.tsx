import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  CheckCircle, 
  Target, 
  ArrowRight,
  Users,
  Download,
  Lock,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'enquiry4WSM') {
      const link = document.createElement('a');
      link.href = '/portfolio.pdf';
      link.download = 'Wynn_Solutions_Portfolio.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowPasswordModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const features = [
    {
      title: "Innovation First",
      description: "Cutting-edge technology solutions using the latest frameworks and AI integration.",
      icon: Rocket,
      gradient: "from-cyan-400/20 to-blue-400/20",
      iconColor: "text-cyan-500"
    },
    {
      title: "Quality Assured",
      description: "Rigorous testing and quality assurance processes ensuring reliable, scalable solutions.",
      icon: CheckCircle,
      gradient: "from-purple-400/20 to-pink-400/20",
      iconColor: "text-purple-500"
    },
    {
      title: "Client Focused",
      description: "Dedicated support and customized solutions tailored to your specific business needs.",
      icon: Target,
      gradient: "from-yellow-400/20 to-orange-400/20",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
            <div className="absolute inset-0 opacity-10" style={{
              background: `radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)`
            }}></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-80" />
        )}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Wynn Solutions Myanmar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a leading technology company in Myanmar, specializing in innovative software solutions 
            and AI-powered applications. With over 9 years of combined expertise, we deliver world-class 
            digital solutions that drive business growth and technological advancement.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl text-center overflow-hidden group ${
                theme === 'dark' 
                  ? 'bg-white/5 border border-white/10 backdrop-blur-xl' 
                  : 'bg-white border border-gray-100 shadow-lg'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`text-4xl mb-4 flex justify-center ${item.iconColor}`}>
                  <item.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed transition-colors">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`rounded-3xl p-8 md:p-12 relative overflow-hidden ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-white/10' 
              : 'bg-gradient-to-r from-cyan-50 to-purple-50 border border-gray-100'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-500" />
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Leadership</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Led by Engineering Excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is guided by Hein Thura Wynn (Thomaz), a Lead Software Engineer and PMP Candidate with a proven track record in delivering high-performance solutions for multinational corporations.
              </p>
              <Link 
                to="/about-thomaz"
                className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                  theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
                }`}
              >
                Meet our Lead Engineer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                 <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
                  <div className={`w-full h-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                    <img 
                      src="/thomaz.jpeg" 
                      alt="Hein Thura Wynn" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block p-8 rounded-3xl relative overflow-hidden ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10' 
              : 'bg-white border border-gray-100 shadow-xl'
          }`}>
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center ${
                theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
              }`}>
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Download Our Portfolio</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Get detailed insights into our developed websites and success stories. 
                This document is password protected.
              </p>
              <button
                onClick={() => setShowPasswordModal(true)}
                className={`group relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-blue-500/25'
                }`}
              >
                <span className="flex items-center gap-2">
                  Download Portfolio <Lock className="w-4 h-4" />
                </span>
              </button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPasswordModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-2xl shadow-2xl z-50 ${
                theme === 'dark' 
                  ? 'bg-gray-900 border border-white/10' 
                  : 'bg-white'
              }`}
            >
              <button
                onClick={() => setShowPasswordModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Protected Content</h3>
                <p className="text-sm text-muted-foreground">
                  Please enter the password to download our portfolio.
                  <br />
                  <span className="text-xs opacity-70">
                    (Password protected. <a href="mailto:wynnsolutionsmyanmar@gmail.com?subject=Request Portfolio Password" className="underline hover:text-cyan-500">Request via email</a>)
                  </span>
                </p>
              </div>

              <form onSubmit={handleDownload}>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 focus:border-cyan-500 text-white'
                        : 'bg-gray-50 border-gray-200 focus:border-cyan-500 text-gray-900'
                    } border-2`}
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <X className="w-3 h-3" /> {error}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    theme === 'dark'
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
                      : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                  }`}
                >
                  Unlock & Download
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
