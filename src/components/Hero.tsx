import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Narrative Side */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-0 relative z-10 bg-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent">Established in Tharangambadi</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-main leading-[0.95] mb-8">
            Crafting <br /> 
            <span className="italic relative inline-block">
              Elegant
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> <br /> 
            Experiences.
          </h1>

          <p className="text-text-muted text-lg max-w-sm mb-12 font-light leading-relaxed">
            We specialize in turning your wedding and special events into cinematic memories—planned with precision and delivered with heart.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="tel:+917639263815" 
              className="group relative inline-flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-white transition-colors">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Start Planning</span>
                <span className="text-sm font-semibold">+91 76392 63815</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Vertical Rail Text */}
        <div className="absolute left-8 bottom-12 hidden lg:flex items-center gap-4 rotate-180 vertical-text origin-center">
            <span className="text-[9px] uppercase tracking-[0.5em] text-text-muted opacity-40 font-medium"> weddings • corporate • photoshoots • media </span>
        </div>
      </div>

      {/* Visual Side */}
      <div className="w-full md:w-[55%] h-[50vh] md:h-screen relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block" />
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-12 right-12 w-32 h-32 border border-white/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-12 right-12 flex flex-col items-end text-white/80">
            <span className="text-6xl font-serif leading-none italic">A-Z</span>
            <span className="text-[10px] uppercase tracking-[0.4em] mt-2">Full Service Management</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-text-muted hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 opacity-30" />
      </motion.div>
    </section>
  );
}
