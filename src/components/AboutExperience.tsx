import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Lock, 
  X, 
  CheckCircle,
  Briefcase,
  ExternalLink
} from 'lucide-react';

const AboutExperience: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11;
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_PORTFOLIO_PASSWORD || 'wsm2026';
    if (password === correctPassword) {
      const link = document.createElement('a');
      link.href = '/portfolio.pdf';
      link.download = 'Wynn_Solutions_Portfolio.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowPasswordModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password. Please request via email.');
    }
  };

  const experienceHighlights = [
    {
      role: "Product Owner (PO)",
      company: "GuanOra & Save the Date",
      period: "June 2026 - Present",
      location: "Digital Products",
      highlight: "Spearheading product vision, roadmaps, and delivery for GuanOra (FutureFit Ventures 2026 Innovation Award winner) and Save the Date (bespoke digital invitation studio)."
    },
    {
      role: "Freelance Project Manager & Web Developer",
      company: "Upwork Global (Rising Talent)",
      period: "2022 - Present",
      location: "Remote",
      highlight: "Delivering end-to-end luxury e-commerce, custom ERP integrations, and AI solutions as a Rising Talent Upwork consultant.",
      deliverables: [
        { name: "Luxe Icone", url: "https://luxeicone.com/", status: "Active / Ongoing", desc: "Full site renovation and customized ERP integration" },
        { name: "Luxury With Discounts", url: "https://luxurywithdiscounts.com/", status: "Completed", desc: "Full site renovation and custom shipping method integration" },
        { name: "The Personal Shopper Agency", url: "https://thepersonalshopperagency.com/", status: "Completed", desc: "Multilingual translation system and AI integration" }
      ]
    },
    {
      role: "QA Lead & Test Owner",
      company: "Alex International",
      period: "2024 - June 2026",
      location: "Remote",
      highlight: "Directed quality strategy and regression automation across 5+ web/mobile platforms, reducing production defect incidence by 30%."
    },
    {
      role: "Mobile Lead Consultant",
      company: "Future Hub Myanmar",
      period: "2022 - 2024",
      location: "Myanmar",
      highlight: "Architected PAS iDMS distribution platform with microservices supporting ERP dashboards across modern trade retail tiers."
    },
    {
      role: "Development Team Leader",
      company: "PRO 1 Global Home Center",
      period: "2020 - 2022",
      location: "Myanmar",
      highlight: "Spearheaded e-commerce architecture, payment gateway security, ERP integrations, and warehouse inventory stock audit APIs."
    },
    {
      role: "Senior Web Developer",
      company: "TY Solutions",
      period: "2018 - 2020",
      location: "Myanmar",
      highlight: "Engineered high-concurrency bus ticketing systems, real-time seat inventory reservation, and reporting pipelines."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200 dark:border-slate-700">
            PRODUCT LEADERSHIP & VERIFIED TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Built by engineers who care about what ships to users.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
            Wynn Solutions Myanmar is led by Hein Thura Wynn (Thomaz). Since June 2026, Thomaz serves as Product Owner (PO) for GuanOra and Save the Date, while continuing as a Rising Talent Upwork Freelancer delivering full-stack web development and technical project management with over {yearsOfExperience}+ years of software expertise.
          </p>
        </div>

        {/* Lead Engineer Profile + Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Engineer Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="studio-card p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 flex-shrink-0">
                  <img
                    src="/thomaz.jpeg"
                    alt="Hein Thura Wynn (Thomaz)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Hein Thura Wynn
                  </h3>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Product Owner & Freelance PM/WebDev
                  </p>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <span>★ Rising Talent on Upwork</span>
                  </p>
                  <p className="text-xs text-muted-foreground font-mono pt-0.5">
                    {yearsOfExperience}+ Years Professional Practice
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Product Owner driving GuanOra (FutureFit Ventures 2026 Innovation Award winner) and Save the Date since June 2026. Rising Talent Upwork consultant specializing in technical project management, modern full-stack web engineering, and product delivery with over a decade of hands-on software development experience.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Product Owner — GuanOra & Save the Date (June 2026 – Present)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Rising Talent Upworker — Freelance PM & WebDev (2022 – Present)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Innovation Award Winner — FutureFit Ventures 2026</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>Former QA Lead & Test Owner (Alex International, 2024 – June 2026)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-slate-400" />
                  <span>B.E. Information Technology (Thanlyin TU) & PGD (UIT)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about-thomaz"
                  className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-xs text-center bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-1.5 group cursor-pointer"
                >
                  <span className="block h-[16px] overflow-hidden leading-[16px]">
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[16px]">
                      Full Biography & Credentials
                    </span>
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[16px]" aria-hidden="true">
                      Full Biography & Credentials
                    </span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
                </Link>

                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground group cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
                  <span className="block h-[16px] overflow-hidden leading-[16px]">
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[16px]">
                      PDF Portfolio
                    </span>
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[16px]" aria-hidden="true">
                      PDF Portfolio
                    </span>
                  </span>
                </button>
              </div>

            </div>

            {/* Credibility summary note */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs text-muted-foreground flex items-center justify-between">
              <span>Verified Track Record Since 2015</span>
              <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">Dec 2015 – Present</span>
            </div>
          </div>

          {/* Right Column: Key Career Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-500" />
                <span>Selected Professional Milestones</span>
              </h3>

              <div className="space-y-4">
                {experienceHighlights.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl studio-card hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-foreground">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          {exp.company}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                      {exp.highlight}
                    </p>

                    {exp.deliverables && (
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 space-y-2">
                        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Verified Upwork Client Deliverables:
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.deliverables.map((item, dIdx) => (
                            <a
                              key={dIdx}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 hover:border-cyan-500/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all text-xs group/item"
                            >
                              <div className="space-y-0.5 min-w-0">
                                <div className="font-semibold text-foreground group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 flex items-center gap-1.5">
                                  <span>{item.name}</span>
                                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-60 group-hover/item:opacity-100" />
                                </div>
                                <p className="text-muted-foreground text-[11px] leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium flex-shrink-0 w-fit ${
                                item.status.includes('Active') 
                                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {item.status}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Password Modal for Portfolio PDF */}
      <AnimatePresence>
        {showPasswordModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPasswordModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-full sm:max-w-md p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-50"
            >
              <button
                onClick={() => setShowPasswordModal(false)}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground cursor-pointer p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Protected Portfolio Document</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Please enter the access password to download the confidential client portfolio.
                </p>
                <p className="text-[11px] text-muted-foreground/75">
                  Need the password? Contact{' '}
                  <a href="mailto:wynnsolutionsmyanmar@gmail.com?subject=Portfolio%20Password%20Request" className="text-cyan-600 dark:text-cyan-400 underline">
                    wynnsolutionsmyanmar@gmail.com
                  </a>
                </p>
              </div>

              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-foreground text-sm outline-none focus:border-cyan-500 transition-colors"
                    autoFocus
                  />
                  {error && (
                    <p className="text-xs text-rose-500 mt-1.5 font-medium">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Unlock & Download
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutExperience;
