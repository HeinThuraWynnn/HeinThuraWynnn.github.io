import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const startYear = 2015;
  const startMonth = 11;
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - startYear - (now.getMonth() < startMonth ? 1 : 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow & Fluently Morphing Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="gradient-blob gradient-blob-a bg-gradient-to-r from-cyan-400/25 via-purple-500/20 to-transparent" />
        <div className="gradient-blob gradient-blob-b bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-transparent" />
        <div className="gradient-blob gradient-blob-c bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Engineering status badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100/90 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-sm transition-transform duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Product Engineering & Digital Studio</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">
              Led by Hein Thura Wynn
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-muted-foreground">{yearsOfExperience}+ Years Shipping</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12] max-w-4xl mx-auto">
              We design and build digital products <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                that solve real problems.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed pt-2">
              Mobile Apps • Web Platforms • AI Solutions • Product Management
            </p>

            <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground/80 font-semibold">
              From concept to scalable production.
            </p>
          </motion.div>

          {/* Action CTAs with Fluently Rolling-Text Flip Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span className="block h-[20px] overflow-hidden leading-[20px]">
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]">
                  Explore Selected Work
                </span>
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]" aria-hidden="true">
                  Explore Selected Work
                </span>
              </span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white dark:bg-slate-900/80 text-foreground border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span className="block h-[20px] overflow-hidden leading-[20px]">
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]">
                  Let's Work Together
                </span>
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]" aria-hidden="true">
                  Let's Work Together
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
            </button>
          </motion.div>

          {/* Quick credibility proofs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Innovation Award Winner 2026</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-500" />
              <span>PO — GuanOra & Save the Date</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5 font-medium text-amber-700 dark:text-amber-400">
              <span>★ Upwork Rising Talent</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
