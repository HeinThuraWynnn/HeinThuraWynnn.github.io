import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, HelpCircle, Scale, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from './SEO';

const TermsOfService = () => {
  const { theme } = useTheme();

  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
      icon: <Scale className="w-6 h-6 text-cyan-400" />,
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Wynn Solutions Myanmar's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      title: "3. Disclaimer",
      content: "The materials on Wynn Solutions Myanmar's website are provided on an 'as is' basis. Wynn Solutions Myanmar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: "4. Limitations",
      content: "In no event shall Wynn Solutions Myanmar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wynn Solutions Myanmar's website."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-pink-400" />,
      title: "5. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of Myanmar and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEO 
        title="Terms of Service - Wynn Solutions Myanmar | User Agreement" 
        description="Review the Terms of Service for Wynn Solutions Myanmar. Understand the rules, guidelines, and legal agreements governing the use of our website and services."
        keywords="terms of service, user agreement, legal terms, conditions of use, Wynn Solutions Myanmar terms, service agreement, disclaimer, liability limitations"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-5'}`} 
          style={{
            backgroundImage: `linear-gradient(45deg, ${theme === 'dark' ? '#8b5cf6' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
            <FileText className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms of service carefully before using Wynn Solutions Myanmar website operated by us.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' 
                  : 'bg-white border-gray-100 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-xl mr-4 ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}`}>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            By using our website, you agree to these terms.
          </p>
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 group overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)',
              border: '1px solid rgba(168,85,247,0.3)',
            }}
          >
            <span className="relative z-10 text-purple-500 dark:text-purple-300 group-hover:text-white transition-colors duration-300">
              Return to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
