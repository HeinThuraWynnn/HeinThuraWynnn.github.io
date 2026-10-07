import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="cinematic-container relative p-8 sm:p-12 md:p-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="relative space-y-6 max-w-2xl mx-auto">
            
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Ready to ship?
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a product idea? <br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Let's build something useful.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              From initial product architecture to high-performance production rollout. Available for custom web, mobile apps, and technical consultation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white text-slate-950 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start a Conversation</span>
                <MessageSquare className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
              </button>

              <a
                href="mailto:wynnsolutionsmyanmar@gmail.com?subject=Product%20Inquiry"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700/80 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Direct Email</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
