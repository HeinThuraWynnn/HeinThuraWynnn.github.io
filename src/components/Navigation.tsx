import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.filter(item => item.type === 'anchor').map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = '#' + section;
            break;
          }
        }
      }

      if (window.scrollY < 50) {
        current = '/';
      }
      
      setActiveSection(current);
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
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Particles Background - Visible mainly in Dark Mode */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-300">
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
            ? 'backdrop-blur-xl border-b shadow-lg'
            : 'backdrop-blur-md'
        } ${
          theme === 'dark' 
            ? scrolled ? 'border-cyan-500/20 shadow-cyan-500/10' : ''
            : scrolled ? 'border-gray-200 bg-white/80 shadow-gray-200/50' : 'bg-white/50'
        }`}
        style={{
          background: theme === 'dark'
            ? scrolled
              ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(6,182,212,0.1) 50%, rgba(168,85,247,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(6,182,212,0.05) 50%, rgba(168,85,247,0.05) 100%)'
            : undefined // Let Tailwind handle light mode background
        }}
      >
        {/* Morphing Background Elements - Dark Mode Only */}
        {theme === 'dark' && (
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
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                <span className="text-xs text-muted-foreground">Myanmar</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = item.type === 'internal' 
                  ? location.pathname === item.href
                  : activeSection === item.href && location.pathname === '/';
                
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
                            ? 'text-cyan-500 dark:text-cyan-300'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        style={{
                          background: isActive
                            ? theme === 'dark' 
                              ? 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)'
                              : 'rgba(6,182,212,0.1)'
                            : 'transparent',
                          backdropFilter: isActive ? 'blur(10px)' : 'none',
                          border: isActive 
                            ? theme === 'dark' ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(6,182,212,0.2)'
                            : '1px solid transparent',
                        }}
                      >
                        {item.name}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)'
                              : 'rgba(0,0,0,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: theme === 'dark' ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
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
                        className="relative px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
                      >
                        {item.name}
                        
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: theme === 'dark'
                              ? 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)'
                              : 'rgba(0,0,0,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: theme === 'dark' ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
                          }}
                        />
                      </button>
                    )}
                  </motion.div>
                );
              })}

              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-xl text-muted-foreground hover:text-foreground relative overflow-hidden group transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255,255,255,0.1)' 
                      : 'rgba(0,0,0,0.05)',
                  }}
                />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-4">
              {/* Mobile Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)'
                    : 'rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: theme === 'dark' ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(6,182,212,0.1) 50%, rgba(168,85,247,0.1) 100%)'
                  : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                borderColor: theme === 'dark' ? 'rgba(6,182,212,0.2)' : 'rgba(0,0,0,0.05)'
              }}
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => {
                  const isActive = item.type === 'internal' 
                    ? location.pathname === item.href
                    : activeSection === item.href && location.pathname === '/';
                  
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
                              ? 'text-cyan-500 dark:text-cyan-300'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                          style={{
                            background: isActive
                              ? theme === 'dark'
                                ? 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)'
                                : 'rgba(6,182,212,0.1)'
                              : 'transparent',
                            backdropFilter: isActive ? 'blur(10px)' : 'none',
                            border: isActive 
                              ? theme === 'dark' ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(6,182,212,0.2)'
                              : '1px solid transparent',
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href, item.type)}
                          className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
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
                
                {/* Mobile AI Chat Button - Removed */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
