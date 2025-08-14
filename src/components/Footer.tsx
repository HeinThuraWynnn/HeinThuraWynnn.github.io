import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Heart,
  ArrowUp,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Mobile App Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'AI/ML Solutions', href: '#services' },
    { name: 'Cloud Services', href: '#services' },
    { name: 'Technical Consulting', href: '#services' },
    { name: 'DevOps & Deployment', href: '#services' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/wynnsolutions',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/wynnsolutions',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/wynnsolutions',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 50%, #16213e 75%, #0f3460 100%)'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Morphing Bean Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-32 opacity-10"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(40px)',
          }}
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%'
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-20 w-48 h-48 opacity-10"
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
            filter: 'blur(50px)',
          }}
          animate={{
            borderRadius: [
              '40% 60% 60% 40% / 60% 30% 70% 40%',
              '60% 40% 40% 60% / 40% 70% 30% 60%',
              '40% 60% 60% 40% / 60% 30% 70% 40%'
            ],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative w-12 h-12 rounded-2xl flex items-center justify-center mr-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 0 30px rgba(6,182,212,0.4)',
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <img 
                  src="/w-logo.svg" 
                  alt="Wynn Solutions Myanmar Logo" 
                  className="w-8 h-8 relative z-10 filter brightness-0 invert"
                />
                
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: Math.cos((i * 45) * Math.PI / 180) * 30,
                      y: Math.sin((i * 45) * Math.PI / 180) * 30,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
              
              <div className="flex flex-col">
                <motion.h3 
                  className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  Wynn Solutions Myanmar
                </motion.h3>
                <span className="text-sm text-cyan-300/70">Future Tech Solutions</span>
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-2xl mb-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(6,182,212,0.2)',
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(6,182,212,0.2)',
                scale: 1.02,
              }}
            >
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Innovative software and AI solutions provider, specializing in mobile apps, 
                web development, and cutting-edge technology implementations.
              </p>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'info@wynnsolutionsmyanmar.com', color: 'text-cyan-400' },
                { icon: Phone, text: '+95 9 971 879 637', color: 'text-purple-400' },
                { icon: MapPin, text: 'Yangon, Myanmar', color: 'text-pink-400' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-300 group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-8 h-8 rounded-lg ${item.color} mr-3 flex items-center justify-center`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm group-hover:text-white transition-colors duration-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="flex items-center mb-6">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            </div>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="block p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
                    whileHover={{
                      x: 10,
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    }}
                  >
                    <span className="relative z-10 text-sm flex items-center">
                      <Star className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </span>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Services</h4>
            </div>
            
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={service.href}
                    className="block p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
                    whileHover={{
                      x: 10,
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)',
                    }}
                  >
                    <span className="relative z-10 text-sm flex items-center">
                      <Star className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </span>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backdropFilter: 'blur(10px)' }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            </div>
            
            <motion.div
              className="p-4 rounded-2xl mb-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(236,72,153,0.2)',
              }}
            >
              <p className="text-gray-300 text-sm mb-4">
                Follow me on social media for the latest updates on technology trends and project insights.
              </p>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(6,182,212,0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(6,182,212,0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                  
                  {/* Hover particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: Math.cos((i * 60) * Math.PI / 180) * 20,
                        y: Math.sin((i * 60) * Math.PI / 180) * 20,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div 
              className="p-4 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(6,182,212,0.2)',
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(6,182,212,0.2)',
              }}
            >
              <h5 className="font-medium mb-3 text-white flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                Tech Newsletter
              </h5>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 py-2 rounded-xl sm:rounded-l-xl sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 bg-black/20 backdrop-blur-sm border border-cyan-500/20"
                />
                <motion.button 
                  className="px-4 py-2 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-all duration-300 border border-cyan-500/30 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(168,85,247,0.3) 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(168,85,247,0.5) 100%)',
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center text-gray-300 text-sm mb-4 md:mb-0"
            >
              <span>© {currentYear} Wynn Solutions Myanmar. Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 mx-1 text-red-500" />
              </motion.div>
              <span>in Myanmar</span>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              
              <motion.button
                onClick={scrollToTop}
                className="relative p-3 rounded-xl transition-all duration-300 group overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6,182,212,0.3)',
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(6,182,212,0.3)',
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white relative z-10" />
                
                {/* Rocket trail effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    y: [20, -20],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;