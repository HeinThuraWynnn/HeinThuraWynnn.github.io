import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BackgroundParticles from './components/BackgroundParticles';
import SEO from './components/SEO';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GuanOraShowcase from './components/GuanOraShowcase';
import Capabilities from './components/Capabilities';
import SaveTheDateShowcase from './components/SaveTheDateShowcase';
import OtherProjects from './components/OtherProjects';
import AboutExperience from './components/AboutExperience';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import AboutThomazPage from './components/AboutThomazPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  // Renovated Product Engineering Homepage
  const HomePage = () => (
    <main className="relative min-h-screen">
      <SEO
        title="Wynn Solutions Myanmar - Senior Product Engineering & Digital Studio"
        description="Wynn Solutions Myanmar designs and builds high-performance digital products, mobile applications, web platforms, and AI solutions. Led by Hein Thura Wynn."
        image="https://wynnsolutionsmyanmar.com/w-logo.png"
      />

      {/* 1. Hero: Product Engineering Focus */}
      <Hero />

      {/* 2. Selected Work Intro & Flagship: GuanOra */}
      <div id="work" className="pt-6 sm:pt-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Curated Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Selected Work
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Real digital products designed, engineered, and deployed to production. Every featured project represents genuine architecture and real users.
            </p>
          </div>
        </div>

        {/* Flagship Product Showcase: GuanOra */}
        <GuanOraShowcase />
      </div>

      {/* 3. Core Capabilities (Editorial Layout) */}
      <div className="scroll-mt-20">
        {/* Alias anchor for backward compatibility */}
        <div id="services" />
        <Capabilities />
      </div>

      {/* 4. Product Engineering Showcase: Save the Date */}
      <SaveTheDateShowcase />

      {/* 5. Enterprise & Client Portfolio */}
      <OtherProjects />

      {/* 6. Experience & Leadership */}
      <div className="scroll-mt-20">
        <AboutExperience />
      </div>

      {/* 7. Final Call to Action */}
      <FinalCTA />

      {/* 8. Contact Section */}
      <div className="scroll-mt-20">
        <Contact />
      </div>
    </main>
  );

  // About Thomaz Page with Layout
  const AboutThomazPageWithLayout = () => (
    <div className="pt-16">
      <AboutThomazPage />
    </div>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen transition-colors duration-300 bg-background text-foreground antialiased selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 relative">
        {/* Ambient Running Particles (Light: Cyan & Dark Spots / Dark: Luminescent Cyan) */}
        <BackgroundParticles />

        {/* Navigation */}
        <Navigation />

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-thomaz" element={<AboutThomazPageWithLayout />} />
          <Route path="/resume" element={<AboutThomazPageWithLayout />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
