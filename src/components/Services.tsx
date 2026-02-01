import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Services: React.FC = () => {
  const { theme } = useTheme();
  
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications using Flutter and Kotlin with modern UI/UX design.",
      features: ["Flutter Development", "Kotlin/Java", "iOS & Android", "Cross-platform Solutions"],
      gradient: "from-cyan-400/20 to-blue-500/20",
      iconGradient: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks, responsive design, and optimal performance.",
      features: ["React/Vue.js", "PHP/Laravel", "RESTful APIs", "Progressive Web Apps"],
      gradient: "from-purple-400/20 to-pink-500/20",
      iconGradient: "from-purple-400 to-pink-500",
      borderColor: "border-purple-400/30"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI/ML algorithms for automation and data-driven insights.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Systems"],
      gradient: "from-yellow-400/20 to-orange-500/20",
      iconGradient: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive QA services including automated testing, CI/CD pipelines, and quality strategy.",
      features: ["Automated Testing", "CI/CD Pipelines", "Performance Testing", "Security Audits"],
      gradient: "from-green-400/20 to-emerald-500/20",
      iconGradient: "from-green-400 to-emerald-500",
      borderColor: "border-green-400/30"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, deployment, and maintenance using AWS, DigitalOcean, and more.",
      features: ["AWS/Cloud Deployment", "Microservices", "DevOps", "Scalable Architecture"],
      gradient: "from-indigo-400/20 to-blue-600/20",
      iconGradient: "from-indigo-400 to-blue-600",
      borderColor: "border-indigo-400/30"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for high-performance applications.",
      features: ["PostgreSQL/MySQL", "Database Optimization", "Data Migration", "Backup Solutions"],
      gradient: "from-red-400/20 to-rose-500/20",
      iconGradient: "from-red-400 to-rose-500",
      borderColor: "border-red-400/30"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20" />
            {/* AI Neural Network Pattern */}
            <div className="absolute inset-0" style={{
              background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='neural-services' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='0.8' fill='%2300ffff' opacity='0.2'/%3E%3Cline x1='10' y1='10' x2='20' y2='10' stroke='%2300ffff' stroke-width='0.3' opacity='0.15'/%3E%3Cline x1='10' y1='10' x2='10' y2='20' stroke='%23ff00ff' stroke-width='0.3' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url(%23neural-services)'/%3E%3C/svg%3E")`,
              opacity: 0.3
            }}></div>
            
            {/* Cyberpunk Grid Overlay */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.05) 100%), linear-gradient(0deg, transparent 98%, rgba(255, 0, 255, 0.05) 100%)`,
              backgroundSize: '40px 40px'
            }}></div>
          </>
        ) : (
          // Light Mode Background
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50" />
        )}
      </div>

      {/* Floating Morpheme Bean Particles - Dark Mode Only */}
      {theme === 'dark' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`service-particle-${i}`}
              className="absolute"
              animate={{
                x: [0, 150, -100, 120, 0],
                y: [0, -120, 80, -150, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 0.7, 1.1, 1],
              }}
              transition={{
                duration: 25 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
              }}
            >
              {/* Morpheme Bean Shape */}
              <motion.div
                className="w-12 h-16 relative"
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
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'blur(1px)',
                  opacity: 0.4
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* AI-Inspired Geometric Morphing Shapes - Dark Mode Only */}
      {theme === 'dark' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`service-morph-${i}`}
              className="absolute border"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 0.8, 1],
                borderRadius: [
                  "0%",
                  "50%",
                  "25%",
                  "75%",
                  "0%"
                ],
                borderColor: [
                  "rgba(0, 255, 255, 0.2)",
                  "rgba(255, 0, 255, 0.2)",
                  "rgba(255, 255, 0, 0.2)",
                  "rgba(0, 255, 255, 0.2)"
                ]
              }}
              transition={{
                duration: 18 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
              style={{
                width: `${50 + i * 12}px`,
                height: `${50 + i * 12}px`,
                left: `${20 + i * 13}%`,
                top: `${20 + i * 12}%`,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              style={{
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}>
            Our <span className="text-foreground">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive software and AI solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div 
                className={`relative rounded-2xl p-8 h-full border overflow-hidden ${
                  theme === 'dark' 
                    ? service.borderColor
                    : 'border-gray-200 bg-white shadow-lg'
                }`}
                style={{
                  background: theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))'
                    : undefined,
                  backdropFilter: theme === 'dark' ? 'blur(25px)' : undefined,
                  WebkitBackdropFilter: theme === 'dark' ? 'blur(25px)' : undefined,
                  boxShadow: theme === 'dark' 
                    ? '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Inner Glow Effect - Dark Mode */}
                {theme === 'dark' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 pointer-events-none" />
                )}
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="relative p-4 rounded-2xl mr-4 overflow-hidden"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background: `linear-gradient(45deg, ${service.iconGradient.split(' ')[1]}, ${service.iconGradient.split(' ')[3]})`,
                        boxShadow: `0 0 20px ${service.iconGradient.split(' ')[1]}40`
                      }}
                    >
                      <service.icon className="h-6 w-6 text-foreground relative z-10" />
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Feature List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="p-1 rounded-full mr-3"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          style={{
                            background: `linear-gradient(45deg, ${service.iconGradient.split(' ')[1]}, ${service.iconGradient.split(' ')[3]})`
                          }}
                        >
                          <Zap className="h-3 w-3 text-foreground" />
                        </motion.div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card Border Glow Effect - Dark Mode */}
                {theme === 'dark' && (
                  <div className={`absolute inset-0 rounded-2xl border ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                       style={{
                         filter: `drop-shadow(0 0 10px ${service.iconGradient.split(' ')[1]}40)`
                       }} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-10 py-4 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
              theme === 'dark'
                ? 'border border-cyan-400/30'
                : 'border border-cyan-500/20'
            }`}
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(45deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15))'
                : 'linear-gradient(45deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
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
            <span className="relative z-10 text-foreground text-lg">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button Glow Effect */}
            {theme === 'dark' && (
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{
                     filter: 'drop-shadow(0 0 15px #00ffff40)'
                   }} />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Add custom CSS for gradient animation */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Services;
