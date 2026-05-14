import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-[45px] w-[120px] overflow-hidden flex items-center justify-center relative">
            <img 
              src="/logo.png" 
              alt="Sanjay Art Logo" 
              className="absolute h-[54px] w-auto max-w-none object-contain scale-[1.1]"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.display = 'none';
                  parent.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                }
              }}
            />
          </div>
          <div className="logo-fallback hidden flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center border-2 border-accent rounded-lg bg-surface">
              <span className="font-serif text-xl font-bold text-accent uppercase">SA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-accent uppercase leading-none mb-1">
                Sanjay Art
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.4em] uppercase opacity-70 text-text-main italic">Events & Media</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.4em] uppercase font-bold text-text-main hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-main hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-bg shadow-xl border-t border-black/5 md:hidden flex flex-col"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 text-text-main hover:text-accent hover:bg-black/5 border-b border-black/5 uppercase tracking-[0.2em] text-[11px] font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
