import { motion } from 'motion/react';

const PhotographyIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
    <circle cx="12" cy="13" r="5" />
    <circle cx="12" cy="13" r="3" strokeDasharray="1 1" />
    <path d="M3 8V20H21V8H3Z" />
    <path d="M7 8V5H17V8" />
    <circle cx="18" cy="11" r="1" />
  </svg>
);

const EventPlannerIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
    <circle cx="9" cy="14" r="4" />
    <polygon points="9 8 11 10 7 10" />
    <circle cx="15" cy="14" r="4" />
    <polygon points="15 8 17 10 13 10" />
  </svg>
);

const PrintIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M6 15V21H18V15" />
    <path d="M6 9V3H18V9" />
    <path d="M3 9H21V16H3V9Z" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="9" y1="6" x2="15" y2="6" />
    <circle cx="18" cy="12" r="1" />
  </svg>
);

const MediaIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 3C8 3 4 8 4 12C4 16 12 21 12 21C12 21 20 16 20 12C20 8 16 3 12 3Z" />
    <path d="M12 3V21" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const services = [
  {
    number: '01',
    title: 'Photography & Videography',
    description: 'Professional photo lab and candid event coverage that tells your story perfectly.',
  },
  {
    number: '02',
    title: 'Event & Wedding Planning',
    description: 'Comprehensive end-to-end management from concept to final execution.',
  },
  {
    number: '03',
    title: 'Premium Printing',
    description: 'High-quality digital printing, custom albums, and artisanal framing solutions.',
  },
  {
    number: '04',
    title: 'Graphic Design & Media',
    description: 'Custom branding, digital media, and large-scale signage for any requirement.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">What we do</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-text-main leading-tight">
              Comprehensive <span className="italic">Services</span> <br /> for Memorable Events.
            </h3>
          </div>
          <p className="text-text-muted text-lg font-light leading-relaxed max-w-sm">
            Bringing your vision to life with our comprehensive suite of creative and event services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative pb-12 border-b border-black/10 group ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="font-mono text-sm text-accent/40 mb-6 block font-medium group-hover:text-accent transition-colors duration-500">
                    {service.number}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif text-text-main mb-6 italic group-hover:pl-4 transition-all duration-500">
                    {service.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed font-light max-w-sm">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-accent group-hover:rotate-45 transition-all duration-500 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-text-muted group-hover:text-accent">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-black/[0.03] hidden md:block" />
    </section>
  );
}
