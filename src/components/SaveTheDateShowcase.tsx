import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Palette, 
  Camera, 
  Users, 
  QrCode, 
  Languages, 
  Layers
} from 'lucide-react';

const SaveTheDateShowcase: React.FC = () => {
  const verifiedFeatures = [
    {
      icon: Palette,
      title: "Interactive Card Studio",
      description: "4 luxury watercolor themes (Cap Blanc, Blush Rose, La Maison Dorée, Modern Minimal) with live font and layout preview.",
    },
    {
      icon: Clock,
      title: "Real-Time Event Countdown",
      description: "Live countdown timer keeping guests anticipation alive down to the exact days, hours, and seconds.",
    },
    {
      icon: Users,
      title: "Live Guest RSVP & Seat Control",
      description: "1-click attendance confirmation, seat allocation, and real-time dashboard updates for event hosts.",
    },
    {
      icon: Camera,
      title: "4x6 Photo Studio with WebP",
      description: "Automated WebP image compression guaranteeing instant photo loading even on low-bandwidth mobile networks.",
    },
    {
      icon: QrCode,
      title: "Cash Gift & Registry Tracking",
      description: "Direct bank QR code integrations and organized wedding presents bookkeeping.",
    },
    {
      icon: Languages,
      title: "5-Language Internationalization",
      description: "Full multilingual support across English, မြန်မာ, 中文, ไทย, and 日本語.",
    }
  ];

  return (
    <section id="savethedate" className="py-8 sm:py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/70 px-3 py-1 rounded-md border border-rose-200 dark:border-rose-800">
              02 — PRODUCT ENGINEERING SHOWCASE
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:inline">
              Full-Stack Experience Platform • Product Owner (PO)
            </span>
          </div>
          <a
            href="https://savethedate.wynnsolutionsmyanmar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400 hover:underline group whitespace-nowrap flex-shrink-0"
          >
            <span>Visit Platform</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Warm Atelier Cinematic Container */}
        <div className="cinematic-container relative bg-gradient-to-b from-stone-50 via-white to-amber-50/30 dark:from-[#100E14] dark:via-[#0D0B12] dark:to-[#0A090E] p-6 sm:p-10 md:p-12 lg:p-16 shadow-xl dark:shadow-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80">
          
          {/* Subtle Warm Atmosphere (Champagne & Soft Rose Fluently Blobs) */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="gradient-blob gradient-blob-a bg-gradient-to-r from-rose-500/15 via-amber-500/15 to-transparent" />
            <div className="gradient-blob gradient-blob-b bg-gradient-to-r from-amber-500/10 via-rose-400/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-amber-500/5 rounded-full blur-3xl" />
          </div>

          {/* Centered Editorial Header (Always 100% visible) */}
          <div className="max-w-3xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-rose-500/10 border border-rose-500/25 text-rose-700 dark:text-rose-300 shadow-sm hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>HAUTE COUTURE DIGITAL ATELIER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Save the Date
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A bespoke wedding and celebration invitation studio, engineered with live RSVP analytics, interactive card customization, and fast WebP photo delivery. Led by Thomaz as Product Owner (PO) since June 2026.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://savethedate.wynnsolutionsmyanmar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 text-white shadow-lg hover:shadow-rose-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="block h-[20px] overflow-hidden leading-[20px]">
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]">
                    Launch SaveTheDate WSM
                  </span>
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]" aria-hidden="true">
                    Launch SaveTheDate WSM
                  </span>
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]" />
              </a>

              <a
                href="https://savethedate.wynnsolutionsmyanmar.com/demo-invitation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-foreground hover:bg-stone-50 dark:hover:bg-stone-800/80 hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="block h-[20px] overflow-hidden leading-[20px]">
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]">
                    See Invitation Demo
                  </span>
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[20px]" aria-hidden="true">
                    See Invitation Demo
                  </span>
                </span>
              </a>

              <div className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium px-3.5 py-3 rounded-lg bg-stone-100/90 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800/80">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Role: Product Owner (PO)</span>
              </div>
            </div>
          </div>

          {/* Product Composition: Browser Card Studio + Mobile Views */}
          <div className="mt-10 sm:mt-14 lg:mt-16 relative">
            
            {/* Desktop Browser Window Mockup */}
            <div className="browser-window max-w-5xl mx-auto relative group">
              <div className="px-4 py-3 bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-white dark:bg-stone-950 px-4 py-1 rounded-md border border-stone-200/80 dark:border-stone-800 text-center max-w-xs truncate">
                  https://savethedate.wynnsolutionsmyanmar.com
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="hidden sm:inline">Production</span>
                </div>
              </div>

              {/* Real UI Screenshot: Save the Date Card Studio */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] bg-stone-950 overflow-hidden">
                <img
                  src="/projects/savethedate/card-studio.webp"
                  alt="SaveTheDate WSM Card Studio preview"
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
                
                {/* Warm atelier overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-rose-500/10 pointer-events-none" />
              </div>
            </div>

            {/* Overlaid Mobile Phone Views (Desktop/Tablet) with Fluently Bento Spring Tilt */}
            <div className="hidden lg:block absolute -right-2 lg:-right-6 bottom-4 lg:bottom-8 w-52 lg:w-60 z-20 phone-window shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] cursor-pointer">
              <div className="relative bg-slate-950 aspect-[9/19] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full z-10" />
                <img
                  src="/projects/savethedate/mobile-envelope.webp"
                  alt="SaveTheDate mobile wax-seal digital invitation"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Feature Highlight Pill inside container */}
            <div className="hidden lg:block absolute left-6 bottom-6 z-30 max-w-xs bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Digital Atelier</h4>
                  <p className="text-xs font-semibold text-foreground">Wax Seal • Envelope Flip • 4 Watercolor Themes</p>
                </div>
              </div>
            </div>

          </div>

          {/* Verified Engineering Features Grid */}
          <div className="mt-14 sm:mt-20 pt-10 border-t border-stone-200/80 dark:border-stone-800/80">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Engineered for Effortless Host Management & Guest Delight
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">
                Every feature was built from the ground up to solve practical logistics for modern weddings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {verifiedFeatures.map((feat, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] space-y-2.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SaveTheDateShowcase;
