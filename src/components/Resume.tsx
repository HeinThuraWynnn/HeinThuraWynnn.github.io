import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hein Thura Wynn
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-400 mb-6">
              Product Owner • Freelance PM & WebDev • Senior Product Engineer
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>heinthurawynn.developer@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+669-557-368-03</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Myanmar</span>
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/25 overflow-hidden"
            >
              <Download className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] group-hover:translate-y-0.5" />
              <span className="h-[20px] overflow-hidden inline-flex flex-col">
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  Download PDF
                </span>
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full font-bold">
                  Download PDF
                </span>
              </span>
            </motion.button>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced Lead Software Engineer with {yearsOfExperience}+ years of expertise in mobile and web development.
              Specialized in Flutter, Kotlin, PHP, and AI integration. Proven track record in building
              scalable applications, implementing CI/CD pipelines, and leading QA-driven development processes.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Dart/Flutter', 'Kotlin', 'Java', 'PHP', 'JavaScript', 'Python'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'React', 'Vue.js', 'Docker', 'AWS', 'CI/CD', 'Git'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">2015 - Present</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Lead Software Engineer - Wynn Solutions Myanmar
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Led development of 50+ mobile and web applications</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 70%</li>
                  <li>• Specialized in Flutter, Kotlin, and PHP development</li>
                  <li>• Managed QA processes and automated testing frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education & Certifications
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  STEAM4INNOVATOR English Program
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  National Innovation Agency (NIA), Thailand • Ministry of Higher Education, Science, Research and Innovation
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Entrepreneurship and New Venture Creation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SFUx by Strategy First International College
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Google Project Management Professional Certificate (v2)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Google
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Computer Science & Software Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Self-taught with continuous professional development
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Honors & Awards
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                    2026
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Innovation Award Winner — FutureFit Ventures Business Plan Competition 2026
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Issued by Strategy First International College • GuanOra
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
