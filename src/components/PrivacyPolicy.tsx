import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from './SEO';

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us. This may include your name, email address, phone number, and any other information you choose to provide."
    },
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Wynn Solutions Myanmar and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads."
    },
    {
      icon: <Lock className="w-6 h-6 text-pink-400" />,
      title: "Data Security",
      content: "We work hard to protect Wynn Solutions Myanmar and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular: We encrypt many of our services using SSL. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems."
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: "Sharing of Information",
      content: "We do not share personal information with companies, organizations and individuals outside of Wynn Solutions Myanmar unless one of the following circumstances applies: With your consent, for external processing, or for legal reasons."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SEO 
        title="Privacy Policy - Wynn Solutions Myanmar | Data Protection & Security" 
        description="Read the Privacy Policy of Wynn Solutions Myanmar. We are committed to protecting your personal information and ensuring data security. Learn about our data collection, usage, and sharing practices."
        keywords="privacy policy, data protection, data security, user privacy, GDPR compliance, Wynn Solutions Myanmar privacy, personal information handling"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-5'}`} 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${theme === 'dark' ? '#06b6d4' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
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
          <div className="inline-flex items-center justify-center p-3 rounded-2xl mb-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20">
            <Shield className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. It is Wynn Solutions Myanmar's policy to respect your privacy regarding any information we may collect from you across our website.
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
                  ? 'bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/10' 
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
            If you have any questions about our Privacy Policy, please contact us.
          </p>
          <a 
            href="mailto:info@wynnsolutionsmyanmar.com"
            className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 group overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.2) 100%)',
              border: '1px solid rgba(6,182,212,0.3)',
            }}
          >
            <span className="relative z-10 text-cyan-500 dark:text-cyan-300 group-hover:text-white transition-colors duration-300">
              Contact Privacy Team
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
