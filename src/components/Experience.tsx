import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  const experiences = [
    {
      title: "Product Owner (PO)",
      company: "GuanOra & Save the Date",
      period: "June 2026 - Present",
      location: "Digital Products",
      type: "Product Leadership",
      achievements: [
        "Product Owner for GuanOra, winner of the FutureFit Ventures 2026 Innovation Award",
        "Product Owner for Save the Date, luxury interactive digital invitation studio",
        "Leading user research, feature prioritization, UX design, and agile cloud deployment"
      ]
    },
    {
      title: "Freelance Project Manager & Web Developer",
      company: "Upwork Global (Rising Talent)",
      period: "2022 - Present",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Rising Talent status on Upwork delivering technical project management and full-stack web applications for global clients",
        "Luxe Icone (luxeicone.com): Full site renovation and customized ERP integration (Active / Ongoing)",
        "Luxury With Discounts (luxurywithdiscounts.com): Full site renovation and custom shipping method integration (Completed)",
        "The Personal Shopper Agency (thepersonalshopperagency.com): Multilingual translation system and AI integration (Completed)"
      ]
    },
    {
      title: "QA Lead & Test Owner",
      company: "Alex International",
      period: "2024 - June 2026",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Led end-to-end QA for 5+ web/mobile applications, reducing production defects by 30%",
        "Established scalable QA processes from scratch, including automated regression testing",
        "Owned quality strategy across Agile teams, collaborating with developers and stakeholders"
      ]
    },
    {
      title: "Development Team Leader",
      company: "PRO 1 Global Home Center",
      period: "2020 - 2022",
      location: "Myanmar",
      type: "Full-time",
      achievements: [
        "Led system development and maintenance for PRO 1 Online Store",
        "Integrated with ERP, SRE, web security, payment gateway integration",
        "Developed mobile APIs and microservices mobile app for inventory stock check"
      ]
    },
    {
      title: "Senior Web Developer",
      company: "TY Solutions",
      period: "2018 - 2020",
      location: "Myanmar",
      type: "Full-time",
      achievements: [
        "Developed new features for Myanmar's Highway Bus Operation Management System",
        "Focused on system security, maintenance, and API development",
        "Integrated with third-party payment gateways"
      ]
    },
    {
      title: "Web Developer",
      company: "HTET UK Group",
      period: "2015 - 2018",
      location: "Myanmar",
      type: "Full-time",
      achievements: [
        "Developed GYM Management System and Student Attendance System",
        "Created Find Property mobile application",
        "Built various company portfolio websites"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {yearsOfExperience}+ years of professional experience in software development and quality assurance
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass dark:glass-dark rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center mb-4">
                      <Building className="h-5 w-5 text-secondary-500 mr-2" />
                      <span className="text-lg font-semibold text-secondary-600 dark:text-secondary-400">
                        {exp.company}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
