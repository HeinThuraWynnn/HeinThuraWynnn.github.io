import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Technology",
      school: "Thanlyin Technological University",
      period: "2017 - 2019",
      icon: GraduationCap
    },
    {
      degree: "Post Graduate Diploma",
      field: "Web Engineering",
      school: "University of Information Technology",
      period: "2015 - 2016",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      school: "Thanlyin Technological University",
      period: "2011 - 2015",
      icon: GraduationCap
    }
  ];

  const awards = [
    {
      title: "Technology & Innovation Marketplace 2017",
      achievement: "Top 6 Finalist",
      issuer: "FHI360, USAID & Phandeeyar",
      year: "2017"
    },
    {
      title: "Startup Challenge Myanmar 2015",
      achievement: "Top Ten Finalist",
      issuer: "2015 Startup Challenge Myanmar",
      year: "2015"
    },
    {
      title: "2015 Best Student Project Award",
      achievement: "Outstanding Project",
      issuer: "Technological University (Thanlyin)",
      year: "2015"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about building robust systems with expertise in microservices, TDD, and UX optimization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  Lead Software Engineer with {yearsOfExperience}+ years of expertise in Flutter, Kotlin, and PHP, 
                  specializing in scalable mobile/web applications, CI/CD pipelines, and QA-driven development.
                </p>
                <p className="leading-relaxed">
                  Proven track record of reducing production defects by 30% and leading cross-functional 
                  teams to deliver high-performance solutions. Founded Wynn Solutions Myanmar to provide 
                  cutting-edge software and AI solutions.
                </p>
                <p className="leading-relaxed">
                  Passionate about building robust systems with expertise in microservices, TDD, and UX 
                  optimization. Always staying ahead of technology trends and implementing best practices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary-500 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.field}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {edu.school}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="glass dark:glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="h-6 w-6 text-accent-500 mr-2" />
                Awards & Honors
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-accent-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {award.title}
                    </h4>
                    <p className="text-accent-600 dark:text-accent-400 font-medium">
                      {award.achievement}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {award.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {award.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;