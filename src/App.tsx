
import {  useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Components
import SEO from './components/SEO';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutThomazPage from './components/AboutThomazPage';
import './App.css';

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
  }, []);

  // Homepage component with Futuristic Design
  const HomePage = () => (
    <main className="relative pt-16">
      {/* Futuristic Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Cyberpunk Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-cyan-900/20">
          {/* AI Neural Network Pattern */}
          <div className="absolute inset-0" style={{
            background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='neural' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%2300ffff' opacity='0.3'/%3E%3Cline x1='10' y1='10' x2='20' y2='10' stroke='%2300ffff' stroke-width='0.5' opacity='0.2'/%3E%3Cline x1='10' y1='10' x2='10' y2='20' stroke='%2300ffff' stroke-width='0.5' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23neural)'/%3E%3C/svg%3E")`,
            opacity: 0.4
          }}></div>
          
          {/* Cyberpunk Grid Overlay */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.1) 100%), linear-gradient(0deg, transparent 98%, rgba(255, 0, 255, 0.1) 100%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Morpheme Bean Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              animate={{
                x: [0, 200, -100, 150, 0],
                y: [0, -150, 100, -200, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 0.8, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + i * 7}%`,
              }}
            >
              {/* Morpheme Bean Shape */}
              <motion.div
                className="w-16 h-24 relative"
                animate={{
                  borderRadius: [
                    "50% 50% 50% 50% / 60% 60% 40% 40%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "50% 50% 50% 50% / 40% 40% 60% 60%",
                    "70% 30% 30% 70% / 70% 70% 30% 30%",
                    "50% 50% 50% 50% / 60% 60% 40% 40%"
                  ],
                  background: [
                    "linear-gradient(45deg, #00ffff, #ff00ff)",
                    "linear-gradient(135deg, #ff00ff, #ffff00)",
                    "linear-gradient(225deg, #ffff00, #00ffff)",
                    "linear-gradient(315deg, #00ffff, #ff00ff)",
                    "linear-gradient(45deg, #00ffff, #ff00ff)"
                  ]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'blur(1px)',
                  opacity: 0.6
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* AI-Inspired Geometric Morphing Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`morph-${i}`}
              className="absolute border-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 0.7, 1],
                borderRadius: [
                  "0%",
                  "50%",
                  "25%",
                  "75%",
                  "0%"
                ],
                borderColor: [
                  "rgba(0, 255, 255, 0.3)",
                  "rgba(255, 0, 255, 0.3)",
                  "rgba(255, 255, 0, 0.3)",
                  "rgba(0, 255, 255, 0.3)"
                ]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              style={{
                width: `${60 + i * 15}px`,
                height: `${60 + i * 15}px`,
                left: `${15 + i * 10}%`,
                top: `${15 + i * 8}%`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>

        {/* Cyberpunk Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              animate={{
                x: [0, 300, -200, 100, 0],
                y: [0, -200, 150, -100, 0],
                scale: [1, 1.5, 0.8, 1.2, 1],
                opacity: [0.3, 0.8, 0.4, 0.9, 0.3]
              }}
              transition={{
                duration: 25 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                left: `${20 + i * 12}%`,
                top: `${20 + i * 10}%`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#ffff00'} 0%, transparent 70%)`,
                filter: 'blur(2px)'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Apple Glassmorphism Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl mx-4 sm:mx-0 mb-20 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 pointer-events-none" />
            
            <div className="relative space-y-8">
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
                  style={{
                    background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}
                >
                  Wynn Solutions Myanmar
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 2s ease-in-out infinite'
                  }}
                >
                  Professional Software & AI Solutions
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
                >
                  Delivering cutting-edge technology solutions with {yearsOfExperience}+ years of expertise in mobile apps, 
                  web development, AI integration, and quality assurance services.
                </motion.p>
              </div>

              {/* Futuristic Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 font-semibold rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  style={{
                    background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                  onClick={() => {
                    const element = document.querySelector('#services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10 text-white">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 font-semibold rounded-2xl border border-purple-400/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(255, 255, 0, 0.2))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10 text-white">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Futuristic Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotateX: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex flex-col items-center space-y-3 text-white/90 cursor-pointer rounded-2xl px-6 py-4 border border-cyan-400/30 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
              onClick={() => {
                const element = document.querySelector('#company-info');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-sm font-medium relative z-10">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Company Information Section */}
      <section id="company-info" className="py-20 relative overflow-hidden">
        {/* Cyberpunk Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              About Wynn Solutions Myanmar
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology company in Myanmar, specializing in innovative software solutions 
              and AI-powered applications. With over 9 years of combined expertise, we deliver world-class 
              digital solutions that drive business growth and technological advancement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "Cutting-edge technology solutions using the latest frameworks and AI integration",
                icon: "🚀",
                gradient: "from-cyan-400/20 to-blue-400/20"
              },
              {
                title: "Quality Assured",
                description: "Rigorous testing and quality assurance processes ensuring reliable, scalable solutions",
                icon: "✅",
                gradient: "from-purple-400/20 to-pink-400/20"
              },
              {
                title: "Client Focused",
                description: "Dedicated support and customized solutions tailored to your specific business needs",
                icon: "🎯",
                gradient: "from-yellow-400/20 to-orange-400/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl text-center border border-white/20 overflow-hidden group`}
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );

  // About Thomaz Page with Navigation and Footer
  const AboutThomazPageWithLayout = () => (
    <div className="pt-16">
      <AboutThomazPage />
    </div>
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen transition-colors duration-300 dark">
        <SEO />
        
        {/* Add custom CSS for gradient animation */}
        <style>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
        
        {/* Navigation */}
        <Navigation />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-thomaz" element={<AboutThomazPageWithLayout />} />
          <Route path="/resume" element={<AboutThomazPageWithLayout />} />
        </Routes>
    
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
