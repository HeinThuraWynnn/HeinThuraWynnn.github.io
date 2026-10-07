import React from 'react';
import { 
  Trophy, 
  ExternalLink, 
  Smartphone, 
  Zap, 
  HeartHandshake, 
  ShieldCheck,
  Compass
} from 'lucide-react';

const GuanOraShowcase: React.FC = () => {
  return (
    <section id="guanora" className="py-8 sm:py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/70 px-3 py-1 rounded-md border border-cyan-200 dark:border-cyan-800">
              01 — FLAGSHIP PRODUCT
            </span>
            {/* Section Index Marker */}
            <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:inline">
              Award-Winning Innovation • Product Owner (PO)
            </span>
          </div>
          <a
            href="https://www.guanora.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline group"
          >
            <span>Live Mini App</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Large Cinematic Rounded Container */}
        <div className="cinematic-container relative bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#0B0F19] dark:via-[#090D16] dark:to-[#070A10] p-6 sm:p-10 md:p-12 lg:p-16 shadow-xl dark:shadow-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80">
          
          {/* Subtle Ambient Brand Atmosphere (Lilac & Cyan Fluently Blobs) */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="gradient-blob gradient-blob-a bg-gradient-to-r from-purple-500/20 via-cyan-500/15 to-transparent" />
            <div className="gradient-blob gradient-blob-b bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
          </div>

          {/* Centered Editorial Header (Always 100% visible) */}
          <div className="max-w-3xl mx-auto text-center space-y-5">
            
            {/* Award Pill with Spring Hover */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 shadow-sm hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>AWARD-WINNING INNOVATION</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Meet GuanOra
            </h2>

            {/* Verified Short Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A privacy-centric digital wellness companion and mood check-in mini app engineered for instant accessibility directly inside Telegram. Led by Thomaz as Product Owner (PO) since June 2026.
            </p>

            {/* Primary Action Button with Fluently Rolling-Text Flip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.guanora.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span className="block h-[20px] overflow-hidden leading-[20px]">
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]">
                    Explore GuanOra
                  </span>
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]" aria-hidden="true">
                    Explore GuanOra
                  </span>
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
              </a>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium px-3.5 py-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:scale-105 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span>Role: Product Owner (PO)</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium px-3.5 py-2 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:scale-105 transition-transform duration-300">
                <Smartphone className="w-3.5 h-3.5 text-purple-500" />
                <span>Telegram Mini App</span>
              </div>
            </div>
          </div>

          {/* Visual Composition: Desktop Window + Overlaid Mobile Mockup + Inside Overlaid Award Card */}
          <div className="mt-10 sm:mt-14 lg:mt-16 relative">
            
            {/* Main Application Mockup (Browser Window) */}
            <div className="browser-window max-w-5xl mx-auto relative group transition-all duration-500 hover:shadow-2xl">
              {/* Browser Window Header */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-white dark:bg-slate-950 px-4 py-1 rounded-md border border-slate-200/80 dark:border-slate-800 text-center max-w-xs truncate">
                  https://guanora-mini-app.pages.dev
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="hidden sm:inline">Edge Live</span>
                </div>
              </div>

              {/* Real UI Screenshot: GuanOra Dashboard */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src="/projects/guanora/dashboard.webp"
                  alt="GuanOra digital wellness application interface"
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 group-hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                
                {/* Sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/10 pointer-events-none" />
              </div>
            </div>

            {/* Overlaid Mobile Phone View (Desktop/Tablet) with Fluently Bento Spring Tilt */}
            <div className="hidden md:block absolute -left-2 lg:-left-6 bottom-4 lg:bottom-8 w-48 sm:w-52 lg:w-60 z-20 drop-shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] cursor-pointer">
              <img
                src="/projects/guanora/mobile-home.webp"
                alt="GuanOra Telegram mobile experience"
                loading="lazy"
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>

            {/* Award Card: Overlaid on large desktop; In normal flow on tablet & mobile to never occlude product UI */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:right-6 lg:bottom-6 z-30 max-w-md lg:max-w-sm w-full mx-auto">
              <div className="award-card shadow-xl lg:shadow-2xl backdrop-blur-xl transform lg:rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center flex-shrink-0 text-2xl shadow-inner border border-amber-500/30">
                    🏆
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-amber-800 dark:text-amber-400">
                      Verified Competition Honor
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-amber-100 leading-snug">
                      Innovation Award Winner
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-amber-200/90 font-medium leading-normal">
                      FutureFit Ventures Business Plan Competition 2026
                    </p>
                    <div className="pt-1.5 flex items-center justify-between text-[11px] text-slate-600 dark:text-amber-300/70 border-t border-amber-500/20">
                      <span>Strategy First International College</span>
                      <span className="font-mono font-semibold">2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Verified Product Narrative: Problem → Idea → Product → Execution */}
          <div className="mt-14 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  <Compass className="w-3.5 h-3.5" />
                  <span>The Problem</span>
                </div>
                <h4 className="text-base font-bold text-foreground">
                  Friction & Stigma
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Traditional wellness tools demand burdensome registrations and heavy native app installs that dissuade casual, daily mental check-ins.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>The Idea</span>
                </div>
                <h4 className="text-base font-bold text-foreground">
                  Zero-Install Telegram App
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Embed intuitive emotional reflection where millions in Myanmar already spend their day—directly within the Telegram ecosystem.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>The Product</span>
                </div>
                <h4 className="text-base font-bold text-foreground">
                  Holistic Well-being Radar
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Features rapid mood check-ins, Wheel of Life holistic balance tracking, and personalized prompt journeys tailored for daily mindfulness.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>The Execution</span>
                </div>
                <h4 className="text-base font-bold text-foreground">
                  Lightweight & Edge-Hosted
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Built with React, TypeScript, and modern CSS on Cloudflare Pages, achieving sub-second load times on 3G/4G cellular networks.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GuanOraShowcase;
