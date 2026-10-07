import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Database, 
  Brain, 
  Cloud 
} from 'lucide-react';

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      index: "01",
      icon: Smartphone,
      category: "Mobile Development",
      summary: "Native and cross-platform mobile apps engineered for speed, offline reliability, and intuitive gestures.",
      technologies: ["Flutter", "Kotlin", "Android SDK", "iOS", "Telegram Mini Apps", "State Management (Bloc / Provider)"]
    },
    {
      index: "02",
      icon: Globe,
      category: "Web Platforms & SPAs",
      summary: "Modern client-side applications built with responsive design, modular architecture, and sub-second rendering.",
      technologies: ["React", "TypeScript", "Vite", "Vue.js", "Tailwind CSS", "Next.js / SSR"]
    },
    {
      index: "03",
      icon: Layers,
      category: "Product Ownership & Agile PM",
      summary: "End-to-end product leadership from concept ideation and backlog prioritization to high-velocity sprint execution and release management.",
      technologies: ["Product Ownership (PO)", "Sprint & Backlog Planning", "Agile / Scrum / Kanban", "User Story Mapping", "Global Delivery & Technical PM (Upwork Rising Talent)", "QA & Release Governance"]
    },
    {
      index: "04",
      icon: Database,
      category: "Backend, APIs & Microservices",
      summary: "Robust server backends, secure payment gateway integrations, and data modeling for mission-critical services.",
      technologies: ["PHP", "Laravel", "RESTful APIs", "Microservices", "PostgreSQL", "MySQL", "October CMS"]
    },
    {
      index: "05",
      icon: Brain,
      category: "AI & Machine Learning Integration",
      summary: "Practical AI integrations including custom prompts, automated document processing, and generative AI features.",
      technologies: ["LLM Integration", "Prompt Engineering", "OpenAI / Claude APIs", "Cognitive Workflow Automation"]
    },
    {
      index: "06",
      icon: Cloud,
      category: "Cloud Infrastructure & DevOps",
      summary: "Resilient deployment environments, edge caching, serverless workers, and ongoing maintenance pipelines.",
      technologies: ["Cloudflare Pages / Workers", "AWS", "DigitalOcean", "Docker Basics", "SSL & Domain Automation"]
    }
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200 dark:border-slate-700">
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Engineering depth across the product lifecycle.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
            Bridging technical execution with product strategy. We build scalable systems that deliver predictable results from prototype to high-traffic production.
          </p>
        </div>

        {/* Editorial Layout: Divided Rows with Clean Typography and Tag Pills */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800/80 border-t border-b border-slate-200 dark:border-slate-800/80">
          {capabilities.map((item) => (
            <div
              key={item.index}
              className="py-8 sm:py-10 group transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-slate-50/50 dark:hover:bg-slate-900/30 px-2 sm:px-4 rounded-xl hover:translate-x-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Index & Category Name */}
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground/60 font-semibold group-hover:text-cyan-500 transition-colors">
                    {item.index}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <span>{item.category}</span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] text-cyan-500 text-sm">→</span>
                    </h3>
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="lg:col-span-4 flex flex-wrap gap-1.5 pt-1 lg:pt-0">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-md font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium transition-transform duration-200 ease-[cubic-bezier(0.34,1.4,0.64,1)] hover:scale-105 hover:border-cyan-400/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
