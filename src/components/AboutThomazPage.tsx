import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Award,
  Code,
  Database,
  Globe,
  Brain,
  Shield,
  GraduationCap,
  ExternalLink,
  BookOpen,
  Users,
  PencilRulerIcon,
  ToolCaseIcon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutThomazPage: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);
  const { theme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-300">
      <SEO 
        title="Hein Thura Wynn - Lead Software Engineer & Project Manager | Wynn Solutions"
        description="Hein Thura Wynn (Thomaz) is a Lead Software Engineer and PMP Candidate with expertise in Flutter, Kotlin, PHP, and AI solutions. View portfolio, skills, and experience."
        keywords="Hein Thura Wynn, Thomaz, Software Engineer Myanmar, Project Manager PMP, Flutter Developer, AI Solutions Expert"
        url="https://wynnsolutionsmyanmar.com/about-thomaz"
        image="https://wynnsolutionsmyanmar.com/thomaz.jpeg"
      />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 transition-colors duration-500">
          {theme === 'dark' ? (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
               <div className="absolute inset-0" style={{
                background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.2
              }}></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-80" />
          )}
        </div>

        {/* Floating Elements - Dark Mode Only */}
        {theme === 'dark' && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  backgroundImage: [
                    "linear-gradient(45deg, #22d3ee, #a855f7)",
                    "linear-gradient(225deg, #a855f7, #22d3ee)",
                    "linear-gradient(45deg, #22d3ee, #a855f7)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
                style={{
                  right: `${10 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"   
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className={`w-full h-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <img 
                    src="/thomaz.jpeg" 
                    alt="Hein Thura Wynn (Thomaz)" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Dark Mode Glow Effects */}
              {theme === 'dark' && (
                <>
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-10 blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Floating particles around image */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: Math.cos((i * 60) * Math.PI / 180) * 60,
                        y: Math.sin((i * 60) * Math.PI / 180) * 60,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground transition-colors duration-300"
              >
                Hein Thura Wynn @ Thomaz
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl gradient-text font-semibold"
              >
                Lead Software Engineer & Project Manager (PMP Candidate)
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
              >
                Project Manager (PMP candidate) with {yearsOfExperience}+ years of combined experience in project
                leadership, QA governance, and software engineering. Skilled at bridging business goals and
                technical execution in multinational and BOI corporate environments. Known for delivering
                projects on time, improving product quality, and leading teams to high performance.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground transition-colors duration-300"
            >
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+669-557-368-03</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>heinthurawynn.developer@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>www.wynnsolutionsmyanmar.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile URL</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Mail, href: 'mailto:heinthurawynn.developer@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+66955736803', label: 'Phone' },
                { icon: Linkedin, href: 'https://linkedin.com/in/hein-thura-wynn-developer/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/heinthurawynnn', label: 'GitHub' },
                { icon: ExternalLink, href: 'https://www.credly.com/users/hein-thura-wynn', label: 'Credly' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20 text-gray-300 hover:text-cyan-400' 
                      : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 shadow-sm hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className={`bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white to-gray-300' 
                  : 'bg-gradient-to-r from-gray-900 to-gray-600'
              }`}>
                Technical 
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-2">
                Skills
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               {
                title: "Project Management",
                icon: Users,
                color: "from-cyan-400 to-blue-500",
                skills: ["Agile, Scrum, Waterfall", "Risk & Resource Management", "Stakeholder Communication", "Vendor & Client Management"]
              },
              {
                title: "Leadership & Management",
                icon: () => (
                  <img 
                    src="/w-logo.svg" 
                    alt="Wynn Solutions Logo" 
                    className={`w-6 h-6 ${theme === 'dark' ? 'filter brightness-0 invert' : ''}`}
                  />
                ),
                color: "from-indigo-400 to-purple-500",
                skills: ["Agile/Scrum, QA Strategy", "Cross-functional Collaboration",  "Performance Management", "Project & Release Planning","Team Leadership", "Project Management", "Agile Methodologies"]
              },
              {
                title: "Technical Expertise",
                icon: Code,
                color: "from-cyan-400 to-blue-500",
                skills: ["Flutter (Provider, MVVM, BLOC)", "Kotlin, Java (MVVM, MVC)", "PHP, Laravel, RESTful APIs", "GraphQL, WordPress, October CMS", "JavaScript, jQuery","Cloud, APIs", "Mobile Solution Delivery", "ERP Systems"]
              },
              {
                title: "Quality Assurance & CI/CD",
                icon: Shield,
                color: "from-purple-400 to-pink-500",
                skills: ["QA Governance", "CI/CD Pipelines", "Test Automation", "Quality Strategy"]

              },
              {
                title: "Tools & Platforms",
                icon: ToolCaseIcon,
                color: "from-green-400 to-cyan-500",
                skills: ["Git, Docker, Postman", "VS Code, Xcode, Android Studio", "CI/CD"]
              },
              {
                title: "Cloud & Databases",
                icon: Database,
                color: "from-orange-400 to-red-500",
                skills: ["AWS, DigitalOcean, Huawei Cloud", "Firebase, SQLite, PostgreSQL", "MySQL"]
              },
              {
                title: "Design & UX",
                icon: PencilRulerIcon,
                color: "from-pink-400 to-purple-500",
                skills: ["Material Design, Figma", "Adobe Photoshop"]
              },
              {
                title: "Core Competencies",
                icon: Brain,
                color: "from-pink-400 to-purple-500",
                skills: ["ERP & Mobile Solution Delivery", "Technical Expertise", "Business-Technical Alignment"]
              }
              
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02,
                }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  borderRadius: `${30 + Math.random() * 20}px ${40 + Math.random() * 20}px ${35 + Math.random() * 20}px ${25 + Math.random() * 20}px`,
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} transition-opacity duration-500 ${
                    theme === 'dark' ? 'opacity-0 group-hover:opacity-10' : 'opacity-0 group-hover:opacity-5'
                  }`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${skill.color} mr-4`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skill.skills.map((item, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center text-foreground transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Training Section */}
      <section id="training" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className={`bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white to-gray-300' 
                  : 'bg-gradient-to-r from-gray-900 to-gray-600'
              }`}>
                Professional 
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-2">
                Training
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Agile Metrics for Success",
              "AI in Infrastructure & Construction Projects",
              "AWS Educate Getting Started with Serverless",
              "AWS Educate Introduction to Generative AI",
              "Data Landscape of GenAI for Project Managers",
              "Generative AI Overview for Project Managers",
              "Get Started with Looker Skill Badge",
              "Google Project Management Professional Certificate (v2)",
              "Introduction to Cognitive Project Management in AI (CPM-AI)™",
              "Talking to AI: Prompt Engineering for Project Managers"
            ].map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateX: 5,
                }}
                className={`group relative p-6 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-cyan-400/30'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  borderRadius: `${25 + Math.random() * 15}px ${35 + Math.random() * 15}px ${30 + Math.random() * 15}px ${20 + Math.random() * 15}px`,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))",
                      "linear-gradient(225deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.1))",
                      "linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10 flex items-center">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground transition-colors leading-tight">
                    {training}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className={`bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white to-gray-300' 
                  : 'bg-gradient-to-r from-gray-900 to-gray-600'
              }`}>
                Work 
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-2">
                Experience
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-30" />
            
            <div className="space-y-16">
              {[
                {
                  title: "QA Lead & Test Owner",
                  company: "Alex International",
                  period: "2024 - Present",
                  description: "Led end-to-end QA for 5+ web/mobile applications, reducing production defects by 30% through TDD, automation, and CI/CD pipeline optimizations. Established scalable QA processes from scratch, including automated regression testing (covering 85% of critical workflows) and risk-based test planning. Owned quality strategy across App Teams, collaborating with developers, Product Owner, and stakeholders to align testing with business goals.",
                  side: "left"
                },
                {
                  title: "Mobile Lead Consultant",
                  company: "Future Hub Myanmar",
                  period: "2022 - 2024",
                  description: "Implemented and led the full lifecycle of PAS IDMS development—from concept ideation and technical architecture to implementation and continuous improvement. Utilizing micro-services to support distinct features on the ERP dashboard, tailored for various customer types, including modern trade and standard customers.",
                  side: "right"
                },
                {
                  title: "Senior Freelance Developer",
                  company: "Freelancer UpWork",
                  period: "2022 - 2024",
                  description: "Remote working for Software Development. Laravel Developer for 'HunterX Freelancer job hunting platform' - Laravel. Full Stack Developer for 'Uemura Travel & Social Event Agency' - October CMS. Renovation of the Australia Disability Advocacy Resource Unit Website (DARU) with WordPress elementor customize plugin development.",
                  side: "left"
                },
                {
                  title: "Development Team Leader",
                  company: "PRO 1 Global Home Center",
                  period: "2020 - 2022",
                  description: "Led the project involving system development and maintenance for a PRO 1 Online Store, including integration with ERP, SRP, web security, payment gateway integration, mobile APIs, microservice mobile app/inventory stock check and project management.",
                  side: "right"
                },
                {
                  title: "Senior Web Developer",
                  company: "TY Solutions",
                  period: "2018 - 2020",
                  description: "Developed new features for Myanmar's Highway Bus Operation Management System. Focused on system security, maintenance, API development, and integration with third-party payment gateways.",
                  side: "left"
                },
                {
                  title: "Web Developer",
                  company: "HTET UK Group",
                  period: "2015 - 2018",
                  description: "Contributed to projects including the development of a GYM Management System, Student Attendance System for the University of Dental Medicine, Find Property mobile application, and various portfolio websites.",
                  side: "right"
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: job.side === 'left' ? -100 : 100,
                    rotateY: job.side === 'left' ? -15 : 15
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    rotateY: 0
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${job.side === 'left' ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-slate-900 z-10"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />
                  
                  {/* Content Card */}
                  <motion.div
                    className={`w-5/12 p-8 rounded-3xl transition-all duration-500 group ${job.side === 'left' ? 'mr-auto' : 'ml-auto'} ${
                      theme === 'dark'
                        ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50'
                        : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-cyan-400/30'
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      rotateY: job.side === 'left' ? 2 : -2
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      borderRadius: `${30 + Math.random() * 20}px ${40 + Math.random() * 20}px ${35 + Math.random() * 20}px ${25 + Math.random() * 20}px`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05))",
                          "linear-gradient(225deg, rgba(168, 85, 247, 0.05), rgba(34, 211, 238, 0.05))",
                          "linear-gradient(45deg, rgba(34, 211, 238, 0.05), rgba(168, 85, 247, 0.05))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {job.company}
                          </p>
                        </div>
                        <div className="text-muted-foreground font-medium mt-2 md:mt-0">
                          {job.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {job.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                degree: "Bachelor of Engineering",
                field: "Information Technology",
                school: "Thanlyin Technological University",
                period: "2017 - 2019",
                color: "from-cyan-400 to-blue-500"
              },
              {
                degree: "Post Graduate Diploma",
                field: "Web Engineering",
                school: "University of Information Technology",
                period: "2015 - 2016",
                color: "from-purple-400 to-pink-500"
              },
              {
                degree: "Bachelor of Technology",
                field: "Information Technology",
                school: "Thanlyin Technological University",
                period: "2011 - 2015",
                color: "from-green-400 to-cyan-500"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02,
                }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  borderRadius: `${30 + Math.random() * 20}px ${40 + Math.random() * 20}px ${35 + Math.random() * 20}px ${25 + Math.random() * 20}px`,
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${edu.color} transition-opacity duration-500 ${
                    theme === 'dark' ? 'opacity-0 group-hover:opacity-10' : 'opacity-0 group-hover:opacity-5'
                  }`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${edu.color} mr-4`}>
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">{edu.field}</p>
                    </div>
                  </div>
                  <p className={`font-semibold mb-2 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.school}
                  </p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className={`bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-white to-gray-300' 
                  : 'bg-gradient-to-r from-gray-900 to-gray-600'
              }`}>
                Awards & 
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ml-2">
                Honors
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technology & Innovation Marketplace 2017",
                subtitle: "(MyHealthcare)",
                achievement: "(Top 6 Finalist)",
                issuer: "Issued by FHI360, USAID & Phandeeyar",
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Startup Challenge Myanmar 2015",
                subtitle: "(UniversityLabExchangeProgram)",
                achievement: "(Top Ten Finalist)",
                issuer: "Issued by 2015 Startup Challenge Myanmar",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "2015 Best Student Project Award",
                subtitle: "Technological University (Thanlyin)",
                achievement: "The Best Student Project Award",
                issuer: "Issued by Technological University (Thanlyin)",
                color: "from-green-400 to-cyan-500"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateX: 5,
                }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-yellow-400/50'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-yellow-400/30'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  borderRadius: `${30 + Math.random() * 20}px ${40 + Math.random() * 20}px ${35 + Math.random() * 20}px ${25 + Math.random() * 20}px`,
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${award.color} transition-opacity duration-500 ${
                    theme === 'dark' ? 'opacity-0 group-hover:opacity-10' : 'opacity-0 group-hover:opacity-5'
                  }`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${award.color.split(' ')[1]}, ${award.color.split(' ')[3]})`,
                      `linear-gradient(225deg, ${award.color.split(' ')[3]}, ${award.color.split(' ')[1]})`,
                      `linear-gradient(45deg, ${award.color.split(' ')[1]}, ${award.color.split(' ')[3]})`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${award.color} mr-4`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground">{award.subtitle}</p>
                    </div>
                  </div>
                  {award.achievement && (
                    <p className={`font-semibold mb-2 bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                      {award.achievement}
                    </p>
                  )}
                  <p className="text-muted-foreground">{award.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                References
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "U Paing Thu Chit",
                company: "Future Hub Myanmar",
                position: "Managing Director",
                color: "from-cyan-400 to-blue-500"
              },
              {
                name: "U Htet Aung",
                company: "Pro1 Global Home Center Myanmar",
                position: "Head of IT dept",
                email: "developho@gmail.com",
                color: "from-purple-400 to-pink-500"
              },
              {
                name: "Daw Yadana Win",
                company: "TY Solutions Co., Ltd",
                position: "Managing Director",
                email: "yadanawin1@gmail.com",
                color: "from-green-400 to-cyan-500"
              }
            ].map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.02,
                }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20'
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  borderRadius: `${30 + Math.random() * 20}px ${40 + Math.random() * 20}px ${35 + Math.random() * 20}px ${25 + Math.random() * 20}px`,
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${ref.color} transition-opacity duration-500 ${
                    theme === 'dark' ? 'opacity-0 group-hover:opacity-10' : 'opacity-0 group-hover:opacity-5'
                  }`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {ref.name}
                  </h3>
                  <p className={`font-semibold mb-2 bg-gradient-to-r ${ref.color} bg-clip-text text-transparent`}>
                    {ref.company}
                  </p>
                  <p className={`font-semibold mb-4 bg-gradient-to-r ${ref.color} bg-clip-text text-transparent`}>
                    {ref.position}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutThomazPage;
