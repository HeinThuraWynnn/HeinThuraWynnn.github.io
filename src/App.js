import React, { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, Star, ExternalLink } from 'lucide-react';

// Lazy load components
const FloatingParticles = React.lazy(() => import('./components/FloatingParticles'));
const GlowEffect = React.lazy(() => import('./components/GlowEffect'));

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    'React', 'Node.js', 'Python', 'AI/ML', 'TypeScript', 'MongoDB',
    'Express.js', 'TensorFlow', 'Docker', 'AWS', 'PostgreSQL', 'GraphQL'
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence platform with machine learning insights',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Smart Inventory Management',
      description: 'Automated inventory tracking system with predictive analytics',
      tech: ['Node.js', 'MongoDB', 'React', 'AI/ML'],
      link: '#'
    },
    {
      title: 'Customer Service Chatbot',
      description: 'Intelligent chatbot with natural language processing capabilities',
      tech: ['Python', 'NLP', 'React', 'Express.js'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      <Helmet>
        <title>Wynn AI Solutions Myanmar - AI-Powered Development & Intelligent Business Solutions</title>
        <meta name="description" content="Professional AI developer and software engineer specializing in intelligent business solutions, machine learning, and modern web development in Myanmar." />
        <meta name="keywords" content="AI developer Myanmar, software engineer, machine learning, web development, business solutions, artificial intelligence" />
        <meta property="og:title" content="Wynn AI Solutions Myanmar - AI Developer & Software Engineer" />
        <meta property="og:description" content="Professional AI developer specializing in intelligent business solutions and modern web development." />
        <meta property="og:url" content="https://heinthurawynnn.github.io" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Background Effects */}
      <Suspense fallback={null}>
        <FloatingParticles />
        <GlowEffect mousePosition={mousePosition} />
      </Suspense>

      {/* Main Content */}
      <div className={`relative z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Wynn AI Solutions
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Hein Thura Wynn
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              AI Developer & Software Engineer
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Transforming businesses with intelligent solutions. Specializing in AI/ML, modern web development, 
              and creating innovative software that drives growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="#projects" className="border border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full transition-colors flex items-center gap-2">
                <Briefcase size={20} />
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate AI developer and software engineer based in Myanmar, dedicated to creating 
                  intelligent solutions that solve real-world problems. With expertise in machine learning, 
                  web development, and business automation, I help organizations leverage technology for growth.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  My approach combines cutting-edge AI technologies with practical business understanding, 
                  ensuring that every solution I develop is not just technically sound but also delivers 
                  measurable value to clients.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <MapPin size={20} />
                  <span>Yangon, Myanmar</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">AI & Machine Learning</h3>
                  <p className="text-gray-300">Developing intelligent systems that learn and adapt</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Web Development</h3>
                  <p className="text-gray-300">Creating modern, responsive, and scalable applications</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Business Solutions</h3>
                  <p className="text-gray-300">Automating processes and optimizing workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-colors text-center">
                  <Code className="mx-auto mb-2 text-blue-400" size={24} />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Ready to transform your business with AI-powered solutions? Let's discuss your project and 
              create something amazing together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="mailto:heinthurawynn@wynnsolutions.dev" className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                <Mail className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300">heinthurawynn@wynnsolutions.dev</p>
              </a>
              <a href="https://www.linkedin.com/in/hein-thura-wynn-developer" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300">Connect with me</p>
              </a>
              <a href="https://github.com/HeinThuraWynnn" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                <Github className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300">View my code</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Wynn AI Solutions Myanmar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;