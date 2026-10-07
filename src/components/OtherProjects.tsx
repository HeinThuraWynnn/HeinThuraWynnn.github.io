import React from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Truck, 
  Plane, 
  Accessibility, 
  Bus, 
  GraduationCap, 
  ExternalLink,
  Globe
} from 'lucide-react';

const OtherProjects: React.FC = () => {
  const projects = [
    {
      title: "Luxe Icone Luxury E-Commerce & ERP Integration",
      client: "Luxe Icone",
      role: "Technical PM & Web Engineering",
      period: "2026 (Active)",
      link: "https://luxeicone.com/",
      status: "Active / Ongoing",
      icon: ShoppingBag,
      description: "Full platform renovation and customized enterprise ERP integration for a premier luxury boutique. Engineered secure checkout, inventory synchronization, and responsive luxury catalog UX.",
      tags: ["Full Site Renovation", "Custom ERP", "Upwork Rising Talent", "Luxury E-Commerce", "Payment & Inventory"]
    },
    {
      title: "Luxury With Discounts Shipping & Platform Renovation",
      client: "Luxury With Discounts",
      role: "Full-Stack Renovation & Logistics Integration",
      period: "2025 - 2026",
      link: "https://luxurywithdiscounts.com/",
      status: "Completed",
      icon: Truck,
      description: "Comprehensive site renovation and custom shipping method integration for luxury retail e-commerce. Configured tiered shipping rules, checkout enhancements, and logistics APIs.",
      tags: ["Custom Shipping Methods", "Full Site Renovation", "Upwork Rising Talent", "E-Commerce", "Logistics APIs"]
    },
    {
      title: "The Personal Shopper Agency Multilingual AI System",
      client: "The Personal Shopper Agency",
      role: "AI Multilingual Integration & Web Development",
      period: "2025 - 2026",
      link: "https://thepersonalshopperagency.com/",
      status: "Completed",
      icon: Globe,
      description: "Implemented AI-driven multilingual translation systems for an international luxury personal shopping agency, enabling seamless global client communication and personalized onboarding.",
      tags: ["AI Integration", "Multilingual Translation", "Upwork Rising Talent", "Agency Platform", "API Automation"]
    },
    {
      title: "PRO 1 Online Store & Inventory Microservices",
      client: "PRO 1 Global Home Center",
      role: "Development Team Leader",
      period: "2020 - 2022",
      icon: ShoppingBag,
      description: "Full system development and maintenance for the flagship PRO 1 Online Store. Integrated with enterprise ERP/SRP systems, secure banking payment gateways, and high-concurrency microservice APIs for warehouse stock audits.",
      tags: ["E-Commerce", "ERP Integration", "Payment Gateway", "Microservices", "Mobile APIs"]
    },
    {
      title: "PAS iDMS Distribution Management System",
      client: "Future Hub Myanmar",
      role: "Mobile Lead Consultant",
      period: "2022 - 2024",
      icon: Truck,
      description: "Implemented and led the full engineering lifecycle of the PAS iDMS distribution platform. Architected microservices to power distinct ERP dashboard modules tailored for modern trade and distribution networks.",
      tags: ["Distribution ERP", "Microservices", "B2B Logistics", "Flutter", "Architecture"]
    },
    {
      title: "Uemura Travel & Social Concierge Platform",
      client: "Uemura Travel & Concierge Agency",
      role: "Full Stack Developer",
      period: "2022 - 2024",
      link: "https://uemura-travel.com",
      icon: Plane,
      description: "Engineered a bespoke concierge booking and social event agency web platform using October CMS. Developed custom reporting analytics, automated customer notifications, and secure payment processing.",
      tags: ["October CMS", "PHP", "Social Network", "Booking APIs", "Reporting"]
    },
    {
      title: "DARU Accessible Web Renovation",
      client: "Disability Advocacy Resource Unit (Australia)",
      role: "Senior Web Developer (WCAG Standards)",
      period: "2022 - 2024",
      link: "https://daru.org.au",
      icon: Accessibility,
      description: "Modernized the web infrastructure for Australia's Disability Advocacy Resource Unit with strict adherence to accessibility standards (WCAG), custom plugin development, and responsive information design.",
      tags: ["Accessibility (WCAG)", "WordPress", "Custom Plugins", "Semantic Web"]
    },
    {
      title: "Highway Bus Ticketing & Operations Platform",
      client: "TY Solutions / Elite Express Myanmar",
      role: "Senior Web Developer",
      period: "2018 - 2020",
      icon: Bus,
      description: "Engineered mission-critical features for Myanmar's highway bus operations management system, focusing on real-time seat inventory reservation, API security, and local online payment gateways.",
      tags: ["Online Ticketing", "Seat Reservation", "Payment Gateways", "High Availability"]
    },
    {
      title: "Dental Student & Academic Management System",
      client: "University of Dental Medicine Yangon",
      role: "Web Developer",
      period: "2015 - 2018",
      icon: GraduationCap,
      description: "Developed local web database systems including student attendance management, academic exam record tracking, and faculty timetable scheduling for the University of Dental Medicine.",
      tags: ["PHP", "MySQL", "Attendance Tracking", "Student Database", "Scheduling"]
    }
  ];

  return (
    <section id="other-projects" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200 dark:border-slate-700">
            ENTERPRISE & CLIENT PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Proven track record across industries.
          </h2>
          <p className="text-base text-muted-foreground mt-3 leading-relaxed">
            International luxury e-commerce, nationwide logistics ERPs, AI-powered multilingual platforms, and accessibility-certified web applications delivered for global clients.
          </p>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="studio-card p-6 sm:p-7 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Card Top Meta */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950 transition-colors">
                    <proj.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {proj.status && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                        proj.status.includes('Active')
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {proj.status}
                      </span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground bg-slate-100/70 dark:bg-slate-800/70 px-2.5 py-1 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                      {proj.period}
                    </span>
                  </div>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {proj.link ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>{proj.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground inline flex-shrink-0" />
                      </a>
                    ) : (
                      proj.title
                    )}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 font-medium flex-wrap">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{proj.client}</span>
                    <span>•</span>
                    <span className="text-slate-600 dark:text-slate-300">{proj.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40"
                    >
                      {tag}
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

export default OtherProjects;
