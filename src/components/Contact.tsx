import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Mail,
  Phone,
  Send,
  Clock,
  Globe,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Linkedin } from './BrandIcons';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const startYear = 2015;
  const startMonth = 11; // December
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: 'web'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const hasRecaptcha = Boolean(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setCaptchaError(null);

    try {
      let captchaToken: string | undefined;
      if (hasRecaptcha) {
        if (!executeRecaptcha) {
          setCaptchaError('reCAPTCHA is not ready. Please try again.');
          setIsSubmitting(false);
          return;
        }
        captchaToken = await executeRecaptcha('contact_form');
        if (!captchaToken) {
          setCaptchaError('Failed to verify reCAPTCHA. Please try again.');
          setIsSubmitting(false);
          return;
        }
      }

      // EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        project_type: formData.projectType,
        to_email: 'wynnsolutionsmyanmar@gmail.com',
        ...(captchaToken ? { 'g-recaptcha-response': captchaToken } : {}),
        submission_date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      };

      // Send notification email to you
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Send auto-reply to sender (if auto-reply template is configured)
      if (autoReplyTemplateId) {
        try {
          await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
        } catch (autoReplyError) {
          console.warn('Auto-reply failed, but main email was sent:', autoReplyError);
        }
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: 'web'
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "wynnsolutionsmyanmar@gmail.com",
      link: "mailto:wynnsolutionsmyanmar@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+669-557-368-03",
      link: "tel:+66955736803"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "www.wynnsolutionsmyanmar.com",
      link: "https://www.wynnsolutionsmyanmar.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/heinthurawynn" // Add actual LinkedIn URL here
    }
  ];

  const projectTypes = [
    { value: 'web', label: 'Web Application / Platform' },
    { value: 'mobile', label: 'Mobile App (Flutter / Native)' },
    { value: 'ai', label: 'AI & Automation Solutions' },
    { value: 'erp', label: 'ERP & Custom Integrations' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'consulting', label: 'Product & Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="gradient-blob gradient-blob-b bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200 dark:border-slate-700">
            START A PROJECT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into scalable digital solutions? Let's discuss your roadmap, timeline, and architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Get In Touch
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With {yearsOfExperience}+ years of software development experience, I specialize in architecting robust digital products. Whether you need full-stack web platforms, mobile apps, or technical consultation, let's connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3.5">
              {contactInfo.map((info, index) => {
                const isExternal = info.link.startsWith('http');
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="studio-card p-4 sm:p-5 flex items-center group hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 mr-4 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950 transition-colors flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono">
                        {info.title}
                      </h4>
                      <p className="text-sm font-medium text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="studio-card p-5 sm:p-6"
            >
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-emerald-500 mr-2.5" />
                <h4 className="font-semibold text-foreground text-sm">
                  Availability Status
                </h4>
              </div>
              <p className="text-sm font-medium text-foreground mb-1">
                Currently accepting new projects & consultations
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                Direct response time: Typically within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="studio-card p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {/* Status Messages */}
            {captchaError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 dark:text-red-400 flex items-center gap-3"
              >
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{captchaError}</p>
                  <p className="text-xs opacity-90">Please retry your submission.</p>
                </div>
              </motion.div>
            )}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Message sent successfully!</p>
                  <p className="text-xs opacity-90">Thank you for reaching out. I will respond within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 dark:text-red-400 flex items-center gap-3"
              >
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Failed to send message</p>
                  <p className="text-xs opacity-90">Please contact directly at wynnsolutionsmyanmar@gmail.com</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    maxLength={100}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={254}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    maxLength={100}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200"
                    placeholder="Company or venture"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground transition-all duration-200 cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        className={theme === 'dark' ? "bg-slate-900 text-white" : "bg-white text-slate-900"}
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  maxLength={200}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200"
                  placeholder="Brief description of your project"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  maxLength={5000}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, goals, timeline, and requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
