import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', type: 'internal' },
    { name: 'About', href: '#about', type: 'anchor' },
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
    { name: 'About Thomaz', href: '/about-thomaz', type: 'internal' }
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === 'anchor') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
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
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-black/20 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
            : 'backdrop-blur-md bg-black/10'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(6,182,212,0.1) 50%, rgba(168,85,247,0.1) 100%)'
            : 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(6,182,212,0.05) 50%, rgba(168,85,247,0.05) 100%)',
        }}
      >
        {/* Morphing Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -top-5 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group"
            >
              <motion.div
                className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 0 20px rgba(6,182,212,0.3)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <img 
                  src="/w-logo.svg" 
                  alt="Wynn Solutions Myanmar Logo" 
                  className="w-7 h-7 relative z-10 filter brightness-0 invert"
                />
                
                {/* Floating particles around logo */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: Math.cos((i * 60) * Math.PI / 180) * 25,
                      y: Math.sin((i * 60) * Math.PI / 180) * 25,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
              
              <div className="flex flex-col">
                <motion.span
                  className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  Wynn Solutions
                </motion.span>
                <span className="text-xs text-cyan-300/70">Myanmar</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = item.type === 'internal' 
                  ? location.pathname === item.href
                  : false;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.type === 'internal' ? (
                      <Link
                        to={item.href}
                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                          isActive
                            ? 'text-cyan-300'
                            : 'text-gray-300 hover:text-white'
                        }`}
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)'
                            : 'transparent',
                          backdropFilter: isActive ? 'blur(10px)' : 'none',
                          border: isActive ? '1px solid rgba(6,182,212,0.3)' : '1px solid transparent',
                        }}
                      >
                        {item.name}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(6,182,212,0.2)',
                          }}
                        />
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                            style={{ transform: 'translateX(-50%)' }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href, item.type)}
                        className="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        {item.name}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(6,182,212,0.2)',
                          }}
                        />
                      </button>
                    )}
                  </motion.div>
                );
              })}
              
              {/* AI Assistant Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 rounded-xl text-sm font-medium text-white relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 0 20px rgba(6,182,212,0.3)',
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Chat</span>
                </span>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white transition-colors duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6,182,212,0.2)',
              }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-cyan-500/20"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(6,182,212,0.1) 50%, rgba(168,85,247,0.1) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => {
                  const isActive = item.type === 'internal' 
                    ? location.pathname === item.href
                    : false;
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.type === 'internal' ? (
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-cyan-300'
                              : 'text-gray-300 hover:text-white'
                          }`}
                          style={{
                            background: isActive
                              ? 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)'
                              : 'transparent',
                            backdropFilter: isActive ? 'blur(10px)' : 'none',
                            border: isActive ? '1px solid rgba(6,182,212,0.3)' : '1px solid transparent',
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href, item.type)}
                          className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                          style={{
                            background: 'transparent',
                          }}
                        >
                          {item.name}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
                
                {/* Mobile AI Chat Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full mt-4 px-4 py-3 rounded-xl text-base font-medium text-white"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                    boxShadow: '0 0 20px rgba(6,182,212,0.3)',
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>AI Chat Assistant</span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;